import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

import { cn } from "~/lib/utils";
import logoAbstractly from "~/assets/logos/abstractly.svg";

export const navigationLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/features",
    title: "Features",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
  {
    href: "/about-us",
    title: "About Us",
  },
  {
    href: "/contact-us",
    title: "Contact",
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 50; // Adjust this value as needed (in pixels)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cn("fixed z-10 w-full", isScrolled && "border-b")}>
      <div className="px-28 pt-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="#" className="w-28 h-8" aria-label="Go to home page">
            <img src={logoAbstractly} alt="Abstractly" className="object-cover" />
          </Link>

          <div className="hidden lg:block">
            <div className="flex item-center gap-8">
              {navigationLinks.map(link => (
                <button key={link.href} aria-label={`Go to ${link.title} page`} className="inline-block">
                  <Link to={link.href} className="font-medium text-neutral-600 py-1 hover:border-b-2">
                    {link.title}
                  </Link>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex gap-4">
            <button className="rounded bg-white px-4 py-2 text-black font-medium shadow-md border-neutral-200 border-1">Learn more</button>
            <button className="rounded bg-indigo-700 px-4 py-2 text-white font-medium">See Pricing</button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center rounded-md p-4"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="h-5 w-5" />
              ) : (
                <RiMenuLine className="h-5 w-5" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full z-10 bg-white shadow lg:hidden">
              <div className="flex flex-col items-start gap-y-4 p-4">
                {navigationLinks.map(link => (
                  <div key={link.href} aria-label={`Go to ${link.title} page`} className="w-full text-neutral-600">
                    <a href={link.href}>{link.title}</a>
                  </div>
                ))}
                <button className="w-full rounded bg-blue-500 px-4 py-2 text-white">Learn more</button>
                <button className="w-full rounded bg-blue-500 px-4 py-2 text-white">See Pricing</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}
