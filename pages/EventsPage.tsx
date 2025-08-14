import { EventsSection } from "../components/EventsSection";
import { BeingLagomFooter } from "../components/ui/footer";

export function EventsPage() {
  return (
    <div className="bg-[#fffbf5] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <EventsSection />
      <div style={{ background: '#0BB8C6', color: 'white' }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}