import { useState } from "react";
import { LoveShower } from "../components/games/LoveShower";
import { SanitySimulator } from "../components/games/SanitySimulator";
import { BreathingGarden } from "../components/games/BreathingGarden";
import { StressReleaseSanctuary } from "../components/games/StressReleaseSanctuary";
import { BeingLagomFooter } from "../components/ui/footer";
import { RollingAnimation } from "../components/ui/rolling-animation";
import {
  GameCard,
  type GameCardData,
} from "../components/ui/interactive-3d-flip-card";

type GameType =
  | "love-shower"
  | "sanity-simulator"
  | "breathing-garden"
  | "stress-release"
  | null;

const gameCardsData: GameCardData[] = [
  {
    id: "love-shower",
    front: {
      imageSrc: "/games-icons/love shower.png",
      imageAlt: "Love Shower Game",
      title: "Love Shower",
    },
    back: {
      title: "Love Shower",
      description:
        "Let yourself be reminded: you are more than enough. Tap to receive affirmations wrapped in sparkles and softness.",
      features: [
        "Gentle affirmations",
        "Sparkly visual effects",
        "Self-compassion focus",
        "Instant mood boost",
      ],
      buttonText: "Start Love Shower",
    },
  },
  {
    id: "sanity-simulator",
    front: {
      imageSrc: "/games-icons/sanity simulator.png",
      imageAlt: "Sanity Simulator Game",
      title: "Sanity Simulator",
    },
    back: {
      title: "Sanity Simulator",
      description:
        "Welcome to healthcare. Try to survive a day without losing your mind. A satirical, stress-relieving game that hits a little too close to home.",
      features: [
        "Dark humor therapy",
        "Healthcare scenarios",
        "Stress relief through satire",
        "Relatable challenges",
      ],
      buttonText: "Enter Simulator",
    },
  },
  {
    id: "breathing-garden",
    front: {
      imageSrc: "/games-icons/breathing garden.png",
      imageAlt: "Breathing Garden Game",
      title: "Breathing Garden",
    },
    back: {
      title: "Breathing Garden",
      description:
        "Follow visual prompts to inhale, exhale, and return to center. Slow down with nature-inspired breathwork.",
      features: [
        "Guided breathing exercises",
        "Nature-inspired visuals",
        "Mindfulness practice",
        "Stress reduction techniques",
      ],
      buttonText: "Open Garden",
    },
  },
  {
    id: "stress-release",
    front: {
      imageSrc: "/games-icons/punching.png",
      imageAlt: "Stress Release Sanctuary Game",
      title: "Stress Release Sanctuary",
    },
    back: {
      title: "Stress Release Sanctuary",
      description:
        "Need a safe outlet? Hit the virtual punching bag with full permission to release what you're carrying. Mindful rage is still mindful.",
      features: [
        "Virtual punching bag",
        "Safe emotional outlet",
        "Mindful rage release",
        "Stress management tool",
      ],
      buttonText: "Visit Sanctuary",
    },
  },
];

export function GamesPage() {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const handleGameClick = (gameId: string) => {
    setActiveGame(gameId as GameType);
  };

  const renderGame = () => {
    switch (activeGame) {
      case "love-shower":
        return <LoveShower onBack={() => setActiveGame(null)} />;
      case "sanity-simulator":
        return <SanitySimulator onBack={() => setActiveGame(null)} />;
      case "breathing-garden":
        return <BreathingGarden onBack={() => setActiveGame(null)} />;
      case "stress-release":
        return <StressReleaseSanctuary onBack={() => setActiveGame(null)} />;
      default:
        return null;
    }
  };

  if (activeGame) {
    return renderGame();
  }

  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      <section className="relative py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Lagom Lab
              </h1>

              {/* Rolling Animation */}
              <div className="mb-6 flex justify-center">
                <RollingAnimation
                  words={[
                    "Humour",
                    "Friendship",
                    "Games",
                    "Breath",
                    "Rage",
                    "Love",
                    "Satire",
                    "Memes",
                  ]}
                  interval={2000}
                  className="justify-center"
                />
              </div>

              <p className="text-base text-muted-foreground mb-3 max-w-2xl mx-auto font-medium">
                Small moments of joy. Gentle resets for tired minds.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground mb-4 max-w-4xl mx-auto">
                Welcome to a softer space. These mini-games and guided
                experiences are designed to help healthcare professionals
                reconnect with themselves—through laughter, breath, and
                presence.
              </p>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Whether you're between shifts or spiraling into spreadsheet
                fatigue, take 5 minutes to pause, play, and feel human again.
              </p>
            </div>

            {/* Section Title */}
            <div className="text-center mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-primary">
                Interactive Healing Tools
              </h2>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8 justify-items-center">
              {gameCardsData.map((game) => (
                <GameCard
                  key={game.id}
                  data={game}
                  width={320}
                  height={320}
                  onClick={() => handleGameClick(game.id)}
                />
              ))}
            </div>

            {/* Gentle Reminder */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-base font-semibold text-primary mb-4">
                  🧭 Gentle Reminder:
                </h3>
                <blockquote className="text-sm lg:text-base text-muted-foreground leading-relaxed italic">
                  "Be kind to yourself. You deserve the same compassion you give
                  to others. Through play and presence, we find our way back to
                  ourselves."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ background: "#0BB8C6", color: "white" }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}
