import { HeroSection } from "../components/HeroSection";
import { PartnershipSection } from "../components/PartnershipSection";
// import { InstitutionalCredibility } from "../components/InstitutionalCredibility";
import { PageLayout } from "../components/layout";
import { BeingLagomFooter } from "../components/ui/footer";
import { BrainwaveDivider } from "../components/ui/BrainwaveDivider";
import { InstagramGallery } from "../components/InstagramGallery";
import { CircularTestimonials } from "../components/ui/circular-testimonials";
import { testimonials } from "../lib/testimonialsData";
import Faq from "../components/ui/faq";
import { ChatbotFAB } from "../components/ChatbotFAB";
// import { Header } from "../components/Header";

export function HomePage() {
  return (
    <div className="bg-[#fffbf5] min-h-screen">
      {/* <Header /> */}
      <PageLayout
        withTopPadding={false}
        className="bg-transparent pt-24 sm:pt-28 md:pt-32 lg:pt-36"
      >
        {/* Combined Hero and Partnership section with unified background */}
        <div
          className="relative"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Background overlay for opacity control */}
          <div
            className="absolute inset-0 bg-[#fffbf5]"
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

        {/* Testimonials Section */}
        <section className="py-20 bg-[#fffbf5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Voices of Healing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real stories from healthcare workers who found support,
                community, and healing through Being.Lagom
              </p>
            </div>
            <div className="flex justify-center">
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={false}
                colors={{
                  name: "#1e3a8a", // primary color
                  designation: "#6b7280", // muted foreground
                  testimony: "#374151", // darker text
                  arrowBackground: "#1e3a8a", // primary
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#0bb8c6", // accent color
                }}
                fontSizes={{
                  name: "1.75rem",
                  designation: "1rem",
                  quote: "1.125rem",
                }}
              />
            </div>
          </div>
        </section>

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
