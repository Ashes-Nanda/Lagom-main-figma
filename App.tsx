import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ContactFAB } from "./components/ContactFAB";
import { ChatbotFAB } from "./components/ChatbotFAB";
import { HomePage } from "./pages/HomePage";
import { DirectoryPage } from "./pages/DirectoryPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { AboutPage } from "./pages/AboutPage";
import { AssessmentPage } from "./pages/AssessmentPage";

import { ContactPage } from "./pages/ContactPage";
import { MerchandisePage } from "./pages/MerchandisePage";
import { GamesPage } from "./pages/GamesPage";
import { FAQPage } from "./pages/FAQPage";
import { RainbowButtonDemoPage } from "./pages/RainbowButtonDemoPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/mindfulness" element={<GamesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/merchandise" element={<MerchandisePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/rainbow-button-demo" element={<RainbowButtonDemoPage />} />
            {/* Redirect old events route to directory since events are now merged */}
            <Route
              path="/events"
              element={<Navigate to="/directory" replace />}
            />
            {/* Catch-all route for any unmatched URLs - redirects to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <ContactFAB />
        <ChatbotFAB />
        <Footer />
      </div>
    </Router>
  );
}
