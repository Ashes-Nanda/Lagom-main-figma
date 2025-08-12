import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { useState, useEffect } from "react";
import { Heart, Zap, Waves, Sun, Moon, Play, Pause, RotateCcw } from "lucide-react";
import { BeingLagomFooter } from "../components/ui/footer";

export function MindfulnessPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    {
      id: "breathing",
      title: "Breathing Exercise",
      description: "Guided breathing to reduce stress and anxiety",
      icon: <Waves className="w-8 h-8 text-accent" />,
      difficulty: "Easy",
      duration: "5 minutes"
    },
    {
      id: "love-shower",
      title: "Love Shower",
      description: "Send positive thoughts to yourself and others",
      icon: <Heart className="w-8 h-8 text-accent" />,
      difficulty: "Easy",
      duration: "3 minutes"
    },
    {
      id: "energy-boost",
      title: "Energy Boost",
      description: "Quick exercises to revitalize your energy",
      icon: <Zap className="w-8 h-8 text-accent" />,
      difficulty: "Medium",
      duration: "7 minutes"
    },
    {
      id: "gratitude",
      title: "Gratitude Practice",
      description: "Focus on positive aspects of your life",
      icon: <Sun className="w-8 h-8 text-accent" />,
      difficulty: "Easy",
      duration: "4 minutes"
    },
    {
      id: "progressive-relaxation",
      title: "Progressive Relaxation",
      description: "Systematic muscle relaxation technique",
      icon: <Moon className="w-8 h-8 text-accent" />,
      difficulty: "Medium",
      duration: "10 minutes"
    }
  ];

  const GameCard = ({ game }: { game: typeof games[0] }) => (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveGame(game.id)}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          {game.icon}
        </div>
        <CardTitle className="text-lg">{game.title}</CardTitle>
        <CardDescription>{game.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>Difficulty: {game.difficulty}</span>
          <span>Duration: {game.duration}</span>
        </div>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Play className="w-4 h-4 mr-2" />
          Start Game
        </Button>
      </CardContent>
    </Card>
  );

  const BreathingExercise = () => {
    const [isActive, setIsActive] = useState(false);
    const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
    const [countdown, setCountdown] = useState(4);
    const [cycle, setCycle] = useState(0);
    const totalCycles = 5;

    useEffect(() => {
      if (!isActive) return;

      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev > 1) return prev - 1;
          
          if (phase === 'inhale') {
            setPhase('hold');
            return 4;
          } else if (phase === 'hold') {
            setPhase('exhale');
            return 6;
          } else {
            setPhase('inhale');
            setCycle(prev => prev + 1);
            return 4;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isActive, phase]);

    useEffect(() => {
      if (cycle >= totalCycles) {
        setIsActive(false);
        setCycle(0);
        setPhase('inhale');
        setCountdown(4);
      }
    }, [cycle]);

    const getPhaseText = () => {
      switch (phase) {
        case 'inhale': return 'Breathe In';
        case 'hold': return 'Hold';
        case 'exhale': return 'Breathe Out';
      }
    };

    const getCircleSize = () => {
      switch (phase) {
        case 'inhale': return 'w-32 h-32';
        case 'hold': return 'w-32 h-32';
        case 'exhale': return 'w-24 h-24';
      }
    };

    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className={`${getCircleSize()} bg-accent/20 rounded-full flex items-center justify-center transition-all duration-1000`}>
            <div className="text-2xl font-bold text-accent">
              {countdown}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-primary mb-2">
            {getPhaseText()}
          </h3>
          <p className="text-muted-foreground">
            Cycle {cycle} of {totalCycles}
          </p>
        </div>

        <Progress value={(cycle / totalCycles) * 100} className="w-full max-w-md mx-auto" />

        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setIsActive(!isActive)}
            variant={isActive ? "outline" : "default"}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {isActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button
            onClick={() => {
              setIsActive(false);
              setCycle(0);
              setPhase('inhale');
              setCountdown(4);
            }}
            variant="outline"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    );
  };

  const LoveShower = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const steps = [
      {
        title: "Center Yourself",
        instruction: "Take a deep breath and close your eyes. Feel your feet on the ground.",
        duration: 30
      },
      {
        title: "Send Love to Yourself",
        instruction: "Place your hand on your heart. Send yourself loving thoughts: 'May I be happy, may I be healthy, may I be at peace.'",
        duration: 45
      },
      {
        title: "Send Love to a Loved One",
        instruction: "Think of someone you care about. Send them loving thoughts: 'May you be happy, may you be healthy, may you be at peace.'",
        duration: 45
      },
      {
        title: "Send Love to a Colleague",
        instruction: "Think of a colleague or patient. Send them loving thoughts: 'May you be happy, may you be healthy, may you be at peace.'",
        duration: 45
      },
      {
        title: "Send Love to All",
        instruction: "Expand your loving thoughts to everyone: 'May all beings be happy, may all beings be healthy, may all beings be at peace.'",
        duration: 45
      }
    ];

    const [timeLeft, setTimeLeft] = useState(steps[0].duration);

    useEffect(() => {
      if (!isActive) return;

      const interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev > 1) return prev - 1;
          
          if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
            return steps[currentStep + 1].duration;
          } else {
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isActive, currentStep]);

    const currentStepData = steps[currentStep];

    return (
      <div className="text-center space-y-6">
        <div className="mb-8">
          <h3 className="text-xl font-medium text-primary mb-2">
            {currentStepData.title}
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {currentStepData.instruction}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center">
            <Heart className="w-16 h-16 text-pink-500" />
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold text-accent mb-2">
            {timeLeft}s
          </div>
          <Progress value={((currentStepData.duration - timeLeft) / currentStepData.duration) * 100} className="w-full max-w-md mx-auto" />
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setIsActive(!isActive)}
            variant={isActive ? "outline" : "default"}
            className="bg-pink-500 text-white hover:bg-pink-600"
          >
            {isActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button
            onClick={() => {
              setIsActive(false);
              setCurrentStep(0);
              setTimeLeft(steps[0].duration);
            }}
            variant="outline"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    );
  };

  const renderActiveGame = () => {
    switch (activeGame) {
      case 'breathing':
        return <BreathingExercise />;
      case 'love-shower':
        return <LoveShower />;
      default:
        return <div className="text-center text-muted-foreground">Game coming soon...</div>;
    }
  };

  if (activeGame) {
    return (
      <div className="bg-[#fffbf5] min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setActiveGame(null)}
                className="mb-4"
              >
                ← Back to Games
              </Button>
              <h1 className="text-3xl font-bold text-primary">
                {games.find(g => g.id === activeGame)?.title}
              </h1>
            </div>

            <Card className="p-8">
              <CardContent>
                {renderActiveGame()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fffbf5] min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Mindfulness Games
            </h1>
            <p className="text-xl text-muted-foreground">
              Interactive wellness activities to help you relax and recharge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-secondary/20 to-accent/20 border-none">
              <CardHeader>
                <CardTitle>Daily Wellness Tip</CardTitle>
                <CardDescription>
                  Take just 5 minutes each day for mindfulness practice. Small, consistent actions 
                  can lead to significant improvements in your mental well-being.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <div style={{ background: '#0BB8C6', color: 'white' }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}