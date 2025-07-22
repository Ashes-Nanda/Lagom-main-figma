import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Play, Pause, RotateCcw, Leaf, Wind, Zap, Heart } from "lucide-react";

interface BreathingGardenProps {
  onBack: () => void;
}

interface BreathingTechnique {
  id: string;
  name: string;
  description: string;
  pattern: {
    inhale: number;
    hold1: number;
    exhale: number;
    hold2: number;
  };
  cycles: number;
  benefits: string[];
  icon: any;
  color: string;
  bgColor: string;
}

const techniques: BreathingTechnique[] = [
  {
    id: '4-7-8',
    name: '4-7-8 Technique',
    description: 'A calming breath pattern that promotes relaxation and sleep',
    pattern: { inhale: 4, hold1: 7, exhale: 8, hold2: 0 },
    cycles: 4,
    benefits: ['Reduces anxiety', 'Promotes sleep', 'Calms nervous system'],
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'Equal timing for all phases creates balance and focus',
    pattern: { inhale: 4, hold1: 4, exhale: 4, hold2: 4 },
    cycles: 6,
    benefits: ['Improves focus', 'Reduces stress', 'Enhances performance'],
    icon: Wind,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'quick-calm',
    name: 'Quick Calm',
    description: 'Fast relief for immediate stress and tension',
    pattern: { inhale: 3, hold1: 3, exhale: 6, hold2: 0 },
    cycles: 5,
    benefits: ['Quick stress relief', 'Instant calm', 'Easy to remember'],
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'energy-boost',
    name: 'Energy Boost',
    description: 'Energizing breath work to increase alertness',
    pattern: { inhale: 2, hold1: 1, exhale: 2, hold2: 1 },
    cycles: 8,
    benefits: ['Increases energy', 'Improves alertness', 'Boosts mood'],
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }
];

type Phase = 'inhale' | 'hold1' | 'exhale' | 'hold2';

