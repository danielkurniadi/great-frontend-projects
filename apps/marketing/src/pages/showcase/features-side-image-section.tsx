import {
  FeaturesSideColorImageSection,
  FeaturesSideGlassImageSection,
} from "~/pages/landing/sections/features-side-image-section";

export const FeaturesGlassSectionShowcase = () => {
  return (
    <section className="lg:max-[1440px] mx-auto p-4">
      <FeaturesSideGlassImageSection />
    </section>
  );
};

export const FeaturesColorSectionShowcase = () => {
  return (
    <section className="lg:max-[1440px] mx-auto p-4">
      <FeaturesSideColorImageSection />
    </section>
  );
};
