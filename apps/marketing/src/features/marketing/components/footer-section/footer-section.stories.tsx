import type { Meta, StoryObj } from "@storybook/react-vite";

import { FooterSection } from "./footer-section";

const meta = {
  title: "Marketing/Sections/FooterSection",
  component: FooterSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen justify-start bg-gray-50 p-4">
        <div className="mx-auto w-full rounded-md bg-white shadow-sm md:px-8 md:py-16">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof FooterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterSectionStory: Story = {
  render: FooterSection,
  args: {},
};
