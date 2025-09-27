import { RiCheckLine } from "@remixicon/react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { NewsletterToast } from "./newsletter-toast";
import newsletterImg from "~/features/marketing/assets/newsletter-banner.jpg";
import { cn } from "~/lib/utils";

interface EmailFormInput {
  email: string;
}

interface NewsletterEmailFormProps {
  onShowToast: () => void;
}

const NewsletterEmailForm = ({ onShowToast }: NewsletterEmailFormProps) => {
  const noEmailErrorMessage = "Email address is required.";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<EmailFormInput>();

  const onSubmit: SubmitHandler<EmailFormInput> = (data) => {
    // Simulate API call success
    console.log("Submitting email:", data.email);

    onShowToast();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col self-stretch">
      <div className="flex w-full flex-col gap-0.5 self-start">
        <div className="flex flex-col justify-between gap-4 self-stretch md:flex-row md:justify-start xl:flex-row">
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className={cn(
              "flex items-center gap-2 self-stretch rounded border border-solid border-neutral-200 bg-neutral-50",
              "h-10 w-full px-3.5 py-2.5 md:w-[334px] xl:w-[334px]",
              "placeholder:text-sm placeholder:font-normal placeholder:text-neutral-500",
            )}
            placeholder="Enter your email"
            {...register("email", {
              required: noEmailErrorMessage,
              minLength: {
                value: 4,
                message: "Please enter a valid email address.",
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address.",
              },
            })}
          />
          <input
            type="submit"
            value="Subscribe"
            className={cn(
              "h-10 rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-sm md:w-24",
              "cursor-pointer hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2",
            )}
          />
        </div>
        {errors.email && (
          <p role="alert" className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-neutral-500">
        We'll never share your details. Read our
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/plus/privacy-policy"
          className="mx-1 cursor-pointer font-medium text-blue-600 underline dark:text-blue-500"
        >
          Privacy Policy
        </a>
      </p>
    </form>
  );
};

const NewsletterSideHeader = () => {
  return (
    <div className="flex flex-col gap-8 self-stretch md:gap-16">
      <span className="text-3xl font-semibold text-neutral-900 md:text-5xl xl:text-5xl">
        Get the finest curated abstracts delivered weekly to your inbox
      </span>
      <div className="flex flex-col gap-5 self-stretch">
        <div className="flex items-center gap-3 self-stretch">
          <div className="h-6 w-6 rounded-full bg-indigo-50">
            <RiCheckLine size={20} className="mx-auto my-0.5 text-indigo-500" />
          </div>
          <div className="flex grow flex-col justify-center gap-3">
            <div className="flex flex-col justify-center gap-3 self-stretch">
              <span className="text-lg font-normal text-neutral-600">
                Exclusive access to new abstract images and collections
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 self-stretch">
          <div className="h-6 w-6 rounded-full bg-indigo-50">
            <RiCheckLine size={20} className="mx-auto my-0.5 text-indigo-500" />
          </div>
          <div className="flex grow flex-col justify-center gap-3">
            <div className="flex flex-col justify-center gap-3 self-stretch">
              <span className="text-lg font-normal text-neutral-600">
                Unlock special promotions only for subscribers
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 self-stretch">
          <div className="h-6 w-6 rounded-full bg-indigo-50">
            <RiCheckLine size={20} className="mx-auto my-0.5 text-indigo-500" />
          </div>
          <div className="flex grow flex-col justify-center gap-3">
            <div className="flex flex-col justify-center gap-3 self-stretch">
              <span className="text-lg font-normal text-neutral-600">
                Regular doses of artistic inspiration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsletterSection = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="bg-white">
      {/* See https://stackoverflow.com/a/11833892/9144511 */}
      <div className="relative mx-auto flex w-full justify-center">
        <div className="absolute mt-10 self-center">
          <NewsletterToast
            message="Subscription successful! Please check your email to confirm."
            type="success"
            isVisible={showToast}
            onClose={handleCloseToast}
          />
        </div>
      </div>

      <div className="px-3 py-8 md:px-4 md:py-16 xl:px-16 xl:py-24">
        <div className="flex flex-col items-center justify-between gap-4 self-stretch md:gap-16 xl:flex-row xl:gap-8">
          <div className="xl:w-xl flex grow flex-col gap-12">
            <NewsletterSideHeader />
            <NewsletterEmailForm onShowToast={handleShowToast} />
          </div>
          {/* Side section Image */}
          <img
            className="aspect-6/5 w-full self-stretch rounded-xl md:aspect-square md:h-[608px] xl:w-[608px]"
            src={newsletterImg}
          />
        </div>
      </div>
    </div>
  );
};
