import { PageLayout } from "../components/layout/PageLayout";

export function CompliancePage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Compliance & Legal Statement
            </h1>
            <p className="text-xl text-muted-foreground">
              Being.Lagom's commitment to legal compliance, privacy, and ethical governance
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Legal and Regulatory Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Being.Lagom is committed to full compliance with all applicable laws, regulations, and best practices governing non-profit mental health and healthcare organizations, both in Singapore and internationally. The organization's compliance approach is designed to protect beneficiaries, staff, volunteers, donors, and stakeholders, ensuring the highest legal and ethical standards in all operations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Board Governance and Oversight
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Governance Structure</h3>
                  <p className="leading-relaxed">
                    Being.Lagom is governed by an independent Board of Directors, with clearly defined roles, accountability, and powers as stipulated in its bylaws. All Directors and Officers are required to act in good faith, exercising due diligence, loyalty, and care in carrying out their duties for the public benefit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Regular Review</h3>
                  <p className="leading-relaxed">
                    Bylaws and internal policies are regularly reviewed and updated to remain consistent with evolving legal requirements and the organization's mission.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Ethics and Conflict of Interest</h3>
                  <p className="leading-relaxed">
                    A strict code of ethics prohibits conflicts of interest. Board members, staff, and volunteers must disclose potential conflicts and recuse themselves from related decision-making.
                  </p>
                </div>
              </div>
            </section>



            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Financial Controls and Transparency
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Financial Management</h3>
                  <p className="leading-relaxed">
                    Being.Lagom maintains robust financial controls, segregation of duties, and annual independent audits. All charitable funds are used strictly in accordance with donors' intentions and for the public benefit, with transparent reporting on use of funds.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Tax and Registration</h3>
                  <p className="leading-relaxed">
                    The organization maintains all required charity/non-profit registrations, tax filings, and renewals as mandated by the Commissioner of Charities and relevant agencies in all jurisdictions of operation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Fundraising Compliance</h3>
                  <p className="leading-relaxed">
                    All fundraising and donation activities comply with the Charities Act, fund solicitation regulations, AML/CFT requirements, and industry best practices. Donors' information is protected, and data is never sold or used for unauthorized purposes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Human Resources and Volunteer Management
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Equal Opportunity Employment</h3>
                  <p className="leading-relaxed">
                    Employment, volunteering, and internship decisions are made in accordance with Singapore employment law and anti-discrimination statutes. Reasonable accommodations are made for staff with disabilities or mental health conditions, and support resources are provided.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Training and Supervision</h3>
                  <p className="leading-relaxed">
                    All team members, contractors, and volunteers receive appropriate training on compliance obligations, risk management, privacy, safeguarding, and ethical conduct before commencing work.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This compliance statement is reviewed annually and updated whenever material changes occur to ensure ongoing legal adequacy and operational transparency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding compliance or to report a concern, contact: <a href="mailto:admin@beinglagom.com" className="text-primary hover:underline">admin@beinglagom.com</a>
              </p>
            </section>

            <section className="bg-muted/50 p-6 rounded-lg">
              <p className="text-muted-foreground leading-relaxed italic">
                This document embodies Being.Lagom's unwavering dedication to legal compliance, privacy, ethical governance, and accountable service to all communities. The organization's compliance standards guide daily operations, crisis management, and future planning, as a matter of legal obligation and moral conviction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}