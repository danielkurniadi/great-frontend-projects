import { useState } from "react";
import { RiCheckLine } from "@remixicon/react";

import { cn } from "~/lib/utils";

type pricingBillingPeriod = "monthly" | "annually";

type pricingTierPlan = "basic" | "standard" | "premium";

interface PricingTierData {
  title: string;
  tierPlan: pricingTierPlan;
  description: string;
  priceMonthly: string; // stringify the price for decimal display flexibility.
  billingPeriod: pricingBillingPeriod;
  features: string[];
  isMostPopular?: boolean;
}

const pricingFeatures: Record<pricingTierPlan, string[]> = {
  basic: ["Standard quality images", "Limited to personal use", "Email support"],
  standard: [
    "Expanded library with more diverse abstract images",
    "High-resolution images available",
    "Suitable for commercial use",
    "Priority email support",
    "Advanced analytics",
  ],
  premium: [
    "Full access to the entire image library, including exclusive content",
    "Highest quality images, including premium collections",
    "Commercial and resale rights",
    "Dedicated customer support line",
    "24/7 support response time",
    "Advanced analytics and insights",
  ],
};

const monthlyPricingTiers: Record<pricingTierPlan, PricingTierData> = {
  basic: {
    title: "Basic Plan",
    tierPlan: "basic",
    description: "Access to a curated selection of abstract images",
    priceMonthly: "9.99",
    billingPeriod: "monthly",
    features: pricingFeatures.basic,
  },
  standard: {
    title: "Standard Plan",
    tierPlan: "standard",
    description: "Next-level Integrations, priced economically",
    priceMonthly: "19.99",
    billingPeriod: "monthly",
    features: pricingFeatures.standard,
    isMostPopular: true,
  },
  premium: {
    title: "Premium Plan",
    tierPlan: "premium",
    description: "Experience limitless living for power users",
    priceMonthly: "29.99",
    billingPeriod: "monthly",
    features: pricingFeatures.premium,
  },
};

const annualPricingTiers: Record<pricingTierPlan, PricingTierData> = {
  basic: {
    title: "Basic Plan",
    tierPlan: "basic",
    description: "Access to a curated selection of abstract images",
    priceMonthly: "6.99",
    billingPeriod: "annually",
    features: pricingFeatures.basic,
  },
  standard: {
    title: "Standard Plan",
    tierPlan: "standard",
    description: "Next-level Integrations, priced economically",
    priceMonthly: "15.99",
    billingPeriod: "annually",
    features: pricingFeatures.standard,
    isMostPopular: true,
  },
  premium: {
    title: "Premium Plan",
    tierPlan: "premium",
    description: "Experience limitless living for power users",
    priceMonthly: "25.99",
    billingPeriod: "annually",
    features: pricingFeatures.premium,
  },
};

const PricingTierCard = ({
  title,
  description,
  priceMonthly,
  billingPeriod,
  features,
  isMostPopular = false,
}: PricingTierData) => {
  return (
    <div
      className={cn(
        "border-1 flex w-full flex-col gap-8 rounded-lg border-neutral-200 bg-white shadow-md md:min-h-[532px] lg:h-auto",
        isMostPopular && "border-indigo-500 lg:drop-shadow-2xl",
      )}
    >
      {isMostPopular && (
        <div className="flex w-full items-center justify-center bg-indigo-50 py-4">
          <span className="self-center text-center text-xl font-bold text-indigo-700">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={cn("flex w-full flex-col gap-8 px-4 md:px-8", !isMostPopular && "pt-4 md:pt-8")}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base font-normal text-neutral-600">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={cn("flex flex-row justify-start gap-2", isMostPopular && "text-indigo-700")}
          >
            <span className="text-5xl font-semibold">{"$" + priceMonthly}</span>
            <span className="self-end text-base font-normal">{"/ month"}</span>
          </div>
          <div className="flex justify-start gap-1 align-baseline">
            <span className="text-base font-normal text-neutral-600">Billed {billingPeriod}</span>
            {billingPeriod === "annually" && (
              <span className="text-base font-normal text-neutral-600">{`($${(parseFloat(priceMonthly) * 12).toFixed(0)})`}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 self-stretch">
          {features.map((feature, idx) => {
            return (
              <div
                key={`newsletter-features-list-item-${idx}`}
                className="flex items-center gap-3 self-stretch"
              >
                <div className="h-6 w-6 rounded-full bg-indigo-50">
                  <RiCheckLine size={20} className="mx-auto my-0.5 text-indigo-500" />
                </div>
                <div className="flex grow flex-col justify-center gap-3">
                  <div className="flex flex-col justify-center gap-3 self-stretch">
                    <span className="text-base font-normal text-neutral-600">{feature}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto w-full px-4 pb-4 md:px-8 md:pb-8">
        <button
          className={cn(
            "w-full rounded-lg border border-neutral-300 bg-white px-5 py-3 text-center text-base font-medium text-neutral-900 drop-shadow-sm",
            isMostPopular && "border border-indigo-600 bg-indigo-700 text-white",
          )}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export const PricingTierSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<pricingBillingPeriod>("monthly");
  const pricingTiers = billingPeriod === "monthly" ? monthlyPricingTiers : annualPricingTiers;
  return (
    <div className="flex flex-col items-center gap-12 bg-white md:gap-16">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* HEADER */}
        <div className="flex flex-col gap-5 self-stretch md:px-10 lg:px-40">
          <div className="flex flex-col justify-center gap-3 self-stretch">
            <span className="text-center text-base font-semibold text-indigo-700">
              Pricing Tiers
            </span>
            <span className="text-center text-3xl font-semibold text-neutral-900 md:text-5xl lg:text-5xl">
              Fit for all your needs
            </span>
          </div>
          <span className="text-center text-lg font-normal text-neutral-600 md:text-xl lg:max-w-[880px]">
            Pick the plan that suits you today and step up as your demands grow - our flexible
            options have your journey mapped out.
          </span>
        </div>

        {/* TOGGLE BILLING PERIOD */}
        <div className="flex w-full justify-center gap-4 md:w-[312px] md:gap-8">
          <button
            className={cn(
              "w-full cursor-pointer self-stretch rounded-md bg-white px-4 py-[10px] text-neutral-600 hover:text-neutral-900 hover:underline hover:shadow-sm",
              billingPeriod === "monthly" && "border border-neutral-300 text-neutral-900 shadow-sm",
            )}
            onClick={() => setBillingPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            className={cn(
              "w-full cursor-pointer self-stretch rounded-md bg-white px-4 py-[10px] text-neutral-600 hover:text-neutral-900 hover:underline hover:shadow-sm",
              billingPeriod === "annually" &&
                "border border-neutral-300 text-neutral-900 shadow-sm",
            )}
            onClick={() => setBillingPeriod("annually")}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Tier Cards */}
      <div className="container flex flex-col gap-8 lg:flex-row lg:items-stretch xl:max-w-[1216px]">
        {[pricingTiers.basic, pricingTiers.standard, pricingTiers.premium].map((pricing, idx) => (
          <PricingTierCard
            key={`pricing-tier-section-card-${pricing.tierPlan}-${idx}`}
            {...pricing}
          />
        ))}
      </div>
    </div>
  );
};
