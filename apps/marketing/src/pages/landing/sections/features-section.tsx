/// <reference types="vite-plugin-svgr/client" />
// import React from "react";

import IconHd from "~/assets/icons/hd.svg?react";
import IconDropPercent from "~/assets/icons/drop-percent.svg?react";
import IconRainbow from "~/assets/icons/rainbow.svg?react";
import { cn } from "~/lib/utils";

type FeatureData = {
  Icon: typeof IconHd;
  title: string;
  description: string;
};

const features: FeatureData[] = [
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
];

export type FeatureSectionProps = {
  features: FeatureData[];
  splashImgSide: "left" | "right";
  splashImgSrc: string;
};

const FeaturesContent = ({ features, splashImgSide, splashImgSrc }: FeatureSectionProps) => {
  return (
    <div className={cn("flex", splashImgSide === "left" ? "md: flex-row-reverse" : "flex-row")}>
      <div className="flex flex-col">
        {features.map((feature, idx) => {
          return (
            <div key={`ft-li-${idx}`} className="">
              <div className="circle h-12 w-12 items-start justify-between rounded-full">
                {<feature.Icon className="self-center object-cover" />}
              </div>
              <div className="flex flex-col">
                <span>{feature.title}</span>
                <span>{feature.description}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-auto">
        <img className="object-cover" src={splashImgSrc} alt="/" />
      </div>
    </div>
  );
};

export const FeaturesSection = (props: FeatureSectionProps) => {
  return (
    <section>
      <div className="header">
        <h5 className="text-indigo-600">High quality images</h5>
        <h2 className="">For designers, by designers</h2>
        <span>
          Unleash boundless creativity with a large repository of images optimized for designers
        </span>
      </div>
      <FeaturesContent {...props} />
    </section>
  );
};
