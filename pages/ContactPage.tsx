import { CrisisSupport } from "../components/CrisisSupport";
import { BeingLagomFooter } from "../components/ui/footer";

export function ContactPage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen pt-8">
      <CrisisSupport />
      <div style={{ background: "#0BB8C6", color: "white" }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}
