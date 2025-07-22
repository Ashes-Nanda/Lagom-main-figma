import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowLeft, Brain, Heart, Coffee, Clock } from "lucide-react";

interface SanitySimulatorProps {
  onBack: () => void;
}

interface Scenario {
  id: number;
  situation: string;
  options: {
    text: string;
    feedback: string;
    sanityChange: number;
    responseType: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    situation:
      "It's 3 AM and you're called for the 5th emergency this shift. Your coffee is cold and you haven't eaten in 8 hours. What do you do?",
    options: [
      {
        text: "Chug the cold coffee and power through like a medical superhero",
        feedback:
          "Classic healthcare worker move! Your dedication is admirable, but your stomach might disagree.",
        sanityChange: -5,
        responseType: "Heroic Burnout",
      },
      {
        text: "Take 2 minutes to grab a snack and fresh coffee",
        feedback:
          "Smart! Taking care of yourself means you can better care for others.",
        sanityChange: +10,
        responseType: "Self-Care Champion",
      },
      {
        text: "Question all your life choices while walking to the emergency",
        feedback:
          "We've all been there! At least you're still walking in the right direction.",
        sanityChange: -2,
        responseType: "Existential Crisis Mode",
      },
      {
        text: "Do a quick breathing exercise before responding",
        feedback:
          "Excellent! Centering yourself first is a sign of wisdom and experience.",
        sanityChange: +8,
        responseType: "Mindful Professional",
      },
    ],
  },
  {
    id: 2,
    situation:
      "A patient asks you to explain their diagnosis for the 10th time in 5 minutes. You can see they're anxious but you're running behind schedule.",
    options: [
      {
        text: "Patiently explain again with a smile (while internally screaming)",
        feedback:
          "Your compassion shines through! Though internal screaming is not sustainable long-term.",
        sanityChange: +5,
        responseType: "Patient Saint",
      },
      {
        text: "Take a deep breath and sit down to really listen",
        feedback:
          "Perfect! Sometimes slowing down actually saves time and reduces everyone's stress.",
        sanityChange: +12,
        responseType: "Empathy Expert",
      },
      {
        text: "Speak faster and louder, hoping it will stick this time",
        feedback:
          "Ah, the classic 'volume equals understanding' approach. Spoiler alert: it doesn't work.",
        sanityChange: -8,
        responseType: "Frustrated Educator",
      },
      {
        text: "Ask what specific part they're worried about",
        feedback:
          "Great strategy! Getting to the root of their anxiety is much more effective.",
        sanityChange: +10,
        responseType: "Strategic Communicator",
      },
    ],
  },
  {
    id: 3,
    situation:
      "Your colleague calls in sick for the third time this month, leaving you short-staffed again. You're already covering an extra shift.",
    options: [
      {
        text: "Silently judge them while taking on their workload",
        feedback:
          "The passive-aggressive approach! Your resentment levels are rising faster than your workload.",
        sanityChange: -10,
        responseType: "Martyr Complex",
      },
      {
        text: "Check in with them to see if they need support",
        feedback:
          "Compassionate leadership! Maybe they're struggling and need help, not judgment.",
        sanityChange: +8,
        responseType: "Supportive Colleague",
      },
      {
        text: "Immediately start planning your own 'sick' day",
        feedback:
          "The revenge fantasy! While tempting, this might not be the most constructive approach.",
        sanityChange: -3,
        responseType: "Petty Planner",
      },
      {
        text: "Talk to your supervisor about staffing concerns",
        feedback:
          "Professional and proactive! Addressing systemic issues is how real change happens.",
        sanityChange: +15,
        responseType: "Change Agent",
      },
    ],
  },
  {
    id: 4,
    situation:
      "You realize you've been wearing your scrubs inside-out for the entire morning shift. A patient just complimented your 'unique style.'",
    options: [
      {
        text: "Own it and start a new fashion trend",
        feedback:
          "Confidence is key! Who says medical fashion can't be revolutionary?",
        sanityChange: +5,
        responseType: "Fashion Pioneer",
      },
      {
        text: "Laugh it off and fix it during your next break",
        feedback:
          "Perfect balance of professionalism and humor! Life's too short to stress over inside-out scrubs.",
        sanityChange: +10,
        responseType: "Balanced Human",
      },
      {
        text: "Panic and hide in the supply closet",
        feedback:
          "The supply closet: every healthcare worker's sanctuary! But maybe just for a minute?",
        sanityChange: -5,
        responseType: "Closet Dweller",
      },
      {
        text: "Thank the patient and continue your shift with pride",
        feedback:
          "Turning embarrassment into confidence! Your patients appreciate authenticity.",
        sanityChange: +12,
        responseType: "Authentic Professional",
      },
    ],
  },
  {
    id: 5,
    situation:
      "The hospital coffee machine breaks down on a Monday morning. There's a line of 20 healthcare workers staring at it in despair.",
    options: [
      {
        text: "Lead a group meditation session instead",
        feedback:
          "From coffee crisis to mindfulness moment! You're turning chaos into zen.",
        sanityChange: +15,
        responseType: "Zen Master",
      },
      {
        text: "Start a coffee fund and organize a coffee run",
        feedback:
          "Leadership in action! You've just become everyone's favorite person.",
        sanityChange: +12,
        responseType: "Coffee Hero",
      },
      {
        text: "Dramatically collapse to the floor in despair",
        feedback:
          "The theatrical approach! At least you're expressing your feelings honestly.",
        sanityChange: -3,
        responseType: "Drama Queen/King",
      },
      {
        text: "Switch to tea and pretend it's fine",
        feedback:
          "The denial approach! Your colleagues can see through your fake tea smile.",
        sanityChange: +2,
        responseType: "Tea Pretender",
      },
    ],
  },
];

