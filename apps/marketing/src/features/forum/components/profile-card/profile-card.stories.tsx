import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProfileCard } from "./profile-card";

const meta = {
  title: "Marketing/Cards/ProfileCard",
  component: ProfileCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "top",
  },
  decorators: [
    // Showcase layout to get >= 90% similarity score in Greatfrontend challenge submission.
    (Story) => (
      <section className="flex h-screen flex-col items-center bg-gray-200">
        <div className="mx-auto flex items-center overflow-x-auto py-[200px] align-top">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCardStory: Story = {
  render: ProfileCard,
  args: {},
};
