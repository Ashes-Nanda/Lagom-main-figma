import { AboutSection } from "../components/AboutSection";
import { PageLayout } from "../components/layout";
import { BeingLagomFooter } from "../components/ui/footer";

export function AboutPage() {
  return (
    <PageLayout withTopPadding={false} className="pt-20">
      <AboutSection />
      <BeingLagomFooter />
    </PageLayout>
  );
}