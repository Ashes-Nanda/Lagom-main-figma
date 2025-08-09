import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Alert, AlertDescription } from "../components/ui/alert";
import { useState } from "react";
import { Heart, FileText, BarChart3, AlertTriangle, Users, Brain } from "lucide-react";

export function AssessmentPage() {
  const [currentSection, setCurrentSection] = useState<'intro' | 'who5' | 'optional' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [who5Answers, setWho5Answers] = useState<Record<number, number>>({});
  const [optionalAnswers, setOptionalAnswers] = useState<Record<number, number>>({});
  const [, setSkipOptional] = useState(false);

  // WHO-5 Well-Being Index Questions
  const who5Questions = [
    {
      id: 1,
      question: "Cheerful and in good spirits",
      options: [
        { value: 5, label: "All of the time" },
        { value: 4, label: "Most of the time" },
        { value: 3, label: "More than half of the time" },
        { value: 2, label: "Less than half of the time" },
        { value: 1, label: "Some of the time" },
        { value: 0, label: "At no time" }
      ]
    },
    {
      id: 2,
      question: "Calm and relaxed",
      options: [
        { value: 5, label: "All of the time" },
        { value: 4, label: "Most of the time" },
        { value: 3, label: "More than half of the time" },
        { value: 2, label: "Less than half of the time" },
        { value: 1, label: "Some of the time" },
        { value: 0, label: "At no time" }
      ]
    },
    {
      id: 3,
      question: "Active and vigorous",
      options: [
        { value: 5, label: "All of the time" },
        { value: 4, label: "Most of the time" },
        { value: 3, label: "More than half of the time" },
        { value: 2, label: "Less than half of the time" },
        { value: 1, label: "Some of the time" },
        { value: 0, label: "At no time" }
      ]
    },
    {
      id: 4,
      question: "Fresh and rested when waking",
      options: [
        { value: 5, label: "All of the time" },
        { value: 4, label: "Most of the time" },
        { value: 3, label: "More than half of the time" },
        { value: 2, label: "Less than half of the time" },
        { value: 1, label: "Some of the time" },
        { value: 0, label: "At no time" }
      ]
    },
    {
      id: 5,
      question: "That your daily life has been filled with things that interest you",
      options: [
        { value: 5, label: "All of the time" },
        { value: 4, label: "Most of the time" },
        { value: 3, label: "More than half of the time" },
        { value: 2, label: "Less than half of the time" },
        { value: 1, label: "Some of the time" },
        { value: 0, label: "At no time" }
      ]
    }
  ];

  // Optional Burnout & Moral Injury Questions
  const optionalQuestions = [
    {
      id: 1,
      question: "How often do you feel emotionally drained from your work?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year or less" },
        { value: 2, label: "Once a month or less" },
        { value: 3, label: "A few times a month" },
        { value: 4, label: "Once a week" },
        { value: 5, label: "A few times a week" },
        { value: 6, label: "Every day" }
      ]
    },
    {
      id: 2,
      question: "How often have you felt you had to act in ways that go against your values at work?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year or less" },
        { value: 2, label: "Once a month or less" },
        { value: 3, label: "A few times a month" },
        { value: 4, label: "Once a week" },
        { value: 5, label: "A few times a week" },
        { value: 6, label: "Every day" }
      ]
    }
  ];

  const handleWho5Answer = (value: number) => {
    setWho5Answers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const handleOptionalAnswer = (value: number) => {
    setOptionalAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const handleNext = () => {
    if (currentSection === 'who5') {
      if (currentQuestion < who5Questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setCurrentSection('optional');
        setCurrentQuestion(0);
      }
    } else if (currentSection === 'optional') {
      if (currentQuestion < optionalQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setCurrentSection('results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSection === 'optional') {
      setCurrentSection('who5');
      setCurrentQuestion(who5Questions.length - 1);
    }
  };

  const calculateWho5Score = () => {
    const rawScore = Object.values(who5Answers).reduce((sum, value) => sum + value, 0);
    return rawScore * 4; // Convert to percentage
  };

  const getBurnoutFlag = () => {
    return optionalAnswers[0] >= 4; // Once a week or more
  };

  const getMoralInjuryFlag = () => {
    return optionalAnswers[1] >= 3; // A few times a month or more
  };

  const getResultInterpretation = (who5Score: number, _burnoutFlag: boolean, _moralInjuryFlag: boolean) => {
    if (who5Score >= 50) {
      return {
        level: "Good Well-being",
        color: "text-green-600",
        description: "You're showing signs of good well-being right now. Keep protecting your energy — we've got resources to help you stay steady.",
        recommendations: [
          "Continue your current self-care practices",
          "Explore preventive wellness resources",
          "Stay connected with supportive colleagues",
          "Consider joining peer support groups"
        ],
        pathway: "maintain"
      };
    } else if (who5Score <= 28) {
      return {
        level: "Depression Risk",
        color: "text-red-600",
        description: "This score suggests you may be experiencing depression. We strongly encourage professional assessment and guided support.",
        recommendations: [
          "Seek professional mental health support immediately",
          "Book a confidential session with a trained clinician",
          "Consider crisis support if needed",
          "Connect with trauma-informed therapy"
        ],
        pathway: "urgent"
      };
    } else {
      return {
        level: "Reduced Well-being",
        color: "text-yellow-600",
        description: "This score suggests your well-being could use some care. You're not alone — here are tailored options based on what you shared:",
        recommendations: [
          "Connect with peer support groups",
          "Book a confidential therapy session",
          "Explore self-care tools and strategies",
          "Consider mindfulness and stress relief resources"
        ],
        pathway: "support"
      };
    }
  };

  const who5Score = calculateWho5Score();
  const burnoutFlag = getBurnoutFlag();
  const moralInjuryFlag = getMoralInjuryFlag();
  const result = getResultInterpretation(who5Score, burnoutFlag, moralInjuryFlag);

  // Intro Section
  if (currentSection === 'intro') {
    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Being.Lagom Wellbeing Triage
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A gentle check-in to help you find the right kind of support.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Not a diagnosis. Not a judgment. Just a starting point.</strong>
              </p>
            </div>

            {/* Crisis Support Alert */}
            <Alert className="mb-8 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
              <AlertDescription className="text-red-800 flex items-center flex-wrap gap-1">
                <span><strong>If you're in crisis right now</strong>, please</span>
                <Button variant="link" className="p-0 h-auto text-red-600 underline ml-1">
                  click here for help
                </Button>
                <span>or call your local helpline.</span>
              </AlertDescription>
            </Alert>

            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Ready to check in with yourself?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This gentle assessment takes about 3-5 minutes. We'll start with some questions about your general well-being, 
                  then offer optional questions about work-related stress if you'd like more personalized guidance.
                </p>
                <Button 
                  onClick={() => setCurrentSection('who5')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Begin Check-in
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Results Section
  if (currentSection === 'results') {
    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Your Wellbeing Check-in Results
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your responses, here are your personalized next steps
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    WHO-5 Well-being Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {who5Score}%
                    </div>
                    <div className={`text-lg font-medium ${result.color}`}>
                      {result.level}
                    </div>
                  </div>
                  <Progress value={who5Score} className="mb-4" />
                  <p className="text-muted-foreground">
                    {result.description}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Recommended Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Flags */}
            {(burnoutFlag || moralInjuryFlag) && (
              <Card className="mb-8 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-800">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Additional Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {burnoutFlag && (
                    <p className="text-yellow-800 mb-2">
                      <strong>Burnout indicators:</strong> You might be experiencing work-related emotional exhaustion. 
                      Consider rest, peer support, and stress management resources.
                    </p>
                  )}
                  {moralInjuryFlag && (
                    <p className="text-yellow-800">
                      <strong>Moral injury indicators:</strong> You may be experiencing deeper work-related strain. 
                      Consider booking a session with a trauma-informed therapist or joining a support circle for healthcare workers.
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            <div className="text-center space-x-4">
              <Button 
                onClick={() => {
                  setCurrentSection('intro');
                  setCurrentQuestion(0);
                  setWho5Answers({});
                  setOptionalAnswers({});
                  setSkipOptional(false);
                }}
                variant="outline"
              >
                Take Check-in Again
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Users className="w-4 h-4 mr-2" />
                Find Support Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // WHO-5 Section
  if (currentSection === 'who5') {
    const progress = ((currentQuestion + 1) / who5Questions.length) * 100;
    const currentAnswer = who5Answers[currentQuestion];

    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                Section 1: WHO-5 Well-Being Index
              </h1>
              <p className="text-muted-foreground">
                <em>Think about the last 2 weeks.</em>
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Question {currentQuestion + 1} of {who5Questions.length}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="mt-2" />
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">
                    How often have you felt:
                  </h3>
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    {who5Questions[currentQuestion].question}
                  </h4>
                  <RadioGroup
                    value={currentAnswer?.toString() || ""}
                    onValueChange={(value) => handleWho5Answer(parseInt(value))}
                  >
                    {who5Questions[currentQuestion].options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 py-1">
                        <RadioGroupItem value={option.value.toString()} id={option.value.toString()} />
                        <Label htmlFor={option.value.toString()} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={currentAnswer === undefined}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {currentQuestion === who5Questions.length - 1 ? "Continue" : "Next"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Optional Section
  if (currentSection === 'optional') {
    const progress = ((currentQuestion + 1) / optionalQuestions.length) * 100;
    const currentAnswer = optionalAnswers[currentQuestion];

    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                Section 2: Quick Burnout & Moral Injury Check
              </h1>
              <p className="text-muted-foreground mb-4">
                <em>Optional — answer if you want a more personalised pathway.</em>
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSkipOptional(true);
                  setCurrentSection('results');
                }}
                className="mb-4"
              >
                Skip to Results
              </Button>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Question {currentQuestion + 1} of {optionalQuestions.length}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="mt-2" />
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">
                    {optionalQuestions[currentQuestion].question}
                  </h3>
                  <RadioGroup
                    value={currentAnswer?.toString() || ""}
                    onValueChange={(value) => handleOptionalAnswer(parseInt(value))}
                  >
                    {optionalQuestions[currentQuestion].options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 py-1">
                        <RadioGroupItem value={option.value.toString()} id={option.value.toString()} />
                        <Label htmlFor={option.value.toString()} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={currentAnswer === undefined}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {currentQuestion === optionalQuestions.length - 1 ? "Get Results" : "Next"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return null;
}