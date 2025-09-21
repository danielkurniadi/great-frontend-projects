import { useEffect } from "react";
import { cn } from "~/lib/utils";

interface NewsletterToastProps {
  message: string;
  type?: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

/** TODO: Refactor and use Toast from packages/ui */
export const NewsletterToast = ({
  message,
  type = "success",
  isVisible = false,
  onClose,
  autoClose = true,
  autoCloseDelay = 50000000,
}: NewsletterToastProps) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, autoCloseDelay, onClose]);

  if (!isVisible) return null;

  const toastStyles = {
    success: {
      bg: "bg-green-50",
      badgeBg: "bg-white",
      textColor: "text-green-700",
      badgeText: "Success",
    },
    error: {
      bg: "bg-red-50",
      badgeBg: "bg-white",
      textColor: "text-red-700",
      badgeText: "Error",
    },
    info: {
      bg: "bg-blue-50",
      badgeBg: "bg-white",
      textColor: "text-blue-700",
      badgeText: "Info",
    },
  };

  const styles = toastStyles[type];

  return (
    <div
      className={cn(
        "fixed z-10 -translate-x-1/2 transform",
        "animate-in slide-in-from-top-2 duration-300",
        "flex w-[500px] items-center gap-3 rounded-full p-1",
        styles.bg,
      )}
      role="alert"
      aria-live="polite"
    >
      <div className={cn("flex items-center rounded-full px-2.5 py-0.5", styles.badgeBg)}>
        <span className={cn("text-center text-sm font-medium", styles.textColor)}>
          {styles.badgeText}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span className={cn("text-sm font-medium", styles.textColor)}>{message}</span>
      </div>
    </div>
  );
};
