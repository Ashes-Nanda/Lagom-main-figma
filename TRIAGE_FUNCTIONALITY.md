# Follow-up Triage Assessment Feature

## Overview
The Follow-up Triage Assessment feature has been implemented to provide structured mental health screening following the June 12, 2025 incident. This feature follows WHO guidelines and includes both SPRINT-8 and PHQ-9 assessments.

## Components Added

### 1. TriageModal Component (`components/TriageModal.tsx`)
- Multi-step modal form for conducting triage assessments
- Implements SPRINT-8 questionnaire (8 questions, 0-4 scale)
- Includes PHQ-9 Question 9 for suicide ideation screening
- Automatic risk level calculation based on scoring rubric
- Progress indicator and step-by-step navigation

### 2. TriageManagement Component (`components/admin/TriageManagement.tsx`)
- Admin interface for viewing all triage responses
- Tabular display with filtering and search capabilities
- Risk level badges (GREEN/YELLOW/RED)
- Detailed view modal for individual responses
- CSV export functionality for data analysis

### 3. Updated DirectoryPage (`pages/DirectoryPage.tsx`)
- Added "Follow-up Triage" button below the toggle section
- Button opens the triage modal when clicked
- Handles data submission and storage

### 4. Updated AdminDashboard (`components/admin/AdminDashboard.tsx`)
- Added "Triage Responses" section to sidebar
- Updated overview stats to include triage data
- Integrated triage management into admin workflow

## Scoring Rubric Implementation

### SPRINT-8 Scoring
- 8 questions, each scored 0-4
- Total possible score: 32
- Questions cover trauma symptoms, avoidance, emotional numbing, hyperarousal, physical symptoms, stress reactivity, and functional impairment

### PHQ-9 Question 9
- Single question about suicidal ideation
- Scored 0-3 (Not at all, Several days, More than half the days, Nearly every day)

### Risk Level Calculation
- **RED (High Risk)**: PHQ-9 Q9 ≥ 2 OR SPRINT total ≥ 25 OR SPRINT total ≥ 18
- **YELLOW (Moderate Risk)**: SPRINT total ≥ 14
- **GREEN (Low Risk)**: SPRINT total < 14 and PHQ-9 Q9 < 2

### Emergency Protocol
- Automatically triggered for RED risk level
- Requires immediate clinical lead consultation
- Therapist contact within 1 hour for high-risk cases

## Data Storage
- Responses are stored in browser localStorage
- Each response includes:
  - Participant information
  - Timestamp
  - All assessment scores
  - Risk level calculation
  - Notes and follow-up plans
  - Unique identifier

## Features

### User-Facing Features
1. **Accessible Button**: Prominently placed on Connect with Care page
2. **Guided Assessment**: Step-by-step process with clear instructions
3. **Professional Script**: Includes introduction and consent language
4. **Risk Assessment**: Automatic scoring and risk level determination
5. **Documentation**: Space for notes and follow-up planning

### Admin Features
1. **Response Management**: View all triage responses in organized table
2. **Risk Filtering**: Filter by risk level (ALL/GREEN/YELLOW/RED)
3. **Search Functionality**: Search by participant name or contact info
4. **Detailed Views**: Complete assessment details in modal
5. **Data Export**: CSV export for external analysis
6. **Statistics Dashboard**: Overview of response counts and risk levels

## Usage Instructions

### For Assessors
1. Navigate to "Connect with Care" page
2. Click "Follow-up Triage" button
3. Follow the 5-step assessment process:
   - Step 1: Participant information and consent
   - Step 2: Incident context and description
   - Step 3: SPRINT-8 questionnaire
   - Step 4: PHQ-9 Question 9
   - Step 5: Results review and documentation
4. Complete notes and follow-up planning
5. Submit assessment

### For Administrators
1. Access admin dashboard
2. Navigate to "Triage Responses" section
3. View response statistics and individual assessments
4. Use filters and search to find specific responses
5. Export data as needed for reporting
6. Monitor high-risk cases for follow-up

## Technical Implementation Notes

### Dependencies
- Uses existing UI components (Button, Card, Dialog, etc.)
- Leverages React hooks for state management
- Implements localStorage for data persistence
- Uses Lucide React icons for UI elements

### Responsive Design
- Mobile-friendly modal design
- Responsive table layout
- Accessible form controls
- Progress indicators for multi-step process

### Data Privacy
- Local storage only (no external transmission)
- Confidentiality notices included in assessment
- Voluntary participation emphasized
- Clear consent process

## Future Enhancements
1. Integration with external database
2. Automated follow-up reminders
3. Risk trend analysis
4. Integration with therapist scheduling system
5. Bulk data analysis tools
6. Reporting dashboard with charts and graphs