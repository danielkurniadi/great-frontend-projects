import type { Meta, StoryObj } from "@storybook/react-vite";

import icons from "~/assets/icons";
import { FeaturesSideImageSection } from "./features-side-img-section";
import ColorSplashImg from "../../assets/color-unsplash.png";
import GlassSplashImg from "../../assets/glass-unsplash.png";

const meta = {
  title: "Marketing/Sections/FeaturesSideImageSection",
  component: FeaturesSideImageSection,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <section className="flex h-full min-h-screen flex-col bg-gray-500 p-4">
        <div className="bg-white px-3 py-12 align-top md:px-4 md:py-16 lg:p-24">
          <Story />
        </div>
      </section>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof FeaturesSideImageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturesSideImageLeftSection: Story = {
  render: FeaturesSideImageSection,
  args: {
    features: [
      {
        Icon: icons.Hd,
        title: "5K resolution support",
        description:
          "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
      },
      {
        Icon: icons.DropletPercent,
        title: "From water to glass",
        description:
          "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
      },
      {
        Icon: icons.Rainbow,
        title: "Portrait or landscape",
        description:
          "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
      },
    ],
    sectionHeader: "High quality images",
    sectionTitle: "For designers, by designers",
    sectionSubtitle:
      "Unleash boundless creativity with a large repository of images optimized for designers",
    splashImgSide: "right" as const,
    splashImgSrc: GlassSplashImg,
  },
};

export const FeaturesSideImageRightSection: Story = {
  render: FeaturesSideImageSection,
  args: {
    features: [
      {
        Icon: icons.Rocket,
        title: "Faster downloads",
        description:
          "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.",
      },
      {
        Icon: icons.P2P,
        title: "Convenience for teams",
        description:
          "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
      },
      {
        Icon: icons.CopyRight,
        title: "Royalty-free licensing",
        description:
          "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
      },
    ],
    sectionHeader: "Best-in class support",
    sectionTitle: "Convenience and licensing that empowers",
    sectionSubtitle:
      "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
    splashImgSide: "left" as const,
    splashImgSrc: ColorSplashImg,
  },
};
