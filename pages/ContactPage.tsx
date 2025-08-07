import { CrisisSupport } from "../components/CrisisSupport";
import { ContactSection } from "../components/ContactSection";
import { BeingLagomFooter } from "../components/ui/footer";

export function ContactPage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen pt-8">
      <CrisisSupport />
      <ContactSection />
      <div style={{ background: '#0BB8C6', color: 'white' }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}