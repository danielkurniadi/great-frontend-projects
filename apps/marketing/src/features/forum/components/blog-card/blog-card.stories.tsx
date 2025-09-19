import type { Meta, StoryObj } from "@storybook/react-vite";

import { BlogCard } from "./blog-card";

const meta = {
  title: "Marketing/Cards/BlogCard",
  component: BlogCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "top",
  },
  decorators: [
    // Showcase layout to get >= 90% similarity score in Greatfrontend challenge submission.
    (Story) => (
      <section className="flex h-screen flex-col items-center overflow-x-auto bg-gray-200">
        <div className="mx-auto flex items-center pt-[120px] align-top">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlogCardStory: Story = {
  render: BlogCard,
  args: {},
};
