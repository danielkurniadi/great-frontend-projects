import { RiCheckLine } from "@remixicon/react";

export const PricingSimpleSection = () => {
  const listItemTexts = [
    "128 available credits for all images",
    "Up to 3 users",
    "24 hour response time",
    "Advanced analytics",
  ];

  return (
    <section className="flex grow flex-col justify-center self-stretch rounded-md bg-white">
      <div className="flex flex-col items-center self-stretch px-3 py-12 md:px-4 md:py-16 lg:p-24">
        <div className="flex flex-col items-center gap-16 self-stretch">
          <div className="flex flex-col items-center self-stretch">
            <div className="flex flex-col gap-5 self-stretch md:px-8 lg:px-40">
              <div className="flex flex-col justify-center gap-3 self-stretch md:px-10 lg:px-10">
                <span className="text-center text-base font-semibold text-indigo-700">
                  One time purchase
                </span>
                <span className="text-center text-3xl font-semibold text-neutral-900 md:text-5xl lg:text-5xl">
                  Pay as you need
                </span>
              </div>
              <span className="text-center text-lg font-normal text-neutral-600 md:text-xl lg:text-xl">
                We offer one-time purchases with credits, for you to use as needed. Always active.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 self-stretch lg:flex-row lg:items-center">
            <div className="flex w-fit grow flex-col gap-8 lg:w-[311px] lg:gap-12">
              <div className="flex flex-col gap-8 self-stretch md:gap-16">
                <span className="text-2xl font-semibold text-neutral-900 md:text-4xl lg:text-4xl">
                  Unlock creativity once, enjoy forever
                </span>
                <div className="flex flex-col gap-5 self-stretch px-4">
                  {listItemTexts.map((text, idx) => (
                    <div
                      key={`items-li-check-${idx}`}
                      className="flex items-center gap-3 self-stretch"
                    >
                      <div className="h-6 w-6 rounded-full bg-indigo-50">
                        <RiCheckLine size={24} className="text-indigo-500" />
                      </div>
                      <div className="flex grow flex-col justify-center gap-3">
                        <span className="self-stretch text-lg font-normal text-neutral-600">
                          {text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={
                "flex flex-col items-center justify-center gap-8 lg:w-[487px] " +
                "rounded-lg bg-white p-8 outline-1 outline-neutral-200"
              }
            >
              <div className="flex flex-col items-center justify-center gap-2 self-stretch">
                <div className="flex items-center rounded-full border border-solid border-green-200 bg-green-50 px-2.5 py-1">
                  <span className="text-center text-sm font-normal text-green-700">Popular</span>
                </div>
                <span className="text-center text-5xl font-bold text-neutral-900 lg:text-6xl">
                  $699
                </span>
                <span className="text-center text-sm font-normal text-neutral-600">
                  Prices in USD
                </span>
              </div>
              <div className="flex flex-col justify-center self-stretch px-8">
                <span className="text-center text-xl font-normal text-neutral-900">
                  Pay once, use it forever. No strings attached.
                </span>
              </div>
              <div className="flex h-12 items-center justify-center gap-1.5 self-stretch rounded bg-indigo-700 px-5 py-3">
                <div className="flex items-center justify-center px-0.5">
                  <span className="text-base font-medium text-white">Buy now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