export function SanitySimulator({ onBack }: SanitySimulatorProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [sanityPoints, setSanityPoints] = useState(50);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const getSanityStatus = (points: number) => {
    if (points >= 80)
      return { status: "Peak Sanity", color: "text-green-600", icon: Heart };
    if (points >= 60)
      return { status: "Stable Sanity", color: "text-blue-600", icon: Brain };
    if (points >= 40)
      return {
        status: "Moderate Sanity",
        color: "text-yellow-600",
        icon: Coffee,
      };
    if (points >= 20)
      return { status: "Low Sanity", color: "text-orange-600", icon: Clock };
    return { status: "Critical Sanity", color: "text-red-600", icon: Brain };
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const option = scenarios[currentScenario].options[optionIndex];
    setSanityPoints((prev) =>
      Math.max(0, Math.min(100, prev + option.sanityChange))
    );
    setShowFeedback(true);
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentScenario(0);
    setSanityPoints(50);
    setSelectedOption(null);
    setShowFeedback(false);
    setGameComplete(false);
  };

  const sanityStatus = getSanityStatus(sanityPoints);
  const StatusIcon = sanityStatus.icon;

  if (gameComplete) {
    return (
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Button onClick={onBack} variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>

            <Card className="text-center bg-white">
              <CardHeader className="pb-8">
                <CardTitle className="text-4xl sm:text-5xl font-bold text-primary mb-4">Game Complete!</CardTitle>
                <CardDescription className="text-xl text-muted-foreground">
                  You've navigated all the healthcare scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pb-8">
                <div className="text-center">
                  <StatusIcon className={`w-20 h-20 mx-auto mb-6 ${sanityStatus.color}`} />
                  <div className={`text-6xl font-bold mb-4 ${sanityStatus.color}`}>{sanityPoints}</div>
                  <div className={`text-2xl font-semibold ${sanityStatus.color}`}>
                    {sanityStatus.status}
                  </div>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {sanityPoints >= 70 
                    ? "Excellent! You've maintained great balance and self-care throughout these challenges."
                    : sanityPoints >= 40
                    ? "Good job! You're managing the challenges well. Remember to prioritize self-care."
                    : "You've been through a lot! Remember, seeking support and taking breaks is essential for healthcare workers."
                  }
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetGame} size="lg">Play Again</Button>
                  <Button onClick={onBack} variant="outline" size="lg">Back to Games</Button>
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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-2">
                Scenario {currentScenario + 1} of {scenarios.length}
              </div>
              <div className="w-48 bg-muted rounded-full h-3">
                <div
                  className="bg-accent h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Sanity Status */}
          <Card className="mb-8 bg-white">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <StatusIcon className={`w-10 h-10 ${sanityStatus.color}`} />
                <div>
                  <div className="text-lg font-semibold text-primary">Sanity Points: {sanityPoints}/100</div>
                  <div className={`text-sm ${sanityStatus.color}`}>{sanityStatus.status}</div>
                </div>
              </div>
              <div className="w-40 bg-muted rounded-full h-4">
                <div
                  className={`h-4 rounded-full transition-all duration-300 ${
                    sanityPoints >= 60 ? 'bg-green-500' : 
                    sanityPoints >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${sanityPoints}%` }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Scenario */}
          <Card className="mb-8 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Healthcare Scenario</CardTitle>
              <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                {scenarios[currentScenario].situation}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {scenarios[currentScenario].options.map((option, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg bg-white ${
                  selectedOption === index
                    ? 'ring-2 ring-accent bg-secondary/10'
                    : 'hover:bg-secondary/5'
                }`}
                onClick={() => !showFeedback && handleOptionSelect(index)}
              >
                <CardContent className="p-6">
                  <p className="text-base text-foreground">{option.text}</p>
                  {showFeedback && selectedOption === index && (
                    <div className="mt-6 pt-4 border-t">
                      <div className="text-sm font-semibold text-accent mb-2">
                        {option.responseType}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {option.feedback}
                      </div>
                      <div className={`text-sm font-semibold ${
                        option.sanityChange > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        Sanity {option.sanityChange > 0 ? '+' : ''}{option.sanityChange}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          {showFeedback && (
            <div className="text-center">
              <Button onClick={nextScenario} size="lg" className="px-8 py-4 text-lg">
                {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'Complete Game'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
