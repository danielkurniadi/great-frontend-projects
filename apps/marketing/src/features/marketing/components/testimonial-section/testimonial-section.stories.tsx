import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestimonialSection } from "./testimonial-section";

const meta = {
  title: "Marketing/Sections/TestimonialSection",
  component: TestimonialSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="mx-auto h-full w-screen px-4 pb-12 pt-12 align-top md:px-4 md:pt-16 lg:px-24 lg:pt-28">
        <Story />
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof TestimonialSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestimonialSectionStory: Story = {
  render: TestimonialSection,
  args: {},
};
