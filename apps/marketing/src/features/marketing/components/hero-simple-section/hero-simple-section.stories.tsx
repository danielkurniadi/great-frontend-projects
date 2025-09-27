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
      <section className="flex h-full min-h-screen flex-col bg-gray-500 p-4">
        <div className="px-4 py-12 align-top md:px-4 md:py-16 lg:p-24">
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
