import type { Meta, StoryObj } from "@storybook/react-vite";

import { PricingTierSection } from "./pricing-tier-section";

const meta = {
  title: "Marketing/Sections/PricingTierSection",
  component: PricingTierSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen flex-col bg-gray-50 p-4">
        <div className="bg-white px-3 py-12 align-top md:px-4 md:py-16 lg:p-24">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof PricingTierSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingTierSectionStory: Story = {
  render: PricingTierSection,
  args: {},
};
