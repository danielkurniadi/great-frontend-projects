import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    className: "bg-[#555ab9] text-white",
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    className: "bg-transparent text-[#333] ring-1 ring-inset ring-black/15",
    label: "Secondary",
  },
};

export const Large: Story = {
  args: {
    className: "py-3 px-6 text-base",
    label: "Large",
  },
};

export const Small: Story = {
  args: {
    className: "py-2 px-4 text-sm",
    label: "Small",
  },
};
