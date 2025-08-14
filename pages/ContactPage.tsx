import { CrisisSupport } from "../components/CrisisSupport";
import { BeingLagomFooter } from "../components/ui/footer";

export function ContactPage() {
  return (
    <div className="bg-[#fffbf5] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <CrisisSupport />
      <div style={{ background: "#0BB8C6", color: "white" }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}
