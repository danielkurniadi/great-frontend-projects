import { HeroFeatureSection } from "~/pages/features/sections/hero-feature-section";

export const HeroFeatureSectionShowcase = () => {
  return (
    <section className="flex h-full flex-col bg-gray-50 p-4">
      <div className="mx-auto overflow-auto align-top">
        <HeroFeatureSection />
      </div>
    </section>
  );
};
