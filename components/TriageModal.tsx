import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Loader2, CheckCircle } from "lucide-react";

interface TriageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TriageData) => void;
}

export interface TriageData {
  id: string;
  timestamp: string;
  participantName: string;
  contactInfo: string;
  incidentDescription: string;
  sprintAnswers: number[];
  phq9Answer: number;
  totalScore: number;
  riskLevel: "GREEN" | "YELLOW" | "RED";
  notes: string;
  followUpPlanned: string;
}

const sprintQuestions = [
  "How much have you been bothered by unwanted memories, nightmares, or reminders of the event?",
  "How much effort have you made to avoid thinking or talking about the event, or doing things which remind you of what happened?",
  "To what extent have you lost enjoyment for things, kept your distance from people, or found it difficult to experience feelings?",
  "How much have you been bothered by poor sleep, poor concentration, jumpiness, irritability, or feeling watchful around you?",
  "How much have you been bothered by pain, aches, or tiredness?",
  "How much would you get upset when stressful events or setbacks happen to you?",
  "How much have the above symptoms interfered with your ability to work or carry out daily activities?",
  "How much have the above symptoms interfered with your relationships with family or friends?",
];

const scaleOptions = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "A little bit" },
  { value: 2, label: "Moderately" },
  { value: 3, label: "Quite a lot" },
  { value: 4, label: "Very much" },
];

const phq9Options = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
];

export function TriageModal({ isOpen, onClose, onSubmit }: TriageModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [participantName, setParticipantName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");
  const [sprintAnswers, setSprintAnswers] = useState<number[]>(
    new Array(8).fill(-1)
  );
  const [phq9Answer, setPhq9Answer] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateRiskLevel = (
    sprintTotal: number,
    phq9Score: number
  ): "GREEN" | "YELLOW" | "RED" => {
    // Emergency protocol for PHQ-9
    if (phq9Score >= 2) return "RED";
    if (sprintTotal >= 25) return "RED";
    if (sprintTotal >= 18) return "RED";
    if (sprintTotal >= 14) return "YELLOW";
    return "GREEN";
  };

  const handleSprintAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...sprintAnswers];
    newAnswers[questionIndex] = value;
    setSprintAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const sprintTotal = sprintAnswers.reduce(
      (sum, answer) => sum + (answer >= 0 ? answer : 0),
      0
    );
    const totalScore = sprintTotal + (phq9Answer >= 0 ? phq9Answer : 0);
    const riskLevel = calculateRiskLevel(sprintTotal, phq9Answer);

    const triageData: TriageData = {
      id: `triage-${Date.now()}`,
      timestamp: new Date().toISOString(),
      participantName,
      contactInfo,
      incidentDescription,
      sprintAnswers,
      phq9Answer,
      totalScore,
      riskLevel,
      notes: "", // Will be filled by admin later
      followUpPlanned: "", // Will be filled by admin later
    };

    onSubmit(triageData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Auto close after 3 seconds
    setTimeout(() => {
      resetForm();
      onClose();
    }, 3000);
  };

  const resetForm = () => {
    setCurrentStep(0);
    setParticipantName("");
    setContactInfo("");
    setIncidentDescription("");
    setSprintAnswers(new Array(8).fill(-1));
    setPhq9Answer(-1);
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 0:
        return participantName.trim() !== "" && contactInfo.trim() !== "";
      case 1:
        return incidentDescription.trim() !== "";
      case 2:
        return sprintAnswers.every((answer) => answer >= 0);
      case 3:
        return phq9Answer >= 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-base font-medium">
                  Participant Name
                </Label>
                <Input
                  id="name"
                  value={participantName}
                  onChange={(e) => setParticipantName(e.target.value)}
                  placeholder="Enter participant's name"
                  className="mt-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="contact" className="text-base font-medium">
                  Contact Information
                </Label>
                <Input
                  id="contact"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Phone number or email"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="incident" className="text-base font-medium">
                Please briefly identify the recent incident on 12 June 2025
                we're discussing
              </Label>
              <Textarea
                id="incident"
                value={incidentDescription}
                onChange={(e) => setIncidentDescription(e.target.value)}
                placeholder="Allow space for participant's response..."
                rows={5}
                className="mt-2"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            {sprintQuestions.map((question, index) => (
              <div key={index} className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-base font-medium leading-relaxed">
                    {index + 1}. {question}
                  </Label>
                  <div className="mt-4">
                    <RadioGroup
                      value={sprintAnswers[index]?.toString() || ""}
                      onValueChange={(value) =>
                        handleSprintAnswer(index, parseInt(value))
                      }
                      className="space-y-3"
                    >
                      {scaleOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3"
                        >
                          <RadioGroupItem
                            value={option.value.toString()}
                            id={`q${index}-${option.value}`}
                          />
                          <Label
                            htmlFor={`q${index}-${option.value}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {option.value} - {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                {index < sprintQuestions.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base font-medium leading-relaxed">
                In the week since the incident, how often have you had thoughts
                that you would be better off dead or of hurting yourself in some
                way?
              </Label>
              <div className="mt-4">
                <RadioGroup
                  value={phq9Answer?.toString() || ""}
                  onValueChange={(value) => setPhq9Answer(parseInt(value))}
                  className="space-y-3"
                >
                  {phq9Options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3"
                    >
                      <RadioGroupItem
                        value={option.value.toString()}
                        id={`phq9-${option.value}`}
                      />
                      <Label
                        htmlFor={`phq9-${option.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.value} - {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    "Participant Information",
    "Context & Incident",
    "Assessment Questions",
    "Final Question",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {isSubmitting ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <h3 className="text-xl font-semibold text-gray-900">
              Submitting Assessment
            </h3>
            <p className="text-gray-600 text-center">
              Please wait while we process your responses...
            </p>
          </div>
        ) : isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">
                Form Successfully Submitted
              </h3>
              <p className="text-gray-600 max-w-md">
                Thank you for your participation. Your responses have been
                recorded and will be reviewed by our mental health team.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              This window will close automatically in a few seconds...
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Follow-up Triage Assessment</DialogTitle>
              <DialogDescription>
                Step {currentStep + 1} of {stepTitles.length}:{" "}
                {stepTitles[currentStep]}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Progress indicator */}
              <div className="flex justify-between items-center">
                {stepTitles.map((_, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index < stepTitles.length - 1 ? "flex-1" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        index <= currentStep
                          ? "bg-primary text-primary-foreground"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < stepTitles.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          index < currentStep ? "bg-primary" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {renderStep()}

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0 || isSubmitting}
                >
                  Previous
                </Button>

                {currentStep < stepTitles.length - 1 ? (
                  <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={!canProceedToNext() || isSubmitting}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceedToNext() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Assessment"
                    )}
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
