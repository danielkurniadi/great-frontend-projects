import React, { useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

import { cn } from "~/lib/utils"; // Assuming you have a `cn` utility for class names.
import logoAbstractly from "~/assets/logos/abstractly.svg";

const navigationLinks = [
  { href: "#", title: "Home" },
  { href: "#", title: "Features" },
  { href: "#", title: "Pricing" },
  { href: "#", title: "About Us" },
  { href: "#", title: "Contact" },
];

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
};

// Reusable Button Component for consistency
const Button = ({ variant = "secondary", className = "", children, ...props }: ButtonProps) => {
  const baseClasses =
    "h-11 w-full justify-center rounded px-4 py-2.5 text-base font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/20";

  const variants = {
    primary: "bg-[#4338ca] text-white shadow-sm hover:bg-[#3730a3]",
    secondary: "border border-[#e5e5e5] bg-white text-[#171717] shadow-sm hover:bg-neutral-50",
  };

  return (
    <button className={cn(baseClasses, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

// Mobile Navigation Menu (The slide-in panel)
const MobileNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 flex h-full w-[359px] flex-col gap-6 bg-white p-8 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex items-center justify-between">
        <a href="#" aria-label="Go to home page">
          <img src={logoAbstractly} alt="Abstractly" className="h-8 w-28" />
        </a>
        <button
          onClick={onClose}
          type="button"
          className="rounded p-1 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          aria-label={isOpen ? "Open menu" : "Close menu"}
        >
          {isOpen ? <RiCloseLine className="h-5 w-5" /> : <RiMenuLine className="h-5 w-5" />}
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {navigationLinks.map((link, idx) => (
          <a
            key={`link-${idx}-${link.href}`}
            href={link.href}
            className="rounded px-3 py-2 text-sm font-normal text-neutral-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
            {link.title}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="secondary">Learn more</Button>
        <Button variant="primary">See pricing</Button>
      </div>
    </nav>
  );
};

// Main Navbar Component
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="mx-auto h-[68px] max-w-[1216px] px-8 md:px-4 xl:px-0">
        <div className="flex h-full items-center justify-between lg:gap-20">
          {/* Logo */}
          <a href="#" className="h-8 w-28" aria-label="Go to home page">
            <img src={logoAbstractly} alt="Abstractly" className="object-cover" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-between gap-24 xl:flex">
            <div className="flex gap-8">
              {navigationLinks.map((link, idx) => (
                <a
                  key={`link-${idx}-${link.href}`}
                  href={link.href}
                  className={cn(
                    "rounded px-0.5 py-1 font-medium text-neutral-600",
                    "hover:text-neutral-900 focus:text-neutral-900 focus:outline-none",
                    "focus:ring-4 focus:ring-indigo-500/20",
                  )}
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                className="w-[125px]"
                aria-label="Learn more about our product"
              >
                Learn more
              </Button>
              <Button variant="primary" className="w-[121px]" aria-label="See our pricing plans">
                See pricing
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((b) => !b)}
              className="rounded p-1 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              aria-label="Open menu"
            >
              <RiMenuLine className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
