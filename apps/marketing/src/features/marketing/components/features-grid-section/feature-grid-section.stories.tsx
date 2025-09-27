import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeaturesGridSection } from "./features-grid-section";

const meta = {
  title: "Marketing/Sections/FeaturesGridSection",
  component: FeaturesGridSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex min-h-screen w-full flex-col bg-gray-500 p-4">
        <div className="px-3 py-12 align-top md:px-4 md:py-16 lg:p-24">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof FeaturesGridSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturesGridSectionStory: Story = {
  render: FeaturesGridSection,
  args: {},
};
