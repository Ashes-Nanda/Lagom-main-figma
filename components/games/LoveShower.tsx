import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Heart, Sparkles, Star, ArrowLeft } from "lucide-react";

interface LoveShowerProps {
  onBack: () => void;
}

interface FloatingElement {
  id: number;
  type: "heart" | "sparkle" | "star";
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const affirmations = [
  "You are making a difference in the world",
  "Your compassion heals hearts",
  "You are stronger than you know",
  "Your kindness matters",
  "You deserve love and care",
  "You are enough, just as you are",
  "Your work has meaning and purpose",
  "You bring light to dark places",
  "You are valued and appreciated",
  "Your healing presence is a gift",
];

export function LoveShower({ onBack }: LoveShowerProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentAffirmation, setCurrentAffirmation] = useState("");
  const [showAffirmation, setShowAffirmation] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>(
    []
  );
  const [particles, setParticles] = useState<FloatingElement[]>([]);
  const intervalRef = useRef<number>();
  const animationRef = useRef<number>();
  const elementIdRef = useRef(0);

  const createFloatingElement = (): FloatingElement => {
    const types: ("heart" | "sparkle" | "star")[] = [
      "heart",
      "heart",
      "heart",
      "heart",
      "sparkle",
      "star", // More hearts for shower effect
    ];
    return {
      id: elementIdRef.current++,
      type: types[Math.floor(Math.random() * types.length)],
      x: Math.random() * window.innerWidth,
      y: -50,
      size: Math.random() * 35 + 20, // Larger hearts
      speed: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.4 + 0.6,
    };
  };

  const createParticleBurst = (x: number, y: number) => {
    const newParticles: FloatingElement[] = [];
    for (let i = 0; i < 10; i++) {
      newParticles.push({
        id: elementIdRef.current++,
        type: "sparkle",
        x: x + (Math.random() - 0.5) * 100,
        y: y + (Math.random() - 0.5) * 100,
        size: Math.random() * 10 + 5,
        speed: Math.random() * 3 + 2,
        opacity: 1,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
  };

  const startSession = () => {
    setIsActive(true);

    // Show first affirmation immediately
    const randomAffirmation =
      affirmations[Math.floor(Math.random() * affirmations.length)];
    setCurrentAffirmation(randomAffirmation);
    setShowAffirmation(true);
    createParticleBurst(window.innerWidth / 2, window.innerHeight / 2);

    // Set up continuous affirmation flow - every 4 seconds
    intervalRef.current = setInterval(() => {
      const randomAffirmation =
        affirmations[Math.floor(Math.random() * affirmations.length)];
      setCurrentAffirmation(randomAffirmation);
      setShowAffirmation(true);
      createParticleBurst(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );

      // Hide affirmation after 3 seconds, then 1 second gap before next one
      setTimeout(() => setShowAffirmation(false), 3000);
    }, 4000);
  };

  const endSession = () => {
    setIsActive(false);
    setShowAffirmation(false);
    setFloatingElements([]);
    setParticles([]);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Animation loop - continuous heart shower
  useEffect(() => {
    const animate = () => {
      if (isActive) {
        // Add new floating elements more frequently for fuller screen
        if (Math.random() < 0.7) {
          // Increased frequency for more hearts
          setFloatingElements((prev) => [...prev, createFloatingElement()]);
        }

        // Update floating elements
        setFloatingElements((prev) =>
          prev
            .map((element) => ({
              ...element,
              y: element.y + element.speed,
              opacity: element.opacity - 0.003, // Slower fade for longer visibility
            }))
            .filter(
              (element) =>
                element.y < window.innerHeight + 100 && element.opacity > 0
            )
        );

        // Update particles
        setParticles((prev) =>
          prev
            .map((particle) => ({
              ...particle,
              y: particle.y - particle.speed,
              opacity: particle.opacity - 0.015,
            }))
            .filter((particle) => particle.opacity > 0)
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  const renderElement = (element: FloatingElement) => {
    const style = {
      position: "absolute" as const,
      left: element.x,
      top: element.y,
      fontSize: element.size,
      opacity: element.opacity,
      pointerEvents: "none" as const,
      zIndex: 10,
    };

    switch (element.type) {
      case "heart":
        return (
          <Heart
            key={element.id}
            style={style}
            className="text-pink-400 fill-current"
          />
        );
      case "sparkle":
        return (
          <Sparkles
            key={element.id}
            style={style}
            className="text-yellow-400"
          />
        );
      case "star":
        return (
          <Star
            key={element.id}
            style={style}
            className="text-blue-400 fill-current"
          />
        );
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10 overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Sparkles className="text-accent w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Floating elements */}
      {floatingElements.map(renderElement)}
      {particles.map(renderElement)}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="py-8">
            <Button
              onClick={onBack}
              variant="outline"
              className="mb-4"
              aria-label="Back to games"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Love Shower
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12">
                Let yourself be surrounded by love, kindness, and positive
                affirmations
              </p>

              {!isActive ? (
                <Button
                  onClick={startSession}
                  size="lg"
                  className="px-8 py-6 text-lg"
                  aria-label="Begin love shower session"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Begin Love Shower
                </Button>
              ) : (
                <div className="space-y-8">
                  <div className="text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                      Let the love and kindness flow through you...
                    </p>
                    <Button
                      onClick={endSession}
                      variant="outline"
                      size="lg"
                      className="px-8 py-4"
                      aria-label="End love shower session"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      End Love Shower
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Affirmation display */}
      {showAffirmation && (
        <div
          className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none"
          role="alert"
          aria-live="polite"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl max-w-lg mx-4 border animate-pulse">
            <p className="text-2xl lg:text-3xl font-medium text-primary text-center">
              {currentAffirmation}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
