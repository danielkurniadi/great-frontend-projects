import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContactUsSection } from "./contact-us-section";

const meta = {
  title: "Marketing/Sections/ContactUsSection",
  component: ContactUsSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="h-full min-h-screen w-full bg-gray-50 p-4">
        <div className="w-full rounded bg-white px-3 py-12 xl:p-24">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof ContactUsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactUsSectionStory: Story = {
  render: ContactUsSection,
  args: {},
};
