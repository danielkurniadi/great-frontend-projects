import IconCircleLoop from "~/assets/icons/circle-loop.svg?react";
import IconCoinReverseLoop from "~/assets/icons/coin-reverse-loop.svg?react";
import IconCopyright from "~/assets/icons/copyright.svg?react";
import IconDownload from "~/assets/icons/download.svg?react";
import IconPaintBrush from "~/assets/icons/paint-brush.svg?react";
import IconTeam from "~/assets/icons/team.svg?react";

export type FeatureItem = {
  Icon: typeof IconCircleLoop;
  title: string;
  description: string;
};

export type FeaturesGridSectionProps = {
  features?: FeatureItem[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionHeader?: string;
};

const defaultProps: FeaturesGridSectionProps = {
  sectionSubtitle: "Premium abstract images",
  sectionTitle: "Easy access to top quality images",
  sectionHeader:
    "In a world where story telling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.",
  features: [
    {
      Icon: IconDownload,
      title: "Infinite Download",
      description:
        "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
    },
    {
      Icon: IconPaintBrush,
      title: "Purely Handcrafted",
      description:
        "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
    },
    {
      Icon: IconCopyright,
      title: "All are Under licensed",
      description:
        "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
    },
    {
      Icon: IconCoinReverseLoop,
      title: "Cancel Anytime",
      description: "Subscribe at your own pace, and cancel when you feel it's enough.",
    },
    {
      Icon: IconTeam,
      title: "Empowering for Team",
      description: "We support multiple seats at once, requiring only a single payment.",
    },
    {
      Icon: IconCircleLoop,
      title: "No Limitation",
      description:
        "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
    },
  ],
};

export const FeaturesGridSection = (props: FeaturesGridSectionProps) => {
  const { sectionTitle, sectionSubtitle, sectionHeader, features } = { ...props, ...defaultProps };

  return (
    <div className="flex flex-col gap-16 self-stretch px-3 py-12 md:px-4 md:py-16 lg:p-24">
      {/* Header part */}
      <div className="lg;px-40 flex flex-col gap-5 self-stretch md:px-10">
        <div className="flex flex-col justify-center gap-3 self-stretch px-10">
          <span className="text-center text-base font-semibold text-indigo-700">
            {sectionSubtitle}
          </span>
          <span className="text-center text-3xl font-semibold text-neutral-900 md:text-4xl lg:text-5xl">
            {sectionTitle}
          </span>
        </div>
        <span className="text-center text-lg font-normal text-neutral-600 md:text-xl">
          {sectionHeader}
        </span>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        {features?.map((feature, idx) => (
          <div
            key={`feature-grid-item-${idx}`}
            className="md:max-w-84 flex flex-none flex-col items-center gap-5 self-start lg:max-w-96"
          >
            {/* md:w-84 lg:w-96 */}
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white shadow-sm">
              <feature.Icon
                key={`feature-grid-item-icon-${idx}`}
                className="h-6 w-6 text-indigo-700"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 self-stretch">
              <span className="text-center text-xl font-semibold text-neutral-900">
                {feature.title}
              </span>
              <span className="text-center text-base font-normal text-neutral-600">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
