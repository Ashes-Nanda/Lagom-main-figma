import { HeroSection } from "../components/HeroSection";
import { PartnershipSection } from "../components/PartnershipSection";
// import { InstitutionalCredibility } from "../components/InstitutionalCredibility";
import { PageLayout } from "../components/layout";
import { BeingLagomFooter } from "../components/ui/footer";
import { BrainwaveDivider } from "../components/ui/BrainwaveDivider";
import { InstagramGallery } from "../components/InstagramGallery";
import Faq from "../components/ui/faq";
import { ChatbotFAB } from "../components/ChatbotFAB";
// import { Header } from "../components/Header";

export function HomePage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      {/* <Header /> */}
      <PageLayout withTopPadding={false} className="bg-transparent">
        {/* Combined Hero and Partnership section with unified background */}
        <div 
          className="relative"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Background overlay for opacity control */}
          <div 
            className="absolute inset-0 bg-[#FFFBF5]"
            style={{ opacity: 0.66 }}
          />
          
          {/* Content wrapper */}
          <div className="relative z-10">
            <HeroSection />
            <PartnershipSection />
          </div>
        </div>
        
        <BrainwaveDivider />
        <InstagramGallery />
        <BrainwaveDivider />
        <Faq />
        <div style={{ background: "#0BB8C6", color: "white" }}>
          <BeingLagomFooter />
        </div>
      </PageLayout>
      <ChatbotFAB />
    </div>
  );
}
