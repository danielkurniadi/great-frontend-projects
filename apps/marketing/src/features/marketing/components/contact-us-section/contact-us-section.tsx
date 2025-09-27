import { RiCheckLine, RiBuildingLine, RiPhoneLine, RiMailLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";

import { cn } from "~/lib/utils";
import { ContactUsToast } from "./contact-us-toast";

const ContactUsHeader = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-10 self-stretch py-3">
      <div className="flex flex-col justify-center gap-5 self-stretch">
        <span className="text-4xl font-semibold text-neutral-900 md:text-5xl xl:text-6xl">
          Talk to our team
        </span>
        <span className="text-lg font-normal text-neutral-600 md:text-xl">
          We're committed to delivering the support you require to make your experience as smooth as
          possible.
        </span>
      </div>
      <div className="flex flex-col justify-center gap-6 self-stretch">
        <div className="flex items-center gap-1 self-stretch">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm outline-1 outline-neutral-100">
              <RiBuildingLine size={24} className="mx-auto text-indigo-700" />
            </div>
            <span className="text-base font-medium text-neutral-600">
              123 Maple Street,Springfield, IL, USA
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 self-stretch">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm outline-1 outline-neutral-100">
              <RiPhoneLine size={24} className="mx-auto text-indigo-700" />
            </div>
            <span className="text-base font-medium text-neutral-600">+1 (650) 555-0198</span>
          </div>
        </div>
        <div className="flex items-center gap-1 self-stretch">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm outline-1 outline-neutral-100">
              <RiMailLine size={24} className="mx-auto text-indigo-700" />
            </div>
            <span className="text-base font-medium text-neutral-600">hello@abstractly.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactUsInput {
  fullName: string;
  email: string;
  message: string;
}

const ContactUsForm = (props: {
  onSubmit?: (data: ContactUsInput, errors: FieldErrors<ContactUsInput>) => void;
}) => {
  const maxMessageLength = 500;
  const { onSubmit } = props;

  const [messageInputLength, setMessageInputLength] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactUsInput>();

  const onFormSubmit = (data: ContactUsInput) => {
    onSubmit?.(data, errors);
  };

  // Update the character count when the textarea value changes.
  useEffect(() => {
    const messageTextarea = document.getElementById("contact-us-form-message-textarea");
    if (!messageTextarea) return;

    const handleInput = (event: Event) => {
      const target = event.target as HTMLTextAreaElement;
      setMessageInputLength(target.value.length);
    };

    messageTextarea.addEventListener("input", handleInput);
    return () => {
      messageTextarea.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <form
      className="flex w-full flex-1 flex-col items-center justify-center gap-10 rounded-lg bg-white p-4 outline-1 outline-neutral-200 drop-shadow-sm md:p-8"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="flex w-full flex-col gap-6 self-stretch">
        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
          <div className="flex h-[66px] flex-1 flex-col gap-1.5 self-stretch">
            <div className="flex flex-col gap-1.5 self-stretch">
              <label className="text-sm font-medium text-neutral-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className={cn(
                  "rounded border border-solid border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm font-normal text-neutral-900",
                  "placeholder:text-sm placeholder:font-normal placeholder:text-neutral-500",
                )}
                {...register("fullName", { minLength: 2, maxLength: 100 })}
              />
            </div>
          </div>

          <div className="flex h-[66px] flex-1 flex-col gap-1.5 self-stretch">
            <div className="flex flex-col gap-1.5 self-stretch">
              <label className="text-sm font-medium text-neutral-700">Email</label>
              <input
                type="text"
                placeholder="example@example.com"
                className={cn(
                  "rounded border border-solid border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm font-normal text-neutral-900",
                  "placeholder:text-sm placeholder:font-normal placeholder:text-neutral-500",
                )}
                {...register("email", {
                  validate: (value) => /\S+@\S+\.\S+/.test(value),
                  minLength: 5,
                  maxLength: 200,
                })}
              />
            </div>
          </div>
        </div>

        <div className="flex h-40 flex-col gap-2 self-stretch">
          <div className="flex grow flex-col gap-1.5 self-stretch">
            <label className="text-sm font-medium text-neutral-700">Message</label>
            <textarea
              id="contact-us-form-message-textarea"
              rows={4}
              placeholder="Write your message..."
              className={cn(
                "rounded border border-solid border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm font-normal text-neutral-900",
                "placeholder:text-sm placeholder:font-normal placeholder:text-neutral-500",
              )}
              {...register("message", { maxLength: 500 })}
            />
          </div>
          <span className="text-right text-sm font-normal text-neutral-500">
            {messageInputLength}/{maxMessageLength}
          </span>
        </div>
      </div>
      <input
        type="submit"
        className="w-full cursor-pointer rounded bg-indigo-700 px-4 py-2.5 text-center text-base font-medium text-white"
      />
    </form>
  );
};

const ContactUsSuccessConfirmation = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm outline-1 outline-neutral-200 md:p-8">
      <div className="flex w-full flex-col items-center gap-16 self-stretch">
        <div className="flex flex-col items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md outline-1 outline-neutral-100">
            <RiCheckLine size={32} className="self-center-safe mx-auto my-auto text-green-700" />
          </div>
          <span className="text-center text-lg font-normal text-neutral-900 md:text-xl">
            Submission successful! We will get back to you in 3-5 days via email.
          </span>
        </div>
        <div className="flex h-11 w-full items-center justify-center rounded border-[0.5px] border-solid border-neutral-200 bg-white px-4 py-2.5 shadow-sm md:w-60">
          <span className="w-full text-center text-base font-medium text-neutral-900">
            Send another message
          </span>
        </div>
      </div>
    </div>
  );
};

export const ContactUsSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleFormSubmit = (data: ContactUsInput, errors: FieldErrors<ContactUsInput>) => {
    console.log("Form submitted:", data);
    if (Object.keys(errors).length > 0) {
      setShowToast(true);
      setToastType("error");
      setToastMessage("Failed to submit. Please fill out all required fields correctly.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="flex w-full flex-col items-center bg-white">
      <div className="relative flex w-full justify-center">
        <div className="absolute mt-10 self-center">
          <ContactUsToast
            message={toastMessage}
            type={toastType}
            isVisible={showToast}
            onClose={handleCloseToast}
          />
        </div>
      </div>
      <div className="mx-auto flex items-center gap-16 self-stretch">
        <div className="flex max-w-7xl grow flex-col justify-center gap-12 xl:flex-row">
          <ContactUsHeader />
          {isSubmitted ? (
            <ContactUsSuccessConfirmation />
          ) : (
            <ContactUsForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};
