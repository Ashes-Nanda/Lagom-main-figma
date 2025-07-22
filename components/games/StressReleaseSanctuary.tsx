import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowLeft, RotateCcw, Volume2, VolumeX } from "lucide-react";

interface StressReleaseSanctuaryProps {
  onBack: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const encouragements = [
  "Feel the tension melting away...",
  "You're releasing what no longer serves you",
  "Each hit is a step toward peace",
  "Let go of today's stress",
  "You're stronger than your stress",
  "Breathe out the pressure",
  "Release and reset",
  "Your well-being matters",
  "Transform stress into strength",
  "You deserve this moment of release",
];

export function StressReleaseSanctuary({
  onBack,
}: StressReleaseSanctuaryProps) {
  const [hitCount, setHitCount] = useState(0);
  const [bagRotation, setBagRotation] = useState(0);
  const [bagScale, setBagScale] = useState(1);
  const [, setParticles] = useState<Particle[]>([]);
  const [currentEncouragement, setCurrentEncouragement] = useState("");
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bagPosition, setBagPosition] = useState({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particleIdRef = useRef(0);
  const bagRef = useRef<HTMLDivElement>(null);

  // Create particle burst effect
  const createParticles = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"];

    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 60,
        maxLife: 60,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Play impact sound (simulated)
  const playImpactSound = () => {
    if (soundEnabled) {
      // In a real implementation, you would play an actual sound file
      // Visual feedback is provided through animations
    }
  };

  // Handle bag punch
  const handlePunch = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Update hit count
    setHitCount((prev) => prev + 1);

    // Animate bag
    setBagScale(0.9);
    setBagRotation((prev) => prev + (Math.random() - 0.5) * 20);
    setBagPosition({
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 5,
    });

    // Create particle effect
    createParticles(x, y);

    // Play sound
    playImpactSound();

    // Show encouragement every 5 hits
    if ((hitCount + 1) % 5 === 0) {
      const randomEncouragement =
        encouragements[Math.floor(Math.random() * encouragements.length)];
      setCurrentEncouragement(randomEncouragement);
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 3000);
    }

    // Reset bag animation
    setTimeout(() => {
      setBagScale(1);
      setBagPosition({ x: 0, y: 0 });
    }, 200);
  };

  // Particle animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      setParticles((prevParticles) => {
        const updatedParticles = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.2, // gravity
            life: particle.life - 1,
            vx: particle.vx * 0.98, // air resistance
          }))
          .filter((particle) => particle.life > 0);

        // Draw particles
        updatedParticles.forEach((particle) => {
          const alpha = particle.life / particle.maxLife;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.globalAlpha = 1;
        return updatedParticles;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Reset game
  const resetGame = () => {
    setHitCount(0);
    setBagRotation(0);
    setBagScale(1);
    setBagPosition({ x: 0, y: 0 });
    setParticles([]);
    setShowEncouragement(false);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/10 to-accent/10 overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        width={window.innerWidth}
        height={window.innerHeight}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setSoundEnabled(!soundEnabled)}
                variant="outline"
                size="sm"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </Button>
              <Button onClick={resetGame} variant="outline" size="sm">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Title and instructions */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Stress Release Sanctuary
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Click or tap the punching bag to release stress mindfully. Each
              hit helps transform tension into peace.
            </p>

            {/* Stats */}
            <Card className="inline-block bg-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {hitCount}
                </div>
                <div className="text-base text-muted-foreground">
                  Stress Releases
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Punching bag */}
          <div className="flex justify-center items-center min-h-96 mb-12">
            <div className="relative">
              {/* Hanging chain */}
              <div className="w-2 h-24 bg-muted mx-auto mb-4 rounded-full shadow-sm" />

              {/* Punching bag */}
              <div
                ref={bagRef}
                className="w-40 h-60 bg-gradient-to-b from-destructive to-destructive/80 rounded-full cursor-pointer shadow-2xl transition-all duration-200 hover:shadow-3xl select-none"
                style={{
                  transform: `
                    scale(${bagScale}) 
                    rotate(${bagRotation}deg) 
                    translate(${bagPosition.x}px, ${bagPosition.y}px)
                  `,
                  transformOrigin: "top center",
                }}
                onClick={handlePunch}
                onMouseDown={(e) => e.preventDefault()}
              >
                {/* Bag details */}
                <div className="absolute inset-0 rounded-full">
                  {/* Highlight */}
                  <div className="absolute top-6 left-6 w-10 h-16 bg-white/20 rounded-full" />

                  {/* Stitching lines */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-destructive-foreground/30" />
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-destructive-foreground/30" />
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-destructive-foreground/30" />
                  <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-destructive-foreground/30" />
                  <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-destructive-foreground/30" />
                </div>

                {/* Impact ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 animate-ping" />
              </div>

              {/* Shadow */}
              <div className="w-32 h-10 bg-black/20 rounded-full mx-auto mt-6 blur-sm" />
            </div>
          </div>

          {/* Instructions */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                  Mindful Stress Release
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">
                      How to use:
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        Click or tap the punching bag
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        Focus on releasing tension with each hit
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        Breathe deeply as you interact
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        Notice the stress leaving your body
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">
                      Remember:
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        This is about mindful release, not aggression
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        Take breaks when you need them
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        Focus on your breathing
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                        You're transforming stress into peace
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Encouragement message */}
      {showEncouragement && (
        <div className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl animate-pulse border">
            <CardContent className="p-8 text-center">
              <p className="text-2xl lg:text-3xl font-medium text-primary">
                {currentEncouragement}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
