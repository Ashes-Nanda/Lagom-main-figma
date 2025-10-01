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
  fillerName: string;
  contactNo: string;
  email: string;
  collegeHospital: string;
  triageDate: string;
  incidentDescription: string;
  patienceBreakingPoint: string;
  senseOfPurpose: string;
  communityBenefits: string[];
  sprintAnswers: number[];
  phq9Answer: number;
  totalScore: number;
  riskLevel: "GREEN" | "YELLOW" | "RED";
  notes: string;
  followUpPlanned: string;
  followUpReport?: string;
  triagerName?: string;
  caseNumber?: string;
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
  const [fillerName, setFillerName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [collegeHospital, setCollegeHospital] = useState("");
  const [triageDate, setTriageDate] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");
  const [sprintAnswers, setSprintAnswers] = useState<number[]>(
    new Array(8).fill(-1)
  );
  const [phq9Answer, setPhq9Answer] = useState(-1);
  const [consentChecked, setConsentChecked] = useState(false);
  const [confidentialityChecked, setConfidentialityChecked] = useState(false);
  const [safeSpaceChecked, setSafeSpaceChecked] = useState(false);
  const [patienceBreakingPoint, setPatienceBreakingPoint] = useState("");
  const [senseOfPurpose, setSenseOfPurpose] = useState("");
  const [communityBenefits, setCommunityBenefits] = useState<string[]>([]);
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

  const handleCommunityBenefitChange = (benefit: string, checked: boolean) => {
    if (checked) {
      setCommunityBenefits([...communityBenefits, benefit]);
    } else {
      setCommunityBenefits(communityBenefits.filter(b => b !== benefit));
    }
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
      fillerName,
      contactNo,
      email,
      collegeHospital,
      triageDate,
      incidentDescription,
      patienceBreakingPoint,
      senseOfPurpose,
      communityBenefits,
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
    setFillerName("");
    setContactNo("");
    setEmail("");
    setCollegeHospital("");
    setTriageDate("");
    setIncidentDescription("");
    setSprintAnswers(new Array(8).fill(-1));
    setPhq9Answer(-1);
    setConsentChecked(false);
    setConfidentialityChecked(false);
    setSafeSpaceChecked(false);
    setPatienceBreakingPoint("");
    setSenseOfPurpose("");
    setCommunityBenefits([]);
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 0:
        return fillerName.trim() !== "" && email.trim() !== "" && collegeHospital.trim() !== "" && triageDate.trim() !== "";
      case 1:
        return consentChecked && confidentialityChecked && safeSpaceChecked;
      case 2:
        return incidentDescription.trim() !== "";
      case 3:
        return patienceBreakingPoint.trim() !== "" && senseOfPurpose.trim() !== "";
      case 4:
        return sprintAnswers.every((answer) => answer >= 0);
      case 5:
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
                <Label htmlFor="fillerName" className="text-base font-medium">
                  Who is filling this (Your name) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fillerName"
                  value={fillerName}
                  onChange={(e) => setFillerName(e.target.value)}
                  placeholder=""
                  className="mt-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="contactNo" className="text-base font-medium">
                  Contact No.
                </Label>
                <Input
                  id="contactNo"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  placeholder=""
                  className="mt-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base font-medium">
                  Your Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@example.com"
                  className="mt-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="collegeHospital" className="text-base font-medium">
                  College/ Hospital <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="collegeHospital"
                  value={collegeHospital}
                  onChange={(e) => setCollegeHospital(e.target.value)}
                  placeholder=""
                  className="mt-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="triageDate" className="text-base font-medium">
                  Date of triage <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="triageDate"
                  type="date"
                  value={triageDate}
                  onChange={(e) => setTriageDate(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500">Date</p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700">
              <p className="text-base leading-relaxed">
                Hi, thank you for doing the self-assessed follow-up form, please ensure that you've been 
                triaged by a Being.Lagom volunteer before proceeding to the next steps:
              </p>
              
              <p className="text-base leading-relaxed">
                Being.Lagom is a doctor-led initiative that's been working with medical professionals for 4 
                years — especially in times of grief, burnout, or crisis. Our job today is simple: to check in 
                and make sure no one falls through the cracks
              </p>
              
              <p className="text-base leading-relaxed">
                We're a group of doctors, psychologists, and trained volunteers from across India and 
                abroad, here to support Ahmedabad's students, staff, and faculty after the recent tragedy."
              </p>
              
              <p className="text-base leading-relaxed">
                This form allows us to understand what kind of support might be most helpful for you right 
                now. It'll take about 10-15 minutes.
              </p>
              
              <p className="text-base leading-relaxed">
                Just to reassure you — this is entirely voluntary. You can choose to skip any question. And 
                everything you share will be kept confidential, unless we believe there's an immediate 
                safety concern.
              </p>
              
              <div className="mt-8 space-y-4">
                <p className="text-base font-medium">
                  If you offer Consent, Confidentiality, and are in a Safe Space to do the form, click on 
                  the 3 checkboxes below
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <Label htmlFor="consent" className="text-base cursor-pointer">
                      Consent
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="confidentiality"
                      checked={confidentialityChecked}
                      onChange={(e) => setConfidentialityChecked(e.target.checked)}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <Label htmlFor="confidentiality" className="text-base cursor-pointer">
                      Confidentiality
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="safeSpace"
                      checked={safeSpaceChecked}
                      onChange={(e) => setSafeSpaceChecked(e.target.checked)}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <Label htmlFor="safeSpace" className="text-base cursor-pointer">
                      Safe Space
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Allow them to name their trauma in their own words
              </h3>
              <hr className="border-gray-300" />
              <div className="space-y-3">
                <Label htmlFor="incident" className="text-base font-medium">
                  "I know that the incident on June 12 at BJMC has been really distressing to many people including myself. I am wondering how you are feeling generally since the incident?" <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="incident"
                  value={incidentDescription}
                  onChange={(e) => setIncidentDescription(e.target.value)}
                  placeholder=""
                  rows={5}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Additional Qualitative Qns
              </h3>
              <hr className="border-gray-300" />
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="patienceBreaking" className="text-base font-medium">
                    Have you noticed if you were at the limit of your patience/ at breaking point when dealing with patients, peers, or your work? Can you share an example if you're comfortable? <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="patienceBreaking"
                    value={patienceBreakingPoint}
                    onChange={(e) => setPatienceBreakingPoint(e.target.value)}
                    placeholder=""
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="senseOfPurpose" className="text-base font-medium">
                    Over (these past weeks), what has given you - even in small ways - a sense of purpose or made you feel that your role still matters? <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="senseOfPurpose"
                    value={senseOfPurpose}
                    onChange={(e) => setSenseOfPurpose(e.target.value)}
                    placeholder=""
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">
                    What has the association with Being.Lagom community given you?
                  </Label>
                  <div className="space-y-3 mt-4">
                    {[
                      "Sense of community",
                      "Destigmatise mental health",
                      "Safe space to share concerns",
                      "Other"
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={`benefit-${benefit}`}
                          checked={communityBenefits.includes(benefit)}
                          onChange={(e) => handleCommunityBenefitChange(benefit, e.target.checked)}
                          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                        />
                        <Label htmlFor={`benefit-${benefit}`} className="text-base cursor-pointer">
                          {benefit}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                SPRINT-8 Questions
              </h3>
              <p className="text-sm text-gray-600">(0-4 Scale)</p>
              <hr className="border-gray-300" />
              
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  "I have ask you a few questions about how you've been feeling this past week. For each 
                  one, tell me how much it applies to you on a scale from 0 to 4."
                </p>
                <p className="text-sm text-gray-600">
                  (Responses: 0 = Not at all, 1 = A little bit, 2 = Moderately, 3 = Quite a lot, 4 = Very much)
                </p>
              </div>

              <div className="space-y-6">
                {sprintQuestions.map((question, index) => (
                  <div key={index} className="space-y-3">
                    <Label className="text-sm font-medium leading-relaxed text-gray-700">
                      {question} <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={sprintAnswers[index]?.toString() || ""}
                      onValueChange={(value) =>
                        handleSprintAnswer(index, parseInt(value))
                      }
                      className="flex items-center space-x-4 flex-wrap gap-y-2"
                    >
                      {scaleOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={option.value.toString()}
                            id={`q${index}-${option.value}`}
                            className="w-5 h-5"
                          />
                          <Label
                            htmlFor={`q${index}-${option.value}`}
                            className="text-sm font-medium cursor-pointer min-w-[20px] text-center"
                          >
                            {option.value}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
              </div>


            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                PHQ-9 Q9 (Suicide Risk)
              </h3>
              <p className="text-sm text-gray-600">(0-3 Scale)</p>
              <hr className="border-gray-300" />
              
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  "Thank you so much for entrusting us with sharing such personal information about you. 
                  One last question—it's a little sensitive, but really important for us to understand how best 
                  to support you."
                </p>
                <p className="text-sm text-gray-600">
                  (Responses: 0 - Not at all, 1 - Several days, 2 - More than half of the days, 3 - Nearly every day)
                </p>
              </div>

              <div className="space-y-4 mt-6">
                <Label className="text-sm font-medium leading-relaxed text-gray-700">
                  In the week since the incident, how often have you had thoughts that you would be 
                  better off dead or of hurting yourself in some way? <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={phq9Answer?.toString() || ""}
                  onValueChange={(value) => setPhq9Answer(parseInt(value))}
                  className="space-y-4 mt-4"
                >
                  {phq9Options.map((option) => (
                    <div key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem
                        value={option.value.toString()}
                        id={`phq9-${option.value}`}
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                      />
                      <Label
                        htmlFor={`phq9-${option.value}`}
                        className="text-sm font-medium cursor-pointer leading-relaxed flex-1"
                      >
                        <span className="font-semibold text-primary">{option.value}</span> - {option.label}
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
    "Consent & Information",
    "Context & Incident",
    "Additional Qualitative Questions",
    "Assessment Questions",
    "Final Question",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden">
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
