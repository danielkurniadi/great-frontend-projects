import Logo from "~/assets/logos/logo.svg";
import Logo1 from "~/assets/logos/logo-1.svg";
import Logo2 from "~/assets/logos/logo-2.svg";
import Logo3 from "~/assets/logos/logo-3.svg";
import Logo4 from "~/assets/logos/logo-4.svg";
import Logo5 from "~/assets/logos/logo-5.svg";
import Logo6 from "~/assets/logos/logo-6.svg";
import Logo7 from "~/assets/logos/logo-7.svg";

type LogoImage = {
  src: string;
  alt: string;
};

const logoImages: LogoImage[] = [
  {
    src: Logo,
    alt: "Wan Nain",
  },
  {
    src: Logo1,
    alt: "Robinwood",
  },
  {
    src: Logo3,
    alt: "Sawpdo",
  },
  {
    src: Logo5,
    alt: "Diamond",
  },
  {
    src: Logo6,
    alt: "Air Car",
  },
  {
    src: Logo7,
    alt: "Makro hard",
  },
  {
    src: Logo4,
    alt: "Wirang",
  },
  {
    src: Logo2,
    alt: "Bitterfly",
  },
];

const LogosSegment = ({
  logoImages,
  ariaHidden = false,
}: {
  logoImages: LogoImage[];
  ariaHidden?: boolean;
}) => {
  return (
    <div
      className="animate-marquee group-hover::paused flex gap-20 py-[2px] group-hover:bg-yellow-200 md:gap-2 md:p-0 lg:gap-8"
      aria-hidden={ariaHidden ?? "false"}
    >
      {logoImages.map((item, idx) => (
        <img
          key={`logo-img-${idx}`}
          className="h-auto w-[218px] max-w-none"
          src={item.src}
          loading="lazy"
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export const LogoMarqueeSection = () => {
  return (
    <section
      aria-describedby="logo-marquee-section"
      className="my-64 w-full rounded bg-white px-0 py-1 md:rounded-md md:px-2"
    >
      {/* md:my-[356px]  lg:my-48*/}
      <div className="flex flex-col gap-8 px-4 py-12 md:py-16 lg:py-24">
        <h2 className="text-center text-base font-medium text-neutral-600">
          Used by teams that you love
        </h2>
        <div className="overflow-hidden">
          <div className="group flex gap-[78.5px] space-x-16 md:gap-2">
            <LogosSegment logoImages={logoImages} />
            <LogosSegment logoImages={logoImages} />
            <LogosSegment logoImages={logoImages} />
          </div>
        </div>
      </div>
    </section>
  );
};
