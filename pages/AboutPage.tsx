import { AboutSection } from "../components/AboutSection";
import { PageLayout } from "../components/layout";
import { BeingLagomFooter } from "../components/ui/footer";
import { BrainwaveDivider } from "../components/ui/BrainwaveDivider";

export function AboutPage() {
  return (
    <PageLayout withTopPadding={false} className="pt-20">
      <AboutSection />
      
      {/* Coming Soon Section */}
      <div className="bg-[#FFFBF5] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BrainwaveDivider />
            
            <div className="text-center mt-8 mb-4">
              <div className="text-sm text-muted-foreground/70 italic leading-relaxed space-y-3">
                <p className="font-medium text-primary/60 mb-4">Coming Soon</p>
                
                <div className="text-left max-w-2xl mx-auto space-y-2">
                  <p className="font-semibold text-muted-foreground/80">How we show up:</p>
                  <p>Instead of just headshots and job titles, every profile includes:</p>
                  
                  <ul className="space-y-1 ml-4">
                    <li><strong>My Why:</strong> the moment they knew they had to be part of Being.Lagom</li>
                    <li><strong>Why do you want to join Lagom</strong></li>
                    <li><strong>In & Out of Scrubs:</strong> one portrait in work gear, one in everyday life — because we're whole humans, not just our roles</li>
                    <li><strong>Where I Stand:</strong> a pin on our global map showing where they work and the communities they serve</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BeingLagomFooter />
    </PageLayout>
  );
}