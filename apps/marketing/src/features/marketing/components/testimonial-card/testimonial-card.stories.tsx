import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestimonialCard } from "./testimonial-card";

const meta = {
  title: "Marketing/Cards/TestimonialCard",
  component: TestimonialCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "top",
  },
  decorators: [
    // Showcase layout to get >= 90% similarity score in Greatfrontend challenge submission.
    (Story) => (
      <section className="h-screen w-screen bg-gray-200">
        <div className="mx-auto flex w-[340px] items-center overflow-x-auto py-[200px] align-top">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestimonialCardStory: Story = {
  render: TestimonialCard,
  args: {},
};
