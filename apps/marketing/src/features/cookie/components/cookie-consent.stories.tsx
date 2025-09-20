import type { Meta, StoryObj } from "@storybook/react-vite";

import { CookieConsent } from "./cookie-consent";

const meta = {
  title: "Cookie/CookieConsent",
  component: CookieConsent,
  parameters: {},
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen w-full flex-col bg-gray-200 p-4">
        <div className="mx-auto align-top">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CookieConsentStory: Story = {
  render: CookieConsent,
  args: {
    overrideShowBanner: true,
  },
};
