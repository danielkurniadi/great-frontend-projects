import { RiCheckLine } from "@remixicon/react";
import prismImg from "~/assets/landing/hero-feature-prism.png";

export const HeroFeatureSection = () => {
  return (
    <section className="flex flex-col gap-12 rounded-lg bg-white px-4 py-12 md:py-16 lg:flex-row lg:p-24">
      <div className="flex flex-none flex-col items-start justify-center gap-8 md:gap-16 lg:w-[480px]">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">Premium abstract images</h1>
        <ul className="flex flex-col gap-5">
          <li>
            <div className="flex items-center justify-start gap-3">
              <div className="rounded-full bg-indigo-50">
                <RiCheckLine size={24} className="text-indigo-500" />
              </div>
              <span className="text-lg font-normal text-neutral-500">
                Minimum 5K image resolution
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <div className="rounded-full bg-indigo-50">
                <RiCheckLine size={24} className="text-indigo-500" />
              </div>
              <span className="text-lg font-normal text-neutral-500">
                Various format variants available
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <div className="rounded-full bg-indigo-50">
                <RiCheckLine size={24} className="text-indigo-500" />
              </div>
              <span className="text-lg font-normal text-neutral-500">Retina display support</span>
            </div>
          </li>
        </ul>
        <div className="flex w-full justify-start gap-4 text-base md:flex-row-reverse md:justify-end md:text-lg lg:items-center lg:justify-end">
          <button className="w-[147px] self-stretch rounded-md border-2 bg-indigo-700 px-5 py-3 text-white shadow-indigo-500 md:w-[213px] md:px-6 md:py-4">
            See pricing
          </button>
          <button className="w-[147px] self-stretch rounded-md border-2 border-gray-50 bg-white px-5 py-3 shadow md:w-[213px] md:px-6 md:py-4">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-full flex-none p-2 lg:min-w-[380px] lg:max-w-[700px]">
        <img
          className="object-cover"
          src={prismImg}
          alt="Premium abstract prism image showcasing high-quality visual content"
        />
      </div>
    </section>
  );
};
