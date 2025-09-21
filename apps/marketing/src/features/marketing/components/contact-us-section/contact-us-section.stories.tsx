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
      <section className="h-full min-h-screen w-full bg-gray-50 p-3">
        <div className="lg:pt-18 w-full rounded bg-white p-1 md:pt-10">
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
