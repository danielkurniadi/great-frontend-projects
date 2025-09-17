import {
  FeaturesSideColorImageSection,
  FeaturesSideGlassImageSection,
} from "~/features/marketing/components/features-side-img-section/features-side-img-section";

export const FeaturesGlassSectionShowcase = () => {
  return (
    <section className="mx-auto max-w-[1440px] bg-gray-50 p-4">
      <FeaturesSideGlassImageSection />
    </section>
  );
};

export const FeaturesColorSectionShowcase = () => {
  return (
    <section className="mx-auto max-w-[1440px] bg-gray-50 p-4">
      <FeaturesSideColorImageSection />
    </section>
  );
};
