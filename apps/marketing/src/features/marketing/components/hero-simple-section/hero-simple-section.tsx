import heroImg from "~/features/marketing/assets/hero-banner.png";

export const HeroSection = () => {
  return (
    <div className="rounded-md bg-white px-4 py-12 md:px-4 md:py-16 lg:p-24">
      <div className="flex flex-col items-center gap-12 md:items-start lg:flex-row lg:items-center lg:gap-8">
        <div className="start flex flex-col justify-start gap-8 md:gap-16">
          <div className="flex flex-col justify-center gap-4 self-stretch lg:gap-6">
            <h1 className="md:5xl flex-grow text-left text-5xl font-semibold xl:min-w-[480px] xl:text-6xl">
              Well crafted abstract images
            </h1>
            <span className="text-left text-lg font-normal text-neutral-600 md:text-xl">
              High quality abstract images for your projects, wallpaper and presentations.
            </span>
          </div>
          <div className="flex justify-start gap-4 self-stretch">
            <button className="h-[60px] w-40 cursor-pointer rounded-sm bg-white px-5 py-3 shadow-sm shadow-neutral-300 hover:bg-neutral-100 md:w-52 lg:w-[170px] lg:px-6 lg:py-4">
              Learn more
            </button>
            <button className="h-[60px] w-40 cursor-pointer rounded-sm bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-800 md:w-52 lg:w-[170px] lg:px-6 lg:py-4">
              See pricing
            </button>
          </div>
        </div>
        <div className="grow rounded-lg bg-gray-100 md:px-6 lg:px-0">
          <img className="aspect-6/5 lg:aspect-7/5 w-full object-cover" src={heroImg} alt="/" />
        </div>
      </div>
    </div>
  );
};
