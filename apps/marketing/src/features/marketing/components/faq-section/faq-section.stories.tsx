import type { Meta, StoryObj } from "@storybook/react-vite";

import { FAQSection, ExampleFAQItems } from "./faq-section";

const meta = {
  title: "Marketing/Sections/FAQSection",
  component: FAQSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen justify-start bg-gray-50 p-4">
        <div className="md:w-3xl rounded-md bg-white shadow-sm lg:w-full">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof FAQSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewsletterSectionStory: Story = {
  render: FAQSection,
  args: { items: ExampleFAQItems },
};
