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
      <section className="flex min-h-screen w-full flex-col bg-gray-50 p-4">
        <div className="align-top">
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
