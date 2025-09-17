import githubLogo from "~/assets/logos/github.svg";
import linkedinLogo from "~/assets/logos/linkedin.svg";
import instagramLogo from "~/assets/logos/instagram.svg";
import twitterLogo from "~/assets/logos/twitter.svg";

export type ProfileCardProps = {
  profileImg: string;
  fullname: string;
  jobTitle: string;
  headline: string;
  company: string;
};

const socialLogos = [
  {
    label: "github",
    logoImg: githubLogo,
  },
  {
    label: "linkedin",
    logoImg: linkedinLogo,
  },
  {
    label: "instagram",
    logoImg: instagramLogo,
  },
  {
    label: "twitter",
    logoImg: twitterLogo,
  },
];

export const ProfileCard = ({
  profileImg,
  fullname,
  jobTitle,
  headline,
  company,
}: ProfileCardProps) => {
  return (
    <div className="card w-[340px] overflow-hidden rounded-2xl bg-white px-4 py-8">
      <div className="flex flex-col items-center gap-6">
        <img className="h-16 w-16 flex-none rounded-full" src={profileImg} alt="Profile" />
        <div className="flex flex-col items-center justify-between gap-1">
          <span className="text-left text-xl font-medium text-neutral-900"> {fullname} </span>
          <span className="text-left text-sm font-normal text-neutral-500">
            {" "}
            {jobTitle + " @ " + company}{" "}
          </span>
        </div>
        <div>
          <p className="text-center text-base font-light text-neutral-600">{headline}</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-start gap-6">
        <button className="w-full flex-initial rounded-lg bg-indigo-700 px-1 py-3 text-white">
          Contact Me
        </button>
        <div className="flex items-center justify-between gap-10">
          {socialLogos.map((item, idx) => {
            return (
              <img
                key={`profile-${item.label}-${idx}`}
                className="h-5 w-5 items-center justify-center"
                src={item.logoImg}
                alt={item.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
