import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "./components/Header";
import { ContactFAB } from "./components/ContactFAB";
import { ChatbotFAB } from "./components/ChatbotFAB";
import { HomePage } from "./pages/HomePage";
import { DirectoryPage } from "./pages/DirectoryPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { AboutPage } from "./pages/AboutPage";
import { AssessmentPage } from "./pages/AssessmentPage";

import { ContactPage } from "./pages/ContactPage";
import { EventsPage } from "./pages/EventsPage";
import { PartnershipPage } from "./pages/PartnershipPage";
import { MerchandisePage } from "./pages/MerchandisePage";
import { GamesPage } from "./pages/GamesPage";
import { CompliancePage } from "./pages/CompliancePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { AdminPage } from "./pages/AdminPage";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="min-h-screen bg-background">
      {!isAdminPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/mindfulness" element={<GamesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* Catch-all route for any unmatched URLs - redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAdminPage && <ContactFAB />}
      {!isAdminPage && <ChatbotFAB />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
    </Router>
  );
}
