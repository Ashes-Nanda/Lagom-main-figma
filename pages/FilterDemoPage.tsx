import { ComboboxDemo } from "../components/ui/filter-demo";
import { PageLayout, SectionContainer, ContentContainer } from "../components/layout";

export function FilterDemoPage() {
  return (
    <PageLayout withTopPadding={true} spacing="md">
      <SectionContainer 
        spacing="lg" 
        size="xl"
        aria-label="Advanced Filter System Demo"
      >
        <ContentContainer 
          spacing="normal" 
          centerContent={true}
          preventOverflow={true}
        >
          <div className="mb-8 space-y-4">
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Advanced Filter System Demo
              </h1>
              <p className="text-xl text-muted-foreground">
                Test the new advanced filter system with mental health platform specific filters
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
                <p className="text-muted-foreground mb-6">
                  This advanced filter system includes:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• <strong>Category:</strong> Burnout, Resilience, Sleep, Mindfulness, Meditation, Breathing, Stories, Community</li>
                  <li>• <strong>Type:</strong> Articles, Podcasts, Videos, Quick Tools</li>
                  <li>• <strong>Duration:</strong> Under 10 minutes, 10-30 minutes, 30+ minutes</li>
                  <li>• <strong>Author:</strong> Vyshnavi, Shehani, Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez, Dr. Lisa Thompson, Dr. James Wilson</li>
                  <li>• <strong>Location:</strong> Virtual Event, California, Chicago, IL, San Francisco, CA</li>
                  <li>• <strong>Cost:</strong> Free, Paid</li>
                </ul>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Try the Filter System</h3>
                  <ComboboxDemo />
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>
    </PageLayout>
  );
} 