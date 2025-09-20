import { useState, useEffect } from "react";

import { CookieConsentDialog } from "./cookie-settings-dialog";
import type { CookieSettings } from "../types";

const COOKIE_SETTINGS_KEY = "user_cookie_settings";

export const CookieConsent = ({ overrideShowBanner }: { overrideShowBanner: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [settings, _setSettings] = useState<CookieSettings>({
    enableEssential: true,
    enableAnalytics: false,
    enableMarketing: false,
  });

  const setSettings = (key: keyof CookieSettings, checked: boolean) => {
    _setSettings((prev) => ({ ...prev, [key]: checked }));
  };

  const saveSettings = (settings: CookieSettings) => {
    _setSettings(settings);
    localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(settings));
    setShowBanner(false);
  };

  useEffect(() => {
    const savedSettings = localStorage.getItem(COOKIE_SETTINGS_KEY);

    if (savedSettings) {
      _setSettings(JSON.parse(savedSettings));
      setShowBanner(false);
      return;
    }

    setShowBanner(true);
  }, []);

  if (!showBanner && !overrideShowBanner) {
    return <></>;
  }

  return (
    <div className="fixed bottom-0 left-0 flex h-[348px] w-screen flex-col gap-6 bg-white px-4 py-4 md:h-[204px] md:px-8 md:py-6 lg:h-[184px] lg:px-28 lg:py-6">
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold">We use cookies</span>
        <p className="text-sm font-normal">
          We use cookies to enhance your browsing experience and improve our website's performance.
          By continuing to use this site, you consent to the use of cookies. To learn more about how
          we use cookies and your options, please read our{" "}
          <span className="underline">
            <a
              href={"https://tailwindcss.com/plus/ui-blocks/marketing/elements/banners"}
              target="_blank"
              aria-label="View cookie policy"
            >
              cookie policy.
            </a>
          </span>
        </p>
      </div>
      <div className="flex w-full flex-col content-center justify-between gap-2 md:flex-row">
        <div className="flex self-stretch">
          <button
            className="rounded-sm bg-red-600 px-4 py-[10px] text-sm font-medium text-white"
            onClick={() => {
              saveSettings({
                enableEssential: true,
                enableAnalytics: false,
                enableMarketing: false,
              });
            }}
          >
            Decline all
          </button>
        </div>
        <div className="flex flex-col justify-center gap-2 self-stretch md:flex-row md:gap-4">
          <button
            className="cursor-pointer rounded-sm bg-indigo-700 px-4 py-[10px] text-base font-medium text-white lg:w-44"
            onClick={() =>
              saveSettings({ enableEssential: true, enableAnalytics: true, enableMarketing: true })
            }
          >
            Allow cookies
          </button>
          <CookieConsentDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            settings={settings}
            setSettings={setSettings}
            saveSettings={saveSettings}
          />
        </div>
      </div>
    </div>
  );
};