export function BreathingGarden({ onBack }: BreathingGardenProps) {
  const [selectedTechnique, setSelectedTechnique] = useState<BreathingTechnique | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase>('inhale');
  const [phaseTimeLeft, setPhaseTimeLeft] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [circleScale, setCircleScale] = useState(1);
  
  const intervalRef = useRef<number>();

  const phaseNames = {
    inhale: 'Breathe In',
    hold1: 'Hold',
    exhale: 'Breathe Out',
    hold2: 'Hold'
  };

  const getNextPhase = (current: Phase): Phase => {
    const phases: Phase[] = ['inhale', 'hold1', 'exhale', 'hold2'];
    const currentIndex = phases.indexOf(current);
    return phases[(currentIndex + 1) % phases.length];
  };

  const startExercise = (technique: BreathingTechnique) => {
    setSelectedTechnique(technique);
    setIsActive(true);
    setIsPaused(false);
    setCurrentPhase('inhale');
    setPhaseTimeLeft(technique.pattern.inhale);
    setCurrentCycle(1);
    setIsComplete(false);
    setCircleScale(1);
  };

  const pauseResume = () => {
    setIsPaused(!isPaused);
  };

  const resetExercise = () => {
    setIsActive(false);
    setIsPaused(false);
    setCurrentPhase('inhale');
    setPhaseTimeLeft(0);
    setCurrentCycle(1);
    setIsComplete(false);
    setCircleScale(1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const backToTechniques = () => {
    resetExercise();
    setSelectedTechnique(null);
  };

  // Main breathing timer
  useEffect(() => {
    if (isActive && !isPaused && selectedTechnique && phaseTimeLeft > 0) {
      intervalRef.current = setTimeout(() => {
        setPhaseTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isActive && !isPaused && selectedTechnique && phaseTimeLeft === 0) {
      // Move to next phase
      const nextPhase = getNextPhase(currentPhase);
      
      if (nextPhase === 'inhale' && currentCycle >= selectedTechnique.cycles) {
        // Exercise complete
        setIsComplete(true);
        setIsActive(false);
      } else {
        if (nextPhase === 'inhale') {
          setCurrentCycle(prev => prev + 1);
        }
        
        setCurrentPhase(nextPhase);
        const nextDuration = selectedTechnique.pattern[nextPhase];
        
        if (nextDuration > 0) {
          setPhaseTimeLeft(nextDuration);
        } else {
          // Skip phases with 0 duration
          const afterNext = getNextPhase(nextPhase);
          setCurrentPhase(afterNext);
          setPhaseTimeLeft(selectedTechnique.pattern[afterNext]);
        }
      }
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [isActive, isPaused, phaseTimeLeft, currentPhase, currentCycle, selectedTechnique]);

  // Circle animation
  useEffect(() => {
    if (isActive && !isPaused) {
      if (currentPhase === 'inhale') {
        setCircleScale(1.5);
      } else if (currentPhase === 'exhale') {
        setCircleScale(0.8);
      } else {
        // Hold phases
        setCircleScale(currentPhase === 'hold1' ? 1.5 : 0.8);
      }
    }
  }, [currentPhase, isActive, isPaused]);

  if (!selectedTechnique) {
    return (
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Button onClick={onBack} variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>

            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Breathing Garden
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Choose a breathing technique to guide you through a mindful breathing session
              </p>
            </div>

            {/* Techniques Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {techniques.map((technique) => {
                const Icon = technique.icon;
                return (
                  <Card
                    key={technique.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border-2 hover:border-accent/50"
                    onClick={() => startExercise(technique)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Icon className={`w-8 h-8 ${technique.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-primary">{technique.name}</CardTitle>
                          <div className="text-sm text-muted-foreground">
                            {technique.cycles} cycles
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base text-muted-foreground">{technique.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-sm font-medium text-primary">Benefits:</div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {technique.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-6" size="lg">
                          Start {technique.name}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Instructions */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Leaf className="w-6 h-6 mr-3 text-accent" />
                  Breathing Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Before you begin:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Find a comfortable seated or lying position
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Close your eyes or soften your gaze
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Place one hand on your chest, one on your belly
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">During practice:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Breathe through your nose when possible
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Let your belly rise and fall naturally
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Don't worry if your mind wanders - gently return focus to your breath
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (isComplete) {
    const Icon = selectedTechnique.icon;
    return (
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex items-center justify-center min-h-[60vh]">
            <Card className="text-center bg-white">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className={`w-10 h-10 ${selectedTechnique.color}`} />
                </div>
                <CardTitle className="text-4xl sm:text-5xl font-bold text-primary mb-4">Session Complete!</CardTitle>
                <CardDescription className="text-xl text-muted-foreground">
                  You've completed {selectedTechnique.cycles} cycles of {selectedTechnique.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pb-8">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Take a moment to notice how you feel. Your body and mind have just experienced 
                  the benefits of mindful breathing.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => startExercise(selectedTechnique)} size="lg">
                    Practice Again
                  </Button>
                  <Button onClick={backToTechniques} variant="outline" size="lg">
                    Choose Technique
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <Button onClick={backToTechniques} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Techniques
            </Button>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-2">
                Cycle {currentCycle} of {selectedTechnique.cycles}
              </div>
              <div className="w-40 bg-muted rounded-full h-3">
                <div
                  className="bg-accent h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(currentCycle / selectedTechnique.cycles) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Main breathing interface */}
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                {selectedTechnique.name}
              </h2>
              <div className="text-2xl lg:text-3xl text-muted-foreground">
                {phaseNames[currentPhase]}
              </div>
            </div>

            {/* Breathing circle */}
            <div className="relative flex items-center justify-center h-96">
              <div
                className={`w-64 h-64 rounded-full border-8 transition-all duration-1000 ease-in-out ${
                  currentPhase === 'inhale' ? 'border-accent bg-accent/10' :
                  currentPhase === 'exhale' ? 'border-secondary bg-secondary/10' :
                  'border-primary bg-primary/10'
                }`}
                style={{
                  transform: `scale(${circleScale})`,
                  boxShadow: `0 0 40px ${
                    currentPhase === 'inhale' ? 'rgba(122, 160, 173, 0.4)' :
                    currentPhase === 'exhale' ? 'rgba(163, 213, 230, 0.4)' :
                    'rgba(72, 90, 118, 0.4)'
                  }`
                }}
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-4">
                      {phaseTimeLeft}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {phaseNames[currentPhase]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-6">
              <Button
                onClick={pauseResume}
                variant="outline"
                size="lg"
                className="flex items-center space-x-3 px-6 py-4"
              >
                {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
                <span className="text-lg">{isPaused ? 'Resume' : 'Pause'}</span>
              </Button>
              <Button
                onClick={resetExercise}
                variant="outline"
                size="lg"
                className="flex items-center space-x-3 px-6 py-4"
              >
                <RotateCcw className="w-6 h-6" />
                <span className="text-lg">Reset</span>
              </Button>
            </div>

            {/* Pattern info */}
            <Card className="bg-white max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="text-base text-muted-foreground text-center">
                  <span className="font-medium text-primary">Pattern:</span> Inhale {selectedTechnique.pattern.inhale}s
                  {selectedTechnique.pattern.hold1 > 0 && ` → Hold ${selectedTechnique.pattern.hold1}s`}
                  → Exhale {selectedTechnique.pattern.exhale}s
                  {selectedTechnique.pattern.hold2 > 0 && ` → Hold ${selectedTechnique.pattern.hold2}s`}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}