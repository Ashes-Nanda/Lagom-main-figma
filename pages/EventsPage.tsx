import { EventsSection } from "../components/EventsSection";
import { BeingLagomFooter } from "../components/ui/footer";

export function EventsPage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen pt-8">
      <EventsSection />
      <div style={{ background: '#0BB8C6', color: 'white' }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}