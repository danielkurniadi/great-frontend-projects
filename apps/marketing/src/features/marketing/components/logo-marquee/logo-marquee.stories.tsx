import type { Meta, StoryObj } from "@storybook/react-vite";

import { LogoMarqueeSection } from "./logo-marquee";

const meta = {
  title: "Marketing/Sections/LogoMarquee",
  component: LogoMarqueeSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="min-w-screen flex h-screen w-full flex-col items-center justify-center p-4">
        <Story />
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof LogoMarqueeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoMarqueeSectionStory: Story = {
  render: LogoMarqueeSection,
  args: {},
};
