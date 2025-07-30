import Faq from "../components/ui/faq";
import { PageLayout, SectionContainer, ContentContainer } from "../components/layout";

export function FAQPage() {
  return (
    <PageLayout withTopPadding={true} spacing="md">
      <SectionContainer 
        spacing="lg" 
        size="xl"
        aria-label="Frequently Asked Questions"
      >
        <ContentContainer 
          spacing="normal" 
          centerContent={true}
          preventOverflow={true}
        >
          <Faq />
        </ContentContainer>
      </SectionContainer>
    </PageLayout>
  );
} 