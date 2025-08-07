import { useState } from "react";
import { SupportPathCards } from "../components/SupportPathCards";
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

export function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters] = useState<Filter[]>([]);

  // Convert filters to the format expected by EventsSection
  const activeFilters = filters.map((filter) => ({
    groupId: filter.type.toLowerCase(),
    optionId: filter.value[0] || "",
    label: filter.value[0] || "",
  }));

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      <PageLayout withTopPadding={false} className="bg-transparent">
      {/* Support Path Cards */}
      <SupportPathCards />

      {/* Events Directory with Search and Filters */}
      <SectionContainer
        spacing="lg"
        size="xl"
        aria-label="Events directory and wellness programs"
      >
        <ContentContainer
          spacing="normal"
          centerContent={true}
          preventOverflow={true}
        >
          {/* Search and Filter Header */}
          <div className="mb-8 space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Wellness Events & Programs
              </h2>
              <p className="text-xl text-muted-foreground">
                Find events and programs designed specifically for healthcare
                workers
              </p>
            </div>

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
      <div style={{ background: '#0BB8C6', color: 'white' }}>
        <BeingLagomFooter />
      </div>
    </PageLayout>
    </div>
  );
}
