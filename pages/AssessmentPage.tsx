import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Alert, AlertDescription } from "../components/ui/alert";
import { useState } from "react";
import { Brain, FileText, BarChart3, Info } from "lucide-react";

export function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How often do you feel emotionally drained from your work?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 2,
      question: "How often do you feel used up at the end of the workday?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 3,
      question: "How often do you feel fatigued when you get up and have to face another day?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 4,
      question: "How often do you feel frustrated by your job?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 5,
      question: "How often do you feel you're working too hard?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 6,
      question: "How often do you feel burned out from your work?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 7,
      question: "How often do you worry about this job hardening you emotionally?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    },
    {
      id: 8,
      question: "How often do you feel like you're at the end of your rope?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "A few times a year" },
        { value: 2, label: "Monthly" },
        { value: 3, label: "Weekly" },
        { value: 4, label: "Daily" }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const getResultInterpretation = (score: number) => {
    if (score <= 8) {
      return {
        level: "Low Risk",
        color: "text-green-600",
        description: "You're showing minimal signs of burnout. Keep up the good work with self-care!",
        recommendations: [
          "Continue your current self-care practices",
          "Consider preventive wellness activities",
          "Stay connected with supportive colleagues"
        ]
      };
    } else if (score <= 16) {
      return {
        level: "Moderate Risk",
        color: "text-yellow-600",
        description: "You're experiencing some signs of burnout. It's time to take action.",
        recommendations: [
          "Implement stress reduction techniques",
          "Consider speaking with a counselor",
          "Evaluate your work-life balance",
          "Connect with support groups"
        ]
      };
    } else {
      return {
        level: "High Risk",
        color: "text-red-600",
        description: "You're showing significant signs of burnout. Professional support is recommended.",
        recommendations: [
          "Seek professional mental health support",
          "Consider time off if possible",
          "Speak with your supervisor about workload",
          "Prioritize immediate self-care measures"
        ]
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = calculateScore();
  const result = getResultInterpretation(score);

  if (showResults) {
    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Your Assessment Results
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your responses, here's what we found
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Your Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {score}/32
                    </div>
                    <div className={`text-lg font-medium ${result.color}`}>
                      {result.level}
                    </div>
                  </div>
                  <Progress value={(score / 32) * 100} className="mb-4" />
                  <p className="text-muted-foreground">
                    {result.description}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                variant="outline"
                className="mr-4"
              >
                Take Assessment Again
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Find Support Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Mental Health Assessment
            </h1>
            <p className="text-xl text-muted-foreground">
              A brief questionnaire to help assess your current well-being
            </p>
          </div>

          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              This assessment is for informational purposes only and does not replace professional 
              medical advice. If you're experiencing a mental health crisis, please seek immediate help.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Question {currentQuestion + 1} of {questions.length}
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
                  {questions[currentQuestion].question}
                </h3>
                <RadioGroup
                  value={answers[currentQuestion]?.toString() || ""}
                  onValueChange={(value) => handleAnswer(parseInt(value))}
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
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
                  disabled={answers[currentQuestion] === undefined}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}