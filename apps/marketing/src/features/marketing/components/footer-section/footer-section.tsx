import {
  RiGithubLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
} from "@remixicon/react";

export const FooterSection = () => {
  const footerNavItems = [
    {
      id: "footer-nav-feature",
      label: "Features",
      href: "#",
    },
    {
      id: "footer-nav-pricing",
      label: "Pricing",
      href: "#",
    },
    {
      id: "footer-nav-aboutus",
      label: "About Us",
      href: "#",
    },
    {
      id: "footer-nav-contactus",
      label: "Contact Us",
      href: "#",
    },
  ];

  const socialLogoItems = [
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiGithubLine,
    RiTwitterXLine,
  ];

  return (
    <div className="mx-auto flex h-full flex-col justify-center">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center sm:gap-4">
          {footerNavItems.map(({ id, label, href }) => {
            return (
              <button key={id} type="button" className="bg-none px-1">
                <a key={id} href={href} className="w-full cursor-pointer">
                  <span className="text-sm font-medium text-neutral-500">{label}</span>
                </a>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="mx-auto flex justify-center gap-6">
            {socialLogoItems.map((Logo, idx) => {
              return (
                <button key={`footer-social-${idx}`} className="h-6 w-6">
                  <Logo
                    size={24}
                    className="cursor-pointer items-center align-middle text-neutral-300"
                  />
                </button>
              );
            })}
          </div>
          <div className="mx-auto text-sm font-normal text-neutral-900">
            &copy; 2024 Abstractly, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
