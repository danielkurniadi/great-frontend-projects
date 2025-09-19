import heroImg from "~/features/marketing/assets/hero-banner.png";

export const HeroSection = () => {
  return (
    <div className="rounded-md bg-white px-4 py-12 md:p-16 lg:p-24">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
        <div className="flex flex-col justify-start gap-8">
          <div className="flex flex-col justify-center gap-4 self-stretch lg:gap-6">
            <h1 className="md:5xl flex-grow text-left text-4xl font-semibold lg:text-6xl">
              Well crafted abstract images
            </h1>
            <span className="text-left text-lg font-normal text-neutral-600 md:text-xl">
              High quality abstract images for projects, wallpaper and presentations.
            </span>
          </div>
          <div className="flex w-[383px] justify-start gap-4 self-stretch">
            <button className="w-40 cursor-pointer rounded-sm bg-white px-5 py-3 shadow-sm shadow-neutral-300 hover:bg-neutral-100">
              Learn more
            </button>
            <button className="w-40 cursor-pointer rounded-sm bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-800">
              See pricing
            </button>
          </div>
        </div>
        <div className="grow rounded-lg lg:py-16">
          <img className="object-cover" src={heroImg} alt="/" />
        </div>
      </div>
    </div>
  );
};
