import type { Meta, StoryObj } from "@storybook/react-vite";

import { Navbar } from "./navbar";

const meta = {
  title: "Marketing/Sections/Navbar",
  component: Navbar,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="mx-auto min-h-screen w-screen bg-[#ebecf0] py-4">
        <Story />
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarStory: Story = {
  render: Navbar,
  args: {},
};
