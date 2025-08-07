import { useState } from 'react';
import { SelfHelpResources } from "../components/SelfHelpResources";
import { PageLayout, SectionContainer, ContentContainer } from "../components/layout";
import { SearchBar } from "../components/ui/SearchBar";
import { ComboboxDemo } from "../components/ui/filter-demo";
import { Filter } from "../components/ui/filters";
import { BeingLagomFooter } from "../components/ui/footer";

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filter[]>([]);

  // Convert filters to the format expected by SelfHelpResources
  const activeFilters = filters.map(filter => ({
    groupId: filter.type.toLowerCase(),
    optionId: filter.value[0] || '',
    label: filter.value[0] || ''
  }));

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      <PageLayout withTopPadding={false} className="bg-transparent">
      <SectionContainer 
        spacing="lg" 
        size="xl"
        aria-label="Self-help resources and mental health tools"
      >
        <ContentContainer 
          spacing="normal" 
          centerContent={true}
          preventOverflow={true}
        >
          {/* Search and Filter Header */}
          <div className="mb-8 space-y-4">
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Self-Help Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                Curated tools and content to support your mental wellness journey
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar
                placeholder="Search resources, articles, podcasts, and videos..."
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

          {/* Resources Content */}
          <SelfHelpResources 
            searchQuery={searchQuery}
            activeFilters={activeFilters}
            onClearSearchAndFilters={() => {
              setSearchQuery('');
              setFilters([]);
            }}
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