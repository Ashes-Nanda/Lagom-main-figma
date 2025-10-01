import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import {
  Download,
  Eye,
  Search,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Calendar,
  Edit,
  Save,
  Trash2,
  Loader2,
} from "lucide-react";
import { TriageData } from "../TriageModal";

export function TriageManagement() {
  const [triageResponses, setTriageResponses] = useState<TriageData[]>([]);
  const [filteredResponses, setFilteredResponses] = useState<TriageData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState<"ALL" | "GREEN" | "YELLOW" | "RED">("ALL");
  const [selectedResponse, setSelectedResponse] = useState<TriageData | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [editNotes, setEditNotes] = useState("");
  const [editFollowUp, setEditFollowUp] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  // Load triage responses from localStorage
  useEffect(() => {
    const savedResponses = localStorage.getItem("triageResponses");
    if (savedResponses) {
      const responses = JSON.parse(savedResponses);
      setTriageResponses(responses);
      setFilteredResponses(responses);
    }
  }, []);

  // Filter responses based on search and risk level
  useEffect(() => {
    let filtered = triageResponses;

    if (searchTerm) {
      filtered = filtered.filter(
        (response) =>
          response.fillerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          response.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          response.contactNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          response.collegeHospital.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (riskFilter !== "ALL") {
      filtered = filtered.filter((response) => response.riskLevel === riskFilter);
    }

    setFilteredResponses(filtered);
    
    // Clear selections that are no longer visible
    setSelectedIds(prev => prev.filter(id => 
      filtered.some(response => response.id === id)
    ));
  }, [triageResponses, searchTerm, riskFilter]);

  const exportToCSV = () => {
    const headers = [
      "Timestamp",
      "Filler Name",
      "Email",
      "Contact No",
      "College/Hospital",
      "Triage Date",
      "Risk Level",
      "SPRINT Score",
      "PHQ-9 Score",
      "Total Score",
      "Incident Description",
      "Patience Breaking Point",
      "Sense of Purpose",
      "Community Benefits",
      "Follow-up Plan",
      "Notes"
    ];

    const csvContent = [
      headers.join(","),
      ...filteredResponses.map((response) =>
        [
          new Date(response.timestamp).toLocaleString(),
          `"${response.fillerName}"`,
          `"${response.email}"`,
          `"${response.contactNo}"`,
          `"${response.collegeHospital}"`,
          `"${response.triageDate}"`,
          response.riskLevel,
          response.sprintAnswers.reduce((sum, answer) => sum + answer, 0),
          response.phq9Answer,
          response.totalScore,
          `"${response.incidentDescription.replace(/"/g, '""')}"`,
          `"${response.patienceBreakingPoint.replace(/"/g, '""')}"`,
          `"${response.senseOfPurpose.replace(/"/g, '""')}"`,
          `"${response.communityBenefits.join('; ')}"`,
          `"${response.followUpPlanned}"`,
          `"${response.notes}"`
        ].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `triage-responses-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case "RED":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle size={12} />
            High Risk
          </Badge>
        );
      case "YELLOW":
        return (
          <Badge variant="secondary" className="flex items-center gap-1 bg-yellow-100 text-yellow-800">
            <AlertCircle size={12} />
            Moderate Risk
          </Badge>
        );
      case "GREEN":
        return (
          <Badge variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800">
            <CheckCircle size={12} />
            Low Risk
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const viewDetails = (response: TriageData) => {
    setSelectedResponse(response);
    setEditNotes(response.notes || "");
    setEditFollowUp(response.followUpPlanned || "");
    setIsEditingNotes(false);
    setIsDetailModalOpen(true);
  };

  const saveNotes = () => {
    if (!selectedResponse) return;
    
    const updatedResponse = {
      ...selectedResponse,
      notes: editNotes,
      followUpPlanned: editFollowUp
    };
    
    const updatedResponses = triageResponses.map(response => 
      response.id === selectedResponse.id ? updatedResponse : response
    );
    
    setTriageResponses(updatedResponses);
    localStorage.setItem("triageResponses", JSON.stringify(updatedResponses));
    setSelectedResponse(updatedResponse);
    setIsEditingNotes(false);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(filteredResponses.map(response => response.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    }
  };

  const handleDeleteSelected = () => {
    const updatedResponses = triageResponses.filter(
      response => !selectedIds.includes(response.id)
    );
    
    setTriageResponses(updatedResponses);
    localStorage.setItem("triageResponses", JSON.stringify(updatedResponses));
    setSelectedIds([]);
    setIsDeleteModalOpen(false);
  };

  const sprintQuestions = [
    "Unwanted memories, nightmares, or reminders",
    "Avoidance of thinking/talking about event",
    "Lost enjoyment, distance from people, difficulty with feelings",
    "Poor sleep, concentration, jumpiness, irritability",
    "Pain, aches, or tiredness",
    "Upset by stressful events or setbacks",
    "Interference with work/daily activities",
    "Interference with relationships"
  ];

  const generateFollowUpReport = async (response: TriageData) => {
    setIsGeneratingReport(true);
    
    // Simulate report generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sprintTotal = response.sprintAnswers.reduce((sum, answer) => sum + answer, 0);
    const riskEmoji = response.riskLevel === "RED" ? "🟥" : response.riskLevel === "YELLOW" ? "🟨" : "🟩";
    const caseNumber = response.caseNumber || `#${response.id.slice(-4)}`;
    
    const report = `${riskEmoji} ${response.riskLevel} Case ${caseNumber} – ${response.fillerName} (${response.collegeHospital})
Date of Triage: ${response.triageDate}
Triager: ${response.triagerName || "Being.Lagom Team"}
Sprint Score: ${sprintTotal} ${sprintTotal >= 25 ? "(Critical acute stress)" : sprintTotal >= 18 ? "(High acute stress)" : sprintTotal >= 14 ? "(Moderate acute stress)" : "(Low acute stress)"}
PHQ-9: ${response.phq9Answer} ${response.phq9Answer >= 2 ? "(Significant suicidal ideation)" : "(No significant depressive symptoms)"}
Consent & Confidentiality: Confirmed ✅

🧠 Presenting Concerns:
${response.incidentDescription}

📌 Additional Assessment:
• Patience/Breaking Point: ${response.patienceBreakingPoint}
• Sense of Purpose: ${response.senseOfPurpose}
• Community Benefits: ${response.communityBenefits.join(', ') || 'None selected'}

📌 Risk & Follow-Up Plan:
${response.riskLevel === "RED" ? 
  `- IMMEDIATE INTERVENTION REQUIRED
- Match with licensed therapist/psychiatrist
- Daily check-ins for first week
- Crisis hotline information provided
- Emergency contact protocols activated` :
  response.riskLevel === "YELLOW" ?
  `- Match with therapist or peer support
- Weekly check-ins recommended
- Monitor for escalation
- Provide coping resources` :
  `- Peer-to-peer support recommended
- Monthly check-ins
- Preventive resources provided
- Open door policy for future support`}

Clinical Notes: ${response.notes || "Assessment completed, awaiting clinical review."}

This assessment follows Being.Lagom clinical protocols and risk assessment rubrics.`;

    const updatedResponse = {
      ...response,
      followUpReport: report,
      caseNumber: caseNumber
    };
    
    const updatedResponses = triageResponses.map(r => 
      r.id === response.id ? updatedResponse : r
    );
    
    setTriageResponses(updatedResponses);
    localStorage.setItem("triageResponses", JSON.stringify(updatedResponses));
    setSelectedResponse(updatedResponse);
    setIsGeneratingReport(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Triage Responses
        </h2>
        <p className="text-gray-600">
          View and manage follow-up triage assessment responses
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Responses</CardDescription>
            <CardTitle className="text-2xl">{triageResponses.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>High Risk (RED)</CardDescription>
            <CardTitle className="text-2xl text-red-600">
              {triageResponses.filter(r => r.riskLevel === "RED").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Moderate Risk (YELLOW)</CardDescription>
            <CardTitle className="text-2xl text-yellow-600">
              {triageResponses.filter(r => r.riskLevel === "YELLOW").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Low Risk (GREEN)</CardDescription>
            <CardTitle className="text-2xl text-green-600">
              {triageResponses.filter(r => r.riskLevel === "GREEN").length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Filters & Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Search by name or contact..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="ALL">All Risk Levels</option>
                <option value="RED">High Risk</option>
                <option value="YELLOW">Moderate Risk</option>
                <option value="GREEN">Low Risk</option>
              </select>
              {selectedIds.length > 0 && (
                <Button 
                  onClick={() => setIsDeleteModalOpen(true)} 
                  variant="destructive" 
                  className="flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete ({selectedIds.length})
                </Button>
              )}
              <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Export CSV
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responses Table */}
      <Card>
        <CardHeader>
          <CardTitle>Assessment Responses</CardTitle>
          <CardDescription>
            {filteredResponses.length} of {triageResponses.length} responses
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredResponses.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No triage responses found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedIds.length === filteredResponses.length && filteredResponses.length > 0}
                        onCheckedChange={handleSelectAll}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Filler Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>College/Hospital</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>SPRINT Score</TableHead>
                    <TableHead>PHQ-9</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredResponses.map((response) => (
                    <TableRow key={response.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedIds.includes(response.id)}
                          onCheckedChange={(checked) => handleSelectOne(response.id, checked as boolean)}
                          aria-label={`Select ${response.fillerName}`}
                        />
                      </TableCell>
                      <TableCell className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(response.timestamp).toLocaleDateString()}
                          <br />
                          <span className="text-gray-500">
                            {new Date(response.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {response.fillerName}
                      </TableCell>
                      <TableCell className="text-sm">
                        <div>{response.email}</div>
                        {response.contactNo && (
                          <div className="text-gray-500">{response.contactNo}</div>
                        )}
                      </TableCell>
                      <TableCell className="text-sm">{response.collegeHospital}</TableCell>
                      <TableCell>{getRiskBadge(response.riskLevel)}</TableCell>
                      <TableCell>
                        {response.sprintAnswers.reduce((sum, answer) => sum + answer, 0)}/32
                      </TableCell>
                      <TableCell>{response.phq9Answer}/3</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => viewDetails(response)}
                            className="flex items-center gap-1"
                          >
                            <Eye size={14} />
                            View
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Triage Assessment Details</DialogTitle>
            <DialogDescription>
              Complete assessment information for {selectedResponse?.fillerName}
            </DialogDescription>
          </DialogHeader>

          {selectedResponse && (
            <div className="space-y-6">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Participant Information
                    {getRiskBadge(selectedResponse.riskLevel)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm text-gray-600">Filler Name:</strong>
                      <p className="text-base">{selectedResponse.fillerName}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Email:</strong>
                      <p className="text-base break-all">{selectedResponse.email}</p>
                    </div>
                    {selectedResponse.contactNo && (
                      <div>
                        <strong className="text-sm text-gray-600">Contact No:</strong>
                        <p className="text-base">{selectedResponse.contactNo}</p>
                      </div>
                    )}
                    <div>
                      <strong className="text-sm text-gray-600">College/Hospital:</strong>
                      <p className="text-base">{selectedResponse.collegeHospital}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm text-gray-600">Triage Date:</strong>
                      <p className="text-base">{selectedResponse.triageDate}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Assessment Submitted:</strong>
                      <p className="text-base">{new Date(selectedResponse.timestamp).toLocaleString()}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Total Score:</strong>
                      <p className="text-base font-semibold">{selectedResponse.totalScore}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Risk Level:</strong>
                      <p className="text-base font-semibold text-red-600">{selectedResponse.riskLevel}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Incident Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Incident Response</CardTitle>
                  <CardDescription>
                    "I know that the incident on June 12 at BJMC has been really distressing to many people including myself. I am wondering how you are feeling generally since the incident?"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{selectedResponse.incidentDescription}</p>
                </CardContent>
              </Card>

              {/* Qualitative Responses */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Qualitative Responses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-gray-700">
                      Patience/Breaking Point Response:
                    </h4>
                    <p className="text-sm bg-gray-50 p-3 rounded whitespace-pre-wrap">
                      {selectedResponse.patienceBreakingPoint}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-gray-700">
                      Sense of Purpose Response:
                    </h4>
                    <p className="text-sm bg-gray-50 p-3 rounded whitespace-pre-wrap">
                      {selectedResponse.senseOfPurpose}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-sm text-gray-700">
                      Community Benefits Selected:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedResponse.communityBenefits.length > 0 ? (
                        selectedResponse.communityBenefits.map((benefit, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-gray-500 italic text-sm">No benefits selected</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SPRINT Answers */}
              <Card>
                <CardHeader>
                  <CardTitle>SPRINT-8 Responses (Total: {selectedResponse.sprintAnswers.reduce((sum, answer) => sum + answer, 0)}/32)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedResponse.sprintAnswers.map((answer, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm flex-1">{sprintQuestions[index]}</span>
                        <Badge variant="outline">{answer}/4</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* PHQ-9 */}
              <Card>
                <CardHeader>
                  <CardTitle>PHQ-9 Question 9 Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="text-sm mb-2">
                      "In the week since the incident, how often have you had thoughts that you would be better off dead or of hurting yourself in some way?"
                    </p>
                    <Badge variant="outline" className="text-base">
                      Score: {selectedResponse.phq9Answer}/3
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Notes and Follow-up */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Clinical Assessment Notes & Follow-up
                    {!isEditingNotes ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditingNotes(true)}
                        className="flex items-center gap-1"
                      >
                        <Edit size={14} />
                        Edit
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setIsEditingNotes(false);
                            setEditNotes(selectedResponse.notes || "");
                            setEditFollowUp(selectedResponse.followUpPlanned || "");
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          onClick={saveNotes}
                          className="flex items-center gap-1"
                        >
                          <Save size={14} />
                          Save
                        </Button>
                      </div>
                    )}
                  </CardTitle>
                  <CardDescription>
                    Clinical notes and follow-up planning (for internal team use only)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!isEditingNotes ? (
                    <>
                      <div>
                        <h4 className="font-medium mb-2">Assessment Notes:</h4>
                        <div className="text-sm bg-gray-50 p-3 rounded min-h-[60px]">
                          {selectedResponse.notes || (
                            <span className="text-gray-500 italic">No notes added yet</span>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Follow-up Plan:</h4>
                        <div className="text-sm bg-gray-50 p-3 rounded min-h-[60px]">
                          {selectedResponse.followUpPlanned || (
                            <span className="text-gray-500 italic">No follow-up plan added yet</span>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="edit-notes">Assessment Notes:</Label>
                        <Textarea
                          id="edit-notes"
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                          placeholder="Add clinical observations, risk assessment details, recommendations..."
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-followup">Follow-up Plan:</Label>
                        <Textarea
                          id="edit-followup"
                          value={editFollowUp}
                          onChange={(e) => setEditFollowUp(e.target.value)}
                          placeholder="Add follow-up actions, referrals, next steps..."
                          rows={4}
                        />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Follow-up Report */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📋 Follow-up Report
                    <Badge variant="outline" className="ml-2">
                      Case #{selectedResponse.caseNumber || selectedResponse.id.slice(-4)}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Comprehensive triage report based on assessment responses and clinical rubrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedResponse.followUpReport ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {selectedResponse.followUpReport}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                      <div className="space-y-4">
                        <div className="text-gray-500 italic">
                          No follow-up report generated yet
                        </div>
                        <Button
                          onClick={() => generateFollowUpReport(selectedResponse)}
                          variant="outline"
                          className="flex items-center gap-2"
                          disabled={isGeneratingReport}
                        >
                          {isGeneratingReport ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Generating Report...
                            </>
                          ) : (
                            <>
                              <Edit size={16} />
                              Generate Follow-up Report
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={20} />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedIds.length} selected triage response{selectedIds.length > 1 ? 's' : ''}? 
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteSelected}
              className="flex items-center gap-2"
            >
              <Trash2 size={16} />
              Delete {selectedIds.length} Record{selectedIds.length > 1 ? 's' : ''}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}