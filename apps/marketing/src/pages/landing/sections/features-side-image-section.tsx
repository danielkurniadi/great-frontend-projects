/// <reference types="vite-plugin-svgr/client" />

import ColorSplashImg from "~/assets/landing/color-unsplash.png";
import GlassSplashImg from "~/assets/landing/glass-unsplash.png";
import IconHd from "~/assets/icons/hd.svg?react";
import IconDropPercent from "~/assets/icons/droplet-percent.svg?react";
import IconRainbow from "~/assets/icons/rainbow.svg?react";
import IconRocket from "~/assets/icons/rocket.svg?react";
import IconP2P from "~/assets/icons/p2p-line.svg?react";
import IconCopyright from "~/assets/icons/copyright.svg?react";

import { cn } from "~/lib/utils";

export type FeatureItem = {
  Icon: typeof IconHd;
  title: string;
  description: string;
};

export type FeaturesSideImageSectionProps = {
  features: FeatureItem[];
  splashImgSide: "left" | "right";
  splashImgSrc: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionHeader: string;
};

const FeaturesSideImageBaseSection = ({
  sectionTitle,
  sectionSubtitle,
  sectionHeader,
  splashImgSide,
  splashImgSrc,
  features,
}: FeaturesSideImageSectionProps) => {
  return (
    <div className="w-full self-stretch bg-white px-3 py-12 lg:p-24">
      <div className="container mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-12 self-stretch rounded-lg lg:gap-16">
        <div className="header flex flex-col gap-5 self-stretch lg:px-40">
          <div className="flex flex-col justify-center gap-3 self-stretch lg:px-10">
            <span className="text-center text-base font-semibold text-indigo-700">
              {sectionHeader}
            </span>
            <span className="text-center text-3xl font-semibold text-neutral-900 md:text-5xl">
              {sectionTitle}
            </span>
          </div>
          <span className="text-center text-lg font-normal text-neutral-600 md:text-xl">
            {sectionSubtitle}
          </span>
        </div>

        <div
          className={cn(
            "content flex justify-between gap-12 self-stretch lg:flex-row lg:gap-8",
            splashImgSide === "right"
              ? "flex-col lg:flex-row"
              : "justify-end-safe flex-col-reverse lg:flex-row-reverse",
          )}
        >
          <div className="flex flex-col gap-10 self-stretch">
            {features.map((feature, idx) => {
              return (
                <div key={`feature-li-${idx}`} className="flex items-start gap-5">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-sm">
                    <feature.Icon className="h-6 w-6 text-indigo-700" />
                  </div>
                  <div className="flex grow flex-col justify-center gap-2 py-2.5">
                    <span className="text-lg font-semibold text-neutral-900">{feature.title}</span>
                    <span className="text-base font-normal text-neutral-600">
                      {feature.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            className="rounded-xl lg:aspect-video lg:max-h-[460px] lg:max-w-[640px]"
            src={splashImgSrc}
          />
        </div>
      </div>
    </div>
  );
};

export const FeaturesSideGlassImageSection = () => {
  const featuresSectionProps: FeaturesSideImageSectionProps = {
    features: [
      {
        Icon: IconHd,
        title: "5K resolution support",
        description:
          "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
      },
      {
        Icon: IconDropPercent,
        title: "From water to glass",
        description:
          "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
      },
      {
        Icon: IconRainbow,
        title: "Portrait or landscape",
        description:
          "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
      },
    ],
    sectionHeader: "High quality images",
    sectionTitle: "For designers, by designers",
    sectionSubtitle:
      "Unleash boundless creativity with a large repository of images optimized for designers",
    splashImgSide: "right",
    splashImgSrc: GlassSplashImg,
  };
  return <FeaturesSideImageBaseSection {...featuresSectionProps} />;
};

export const FeaturesSideColorImageSection = () => {
  const featuresSectionProps: FeaturesSideImageSectionProps = {
    features: [
      {
        Icon: IconRocket,
        title: "Faster downloads",
        description:
          "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.",
      },
      {
        Icon: IconP2P,
        title: "Convenience for teams",
        description:
          "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
      },
      {
        Icon: IconCopyright,
        title: "Royalty-free licensing",
        description:
          "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
      },
    ],
    sectionHeader: "Best-in class support",
    sectionTitle: "Convenience and licensing that empowers",
    sectionSubtitle:
      "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
    splashImgSide: "left",
    splashImgSrc: ColorSplashImg,
  };
  return <FeaturesSideImageBaseSection {...featuresSectionProps} />;
};
