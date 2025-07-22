import { TherapistDirectory } from "../components/TherapistDirectory";
import { EventsSection } from "../components/EventsSection";

export function DirectoryPage() {
  return (
    <div className="pt-8">
      <TherapistDirectory />
      <EventsSection />
    </div>
  );
}
