import { useState } from "react";
import { SupportPathSection } from "../components/SupportPathSection";
import { EventsSection } from "../components/EventsSection";
import {
  PageLayout,
  SectionContainer,
  ContentContainer,
} from "../components/layout";
import { SearchBar } from "../components/ui/SearchBar";
import { ComboboxDemo } from "../components/ui/filter-demo";
import { Filter } from "../components/ui/filters";
import { BeingLagomFooter } from "../components/ui/footer";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters] = useState<Filter[]>([]);
  const [activeTab, setActiveTab] = useState<"support" | "events">("support");

  // Convert filters to the format expected by EventsSection
  const activeFilters = filters.map((filter) => ({
    groupId: filter.type.toLowerCase(),
    optionId: filter.value[0] || "",
    label: filter.value[0] || "",
  }));

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      <PageLayout withTopPadding={false} className="bg-transparent">
        {/* Header Section */}
        <SectionContainer spacing="sm" size="xl">
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
                <SectionContainer spacing="lg" size="xl">
                  <ContentContainer spacing="normal" centerContent={true} preventOverflow={true}>
                    {/* Search and Filter Header */}
                    <div className="mb-8 space-y-4">
                      {/* Search Bar */}
                      <div className="max-w-2xl mx-auto">
                        <SearchBar
                          placeholder="Search events, workshops, support groups..."
                          value={searchQuery}
                          onChange={setSearchQuery}
                          onClear={handleSearchClear}
                          className="w-full"
                        />
                      </div>

                      {/* Advanced Filter System */}
                      <div className="flex flex-col gap-4">
                        <ComboboxDemo />
                      </div>
                    </div>

                    {/* Events Content */}
                    <EventsSection
                      searchQuery={searchQuery}
                      activeFilters={activeFilters}
                    />
                  </ContentContainer>
                </SectionContainer>
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
