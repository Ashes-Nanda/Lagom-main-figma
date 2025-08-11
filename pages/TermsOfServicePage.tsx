import { PageLayout } from "../components/layout/PageLayout";

export function TermsOfServicePage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using Being.Lagom services
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Clinical Care and Duty of Care
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Trauma-Informed Practice</h3>
                  <p className="leading-relaxed">
                    All mental health and peer support services are provided by qualified professionals in compliance with professional codes of conduct, licensing regulations, and established clinical protocols. Services are trauma-informed, evidence-based, and respect the autonomy and dignity of beneficiaries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Non-Discrimination and Accessibility</h3>
                  <p className="leading-relaxed">
                    Being.Lagom does not discriminate on the basis of race, religion, gender, sexual orientation, disability, or mental health status in the provision of services, employment, volunteering, or recruitment. Accessibility and reasonable accommodations are provided to individuals with disabilities or special needs, consistent with Singapore's legal framework and international best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Safe Practice and Reporting</h3>
                  <p className="leading-relaxed">
                    All staff and volunteers are trained on safeguarding, crisis response, and mandatory reporting duties as applicable (e.g., reporting of abuse, imminent harm, or criminal conduct). Any suspected breach of law or misconduct is promptly reported to authorities.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                External Reporting and Accountability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Complaints and Whistleblowing</h3>
                  <p className="leading-relaxed">
                    Clear, accessible avenues exist for any party to report compliance concerns, misconduct, or grievances: anonymously if preferred. Whistleblowers are protected by non-retaliation guarantees.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Transparency</h3>
                  <p className="leading-relaxed">
                    Annual reports, financial statements, audit findings, and impact data are published publicly except where confidentiality and data protection laws require redaction.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Jurisdiction-Specific Statements
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Being.Lagom abides by the Charities Act, Mental Capacity Act, Employment Act, PDPA, Healthcare Services Act, and other applicable Singapore statutes and regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For cross-border operations, Being.Lagom reviews and incorporates jurisdiction-specific requirements to ensure legal operation internationally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these terms of service, contact: <a href="mailto:admin@beinglagom.com" className="text-primary hover:underline">admin@beinglagom.com</a>
              </p>
            </section>

            <section className="bg-[#FFFBF5] p-6 rounded-lg border border-gray-200">
              <p className="text-muted-foreground leading-relaxed italic">
                These terms of service are reviewed annually and updated whenever material changes occur to ensure ongoing legal adequacy and operational transparency.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}