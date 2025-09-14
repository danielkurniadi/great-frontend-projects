import { HeroFeatureSection } from "~/pages/features/hero-feature-section";

export const HeroFeatureSectionShowcase = () => {
  return (
    <section className="mt-8 flex h-full flex-col bg-white">
      <div className="mx-auto overflow-auto align-top">
        <HeroFeatureSection />
      </div>
    </section>
  );
};
