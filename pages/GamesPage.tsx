import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
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
    title: '💖 Love Shower',
    description: 'Let yourself be reminded: you are more than enough. Tap to receive affirmations wrapped in sparkles and softness.',
    buttonText: '→ Start Love Shower',
    icon: Heart,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    dotColor: 'bg-pink-500'
  },
  {
    id: 'sanity-simulator' as GameType,
    title: '🧠 Sanity Simulator',
    description: 'Welcome to healthcare. Try to survive a day without losing your mind. A satirical, stress-relieving game that hits a little too close to home.',
    buttonText: '→ Enter Simulator',
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    dotColor: 'bg-purple-500'
  },
  {
    id: 'breathing-garden' as GameType,
    title: '🌿 Breathing Garden',
    description: 'Follow visual prompts to inhale, exhale, and return to center. Slow down with nature-inspired breathwork.',
    buttonText: '→ Open Garden',
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    dotColor: 'bg-green-500'
  },
  {
    id: 'stress-release' as GameType,
    title: '🥊 Stress Release Sanctuary',
    description: 'Need a safe outlet? Hit the virtual punching bag with full permission to release what you\'re carrying. Mindful rage is still mindful.',
    buttonText: '→ Visit Sanctuary',
    icon: Target,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    dotColor: 'bg-red-500'
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
      <section className="relative py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Lagom Lab
            </h1>
            <p className="text-base text-muted-foreground mb-3 max-w-2xl mx-auto font-medium">
              Small moments of joy. Gentle resets for tired minds.
            </p>
            <p className="text-sm lg:text-base text-muted-foreground mb-4 max-w-4xl mx-auto">
              Welcome to a softer space. These mini-games and guided experiences are designed to help healthcare professionals reconnect with themselves—through laughter, breath, and presence.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Whether you're between shifts or spiraling into spreadsheet fatigue, take 5 minutes to pause, play, and feel human again.
            </p>
          </div>

          {/* Section Title */}
          <div className="text-center mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-primary">
              Interactive Healing Tools
            </h2>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {games.map((game) => {
              return (
                <Card 
                  key={game.id} 
                  className={`min-h-[240px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${game.bgColor} ${game.borderColor} border-2 flex flex-col`}
                  onClick={() => setActiveGame(game.id)}
                >
                  <CardHeader className="text-center pb-4 flex-shrink-0">
                    <div className="flex justify-center mb-4 h-4">
                      <div className={`w-4 h-4 ${game.dotColor} rounded-full`}></div>
                    </div>
                    <CardTitle className={`text-lg ${game.color} mb-2 min-h-[2.5rem] flex items-center justify-center`}>
                      {game.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow text-center">
                    <p className={`text-sm ${game.color.replace('500', '700')} mb-6 flex-grow min-h-[3.5rem] flex items-start justify-center leading-relaxed`}>
                      {game.description}
                    </p>
                    <Button
                      className={`w-full ${game.bgColor} ${game.color} hover:opacity-80 border ${game.borderColor} mt-auto`}
                      variant="outline"
                    >
                      {game.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Gentle Reminder */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-base font-semibold text-primary mb-4">🧭 Gentle Reminder:</h3>
              <blockquote className="text-sm lg:text-base text-muted-foreground leading-relaxed italic">
                "Be kind to yourself. You deserve the same compassion you give to others. Through play and presence, we find our way back to ourselves."
              </blockquote>
            </div>
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