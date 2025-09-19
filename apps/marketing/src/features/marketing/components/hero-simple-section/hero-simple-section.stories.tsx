import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeroSection } from "./hero-simple-section";

const meta = {
  title: "Marketing/Sections/HeroSimpleSection",
  component: HeroSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen flex-col bg-gray-50 p-4">
        <div className="align-top">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroSimpleSectionStory: Story = {
  render: HeroSection,
  args: {},
};
