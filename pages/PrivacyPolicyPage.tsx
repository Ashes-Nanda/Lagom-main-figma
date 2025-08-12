import { PageLayout } from "../components/layout/PageLayout";

export function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              How Being.Lagom protects and manages your personal information
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Data Privacy, Confidentiality, and Security
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Compliance Standards</h3>
                  <p className="leading-relaxed">
                    All personal data collected, processed, and stored by Being.Lagom is subject to the Personal Data Protection Act (PDPA) of Singapore and any applicable international data privacy laws (such as GDPR or HIPAA, if relevant to global operations).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Use and Collection of Personal Data</h3>
                  <p className="leading-relaxed">
                    Information (including medical, contact, and other sensitive data) is collected only for legitimate purposes necessary to provide support, conduct research, or meet legal obligations. Data subjects are informed of the purpose and scope at the point of collection.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Data Security</h3>
                  <p className="leading-relaxed">
                    Appropriate technical, administrative, and physical safeguards are maintained to protect personal data against unauthorized access, loss, alteration, or disclosure. Access is restricted to authorized personnel only.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Retention and Deletion</h3>
                  <p className="leading-relaxed">
                    Personal data is retained only as long as necessary and is securely deleted thereafter, in accordance with relevant laws and internal retention policies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Data Subject Rights</h3>
                  <p className="leading-relaxed">
                    Individuals have the right to access, amend, or request deletion of their data, subject to applicable law. Procedures are in place for users to exercise these rights or lodge complaints with relevant authorities.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding data privacy or to exercise your data rights, contact: <a href="mailto:admin@beinglagom.com" className="text-primary hover:underline">admin@beinglagom.com</a>
              </p>
            </section>

            <section className="bg-[#fffbf5] p-6 rounded-lg border border-gray-200">
              <p className="text-muted-foreground leading-relaxed italic">
                This privacy policy is reviewed annually and updated whenever material changes occur to ensure ongoing legal adequacy and operational transparency.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}