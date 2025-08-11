import { SectionContainer } from "./layout/SectionContainer";

export function PartnershipSection() {
  return (
    <SectionContainer className="bg-transparent py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership and Collaborations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold mb-4">
            Working Together for Lasting Change
          </p>
          <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We believe the wellbeing of healthcare professionals is a collective
            responsibility. From hospitals and universities to community groups
            and policy leaders, our partnerships create real, measurable impact
            in mental health and wellness.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/partners/partner1.png"
            alt="Partnership collaboration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
