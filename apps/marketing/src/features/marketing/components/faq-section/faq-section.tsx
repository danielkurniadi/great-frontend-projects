import { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "@remixicon/react";
import { cn } from "~/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQSectionProp = {
  items: FAQItem[];
};

export const ExampleFAQItems = [
  {
    question: "What types of images are available on your platform?",
    answer:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    question: "How can I access and download images from your platform?",
    answer:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    question: "Do you offer free images, or is there a subscription required?",
    answer:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    question: "What payment methods do you accept for subscriptions?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    question: "Can I cancel or modify my subscription at any time?",
    answer:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    question: "How frequently do you update your image collection?",
    answer:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

const FAQAccordion = ({ item, last = false }: { item: FAQItem; last?: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={cn(
        "flex w-full flex-col items-start gap-2",
        !last && "border-b border-neutral-300 pb-7",
      )}
    >
      <button
        className="flex w-full items-start justify-between gap-4 text-left rtl:text-right"
        type="button"
        onClick={() => {
          setIsOpen((curr) => !curr);
        }}
      >
        <h2 className="w-full grow text-lg font-medium text-neutral-900">{item.question}</h2>
        {isOpen ? (
          <RiIndeterminateCircleLine size={24} className="h-6 w-6 grow-0 text-neutral-400" />
        ) : (
          <RiAddCircleLine size={24} className="h-6 w-6 grow-0 text-neutral-400" />
        )}
      </button>
      <div
        className={cn(
          "w-full pr-10 text-left text-base font-normal text-neutral-600 rtl:text-right",
          !isOpen && "hidden",
        )}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQSection = ({ items: questions = ExampleFAQItems }: FAQSectionProp) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="flex w-full flex-col items-center justify-center gap-5 rounded-md text-center">
          <h1 className="self-stretch text-3xl font-semibold md:text-5xl lg:text-5xl">
            Frequently asked questions
          </h1>
          <h4 className="self-stretch text-lg font-normal text-neutral-600 md:text-xl lg:text-xl">
            Get all your questions answered
          </h4>
        </div>
        <div className="flex w-full flex-col gap-7 self-stretch">
          {questions.map((item, idx) => {
            return (
              <FAQAccordion
                key={`faq-accordion-${idx}`}
                item={item}
                last={idx === questions.length - 1}
              />
            );
          })}
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-neutral-300 p-4 align-middle shadow-lg shadow-neutral-300 md:flex-row md:gap-12 md:p-8">
            <div className="grow-1 flex flex-col items-start justify-start gap-2 text-left">
              <h4 className="text-xl font-semibold">Can't find the answer you're looking for?</h4>
              <span className="text-base font-normal text-neutral-600">
                Reach out to our{" "}
                <a href="/support" className="text-indigo-700">
                  customer support team.
                </a>
              </span>
            </div>
            <div className="flex w-full md:w-36 md:grow-0">
              <button className="w-full rounded-md bg-indigo-700 px-5 py-3 text-base text-white shadow-sm shadow-neutral-400 hover:bg-indigo-800 focus:ring-1 focus:ring-neutral-300">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
