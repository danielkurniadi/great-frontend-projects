import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeroFeatureSection } from "./hero-feature-section";

const meta = {
  title: "Marketing/Sections/HeroFeatureSection",
  component: HeroFeatureSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen flex-col bg-gray-50 p-4">
        <div className="mx-auto align-top">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof HeroFeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroFeatureSectionStory: Story = {
  render: HeroFeatureSection,
  args: {},
};
