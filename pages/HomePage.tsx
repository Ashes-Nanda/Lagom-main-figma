import { HeroSection } from "../components/HeroSection";
import { InstitutionalCredibility } from "../components/InstitutionalCredibility";
import { PageLayout } from "../components/layout";

export function HomePage() {
  return (
    <PageLayout withTopPadding={false}>
      <HeroSection />
      <InstitutionalCredibility />
    </PageLayout>
  );
}