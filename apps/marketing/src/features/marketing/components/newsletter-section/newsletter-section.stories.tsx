import type { Meta, StoryObj } from "@storybook/react-vite";

import { NewsletterSection } from "./newsletter-section";

const meta = {
  title: "Marketing/Sections/NewsletterSection",
  component: NewsletterSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen justify-center bg-gray-50 p-4">
        <div className="rounded-md bg-white shadow-sm lg:max-h-[832px] lg:w-[1408px]">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof NewsletterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewsletterSectionStory: Story = {
  render: NewsletterSection,
  args: {},
};
