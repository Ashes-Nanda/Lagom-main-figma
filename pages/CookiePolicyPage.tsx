import { PageLayout } from "../components/layout/PageLayout";

export function CookiePolicyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              How Being.Lagom uses cookies and similar technologies
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Risk Management and Continuous Improvement
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Enterprise Risk Management</h3>
                  <p className="leading-relaxed">
                    Risks are identified, assessed, and managed proactively throughout the organization. Policies and protocols for crisis management, incident reporting, and business continuity are regularly tested and reviewed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Legal Counsel and Advisory</h3>
                  <p className="leading-relaxed">
                    Being.Lagom consults regularly with qualified legal counsel, compliance officers, and external advisors to ensure up-to-date compliance with all relevant statutory and regulatory requirements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Data Security and Technology
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Being.Lagom uses cookies and similar technologies to enhance user experience, analyze website performance, and ensure security. All data collection through these technologies complies with applicable privacy laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Users can manage cookie preferences through their browser settings. Essential cookies required for website functionality cannot be disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Updates and Further Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This cookie policy is reviewed annually and updated whenever material changes occur to ensure ongoing legal adequacy and operational transparency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding cookies or to report a concern, contact: <a href="mailto:admin@beinglagom.com" className="text-primary hover:underline">admin@beinglagom.com</a>
              </p>
            </section>

            <section className="bg-[#FFFBF5] p-6 rounded-lg border border-gray-200">
              <p className="text-muted-foreground leading-relaxed italic">
                This document embodies Being.Lagom's commitment to transparency in data collection and user privacy protection through responsible use of web technologies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}