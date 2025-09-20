import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@repo/ui/dialog";
import { Switch } from "@repo/ui/switch";

import type { CookieSettings } from "../types";

interface CookieSettingsProps {
  settings: CookieSettings;
  setSettings: (key: keyof CookieSettings, checked: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  saveSettings: (consent: CookieSettings) => void;
}

export const CookieConsentDialog: React.FC<CookieSettingsProps> = (props) => {
  const { isOpen, setIsOpen, settings, setSettings, saveSettings } = props;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="cursor-pointer rounded-sm border-2 border-gray-100 bg-white px-4 py-[10px] text-base font-medium shadow-sm lg:w-44">
          Manage cookies
        </button>
      </DialogTrigger>
      <DialogContent className="w-5/6">
        <DialogHeader className="hidden">
          <DialogTitle className="">Cookie Consent</DialogTitle>
        </DialogHeader>
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Essentials</p>
            <Switch checked={true} disabled={true} />
          </div>
          <p className="text-sm text-neutral-600">
            These cookies are essential for the proper functioning of our services and cannot be
            disabled.
          </p>
        </div>
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Analytics</p>
            <Switch
              checked={settings.enableAnalytics}
              onCheckedChange={(value) => setSettings("enableAnalytics", value)}
            />
          </div>
          <p className="text-sm text-neutral-600">
            These cookies collect information about how you use our services or potential errors you
            encounter. Based on this information we are able to improve your experience and react to
            any issues.
          </p>
        </div>
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Marketing</p>
            <Switch
              checked={settings.enableMarketing}
              onCheckedChange={(value) => setSettings("enableMarketing", value)}
            />
          </div>
          <p className="text-sm text-neutral-600">
            These cookies allow us to show you advertisements relevant to you through our
            advertising partners.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              className="flex-1"
              onClick={() =>
                saveSettings({
                  enableEssential: true,
                  enableAnalytics: true,
                  enableMarketing: true,
                })
              }
            >
              Accept all
            </button>
            <button className="flex-1" onClick={() => saveSettings(settings)}>
              Save
            </button>
          </div>
          <button
            onClick={() =>
              saveSettings({
                enableEssential: true,
                enableAnalytics: false,
                enableMarketing: false,
              })
            }
          >
            Decline all
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
