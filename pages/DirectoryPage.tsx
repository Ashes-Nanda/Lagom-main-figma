import { useState } from "react";
import { SupportPathSection } from "../components/SupportPathSection";
import { EventsSection } from "../components/EventsSection";
import {
  PageLayout,
  SectionContainer,
  ContentContainer,
} from "../components/layout";

// Removed unused imports
import { BeingLagomFooter } from "../components/ui/footer";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function DirectoryPage() {
  const [activeTab, setActiveTab] = useState<"support" | "events">("support");

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      <PageLayout withTopPadding={false} className="bg-transparent">
        {/* Header Section */}
        <SectionContainer spacing="sm" size="xl" background="default" className="bg-[#FFFBF5]">
          <ContentContainer spacing="tight" centerContent={true} preventOverflow={true}>
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
                Connect with Care
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {activeTab === "support" 
                  ? "Whether you need a quick check-in, someone to talk to, or just space to breathe - we've built different support tracks just for healthcare professionals."
                  : "Workshops, support groups, healing circles, and more—designed by and for HCPs to recover, reflect, and reconnect."
                }
              </p>
            </div>

            {/* Toggle Menu */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
                <Button
                  variant={activeTab === "support" ? "default" : "ghost"}
                  onClick={() => setActiveTab("support")}
                  className={`px-6 py-2 rounded-md transition-all duration-200 ${
                    activeTab === "support" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Support Paths
                </Button>
                <Button
                  variant={activeTab === "events" ? "default" : "ghost"}
                  onClick={() => setActiveTab("events")}
                  className={`px-6 py-2 rounded-md transition-all duration-200 ${
                    activeTab === "events" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Events & Programs
                </Button>
              </div>
            </div>
          </ContentContainer>
        </SectionContainer>

        {/* Content Section with Animation */}
        <div className="relative min-h-[500px] -mt-4">
          <AnimatePresence mode="wait">
            {activeTab === "support" && (
              <motion.div
                key="support"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <SupportPathSection />
              </motion.div>
            )}

            {activeTab === "events" && (
              <motion.div
                key="events"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Events Content - No search/filter */}
                <EventsSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ background: '#0BB8C6', color: 'white' }}>
          <BeingLagomFooter />
        </div>
      </PageLayout>
    </div>
  );
}
