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

// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/your-framework",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // Storybook Composition. See https://storybook.js.org/docs/sharing/storybook-composition
  refs: (_, { configType }) => {
    const marketingStorybookUrl =
      configType === "DEVELOPMENT" ? "http://localhost:7007" : "marketing/";
    // add more sub-storybook ...
    return {
      marketing: {
        title: "Marketing Storybook",
        url: marketingStorybookUrl,
      },
    };
  },
};

export default config;
