import { HeroSection } from "../components/HeroSection";
import { PartnershipSection } from "../components/PartnershipSection";
// import { InstitutionalCredibility } from "../components/InstitutionalCredibility";
import { PageLayout } from "../components/layout";
import { BeingLagomFooter } from "../components/ui/footer";
// import { Header } from "../components/Header";

export function HomePage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      {/* <Header /> */}
      <PageLayout withTopPadding={false} className="bg-transparent">
        <HeroSection />
        <PartnershipSection />
        <div style={{ background: '#0BB8C6', color: 'white' }}>
          <BeingLagomFooter />
        </div>
      </PageLayout>
    </div>
  );
}