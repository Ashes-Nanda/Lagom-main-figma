import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Heart, Brain, Leaf, Target } from "lucide-react";
import { LoveShower } from "../components/games/LoveShower";
import { SanitySimulator } from "../components/games/SanitySimulator";
import { BreathingGarden } from "../components/games/BreathingGarden";
import { StressReleaseSanctuary } from "../components/games/StressReleaseSanctuary";
import { BeingLagomFooter } from "../components/ui/footer";

type GameType = 'love-shower' | 'sanity-simulator' | 'breathing-garden' | 'stress-release' | null;

const games = [
  {
    id: 'love-shower' as GameType,
    title: 'Love Shower',
    description: 'Receive positive affirmations and gentle support through animated hearts and sparkles',
    icon: Heart,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  },
  {
    id: 'sanity-simulator' as GameType,
    title: 'Sanity Simulator',
    description: 'Navigate humorous healthcare scenarios and maintain your sanity points',
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'breathing-garden' as GameType,
    title: 'Breathing Garden',
    description: 'Guided breathing exercises with visual cues to promote calm and focus',
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'stress-release' as GameType,
    title: 'Stress Release Sanctuary',
    description: 'Virtual punching bag for mindful stress release with 3D interactions',
    icon: Target,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];

export function GamesPage() {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const renderGame = () => {
    switch (activeGame) {
      case 'love-shower':
        return <LoveShower onBack={() => setActiveGame(null)} />;
      case 'sanity-simulator':
        return <SanitySimulator onBack={() => setActiveGame(null)} />;
      case 'breathing-garden':
        return <BreathingGarden onBack={() => setActiveGame(null)} />;
      case 'stress-release':
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
      <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Games for Healing & Play
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Take a moment to play, breathe, and heal. These interactive experiences are designed 
              to support your mental well-being through gentle engagement and mindful activities.
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {games.map((game) => {
              const Icon = game.icon;
              return (
                <Card 
                  key={game.id} 
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 bg-white"
                >
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${game.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-primary">{game.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {game.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button
                      onClick={() => setActiveGame(game.id)}
                      className="w-full"
                      size="lg"
                    >
                      Start Playing
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer Message */}
          <div className="text-center max-w-3xl mx-auto">
            <blockquote className="text-xl lg:text-2xl italic text-accent font-medium">
              "Be kind to yourself. You deserve the same compassion you give to others. 
              Through play and mindfulness, we find our way back to joy and healing."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    <div style={{ background: '#0BB8C6', color: 'white' }}>
      <BeingLagomFooter />
    </div>
    </div>
  );
}