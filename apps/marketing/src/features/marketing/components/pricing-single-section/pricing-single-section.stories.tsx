import type { Meta, StoryObj } from "@storybook/react-vite";

import { PricingSimpleSection } from "./pricing-single-section";

const meta = {
  title: "Marketing/Sections/PricingSimpleSection",
  component: PricingSimpleSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "top",
  },
  decorators: [
    // Showcase layout to get >= 90% similarity score in Greatfrontend challenge submission.
    (Story) => (
      <section className="flex h-screen w-screen flex-col items-center overflow-auto bg-gradient-to-b from-gray-50 to-[#d2d6db] p-4">
        <Story />
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof PricingSimpleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingSimpleSectionStory: Story = {
  render: PricingSimpleSection,
  args: {},
};
