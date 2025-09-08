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
}

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
]

export const ProfileCard = ({profileImg, fullname, jobTitle, headline, company}: ProfileCardProps) => {
  return (
    <div className="card w-[340px] bg-white py-8 px-4 rounded-2xl overflow-hidden">
      <div className="flex flex-col gap-6 items-center">
        <img className="flex-none w-16 h-16 rounded-full" src={profileImg} alt="Profile" />
        <div className="flex flex-col justify-between items-center gap-1">
          <span className="text-left text-xl font-medium text-neutral-900"> {fullname} </span>
          <span className="text-left text-sm font-normal text-neutral-500"> {jobTitle + " @ " + company} </span>
        </div>
        <div>
          <p className="font-light text-base text-center text-neutral-600">
            {headline}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-10 items-center justify-start">
        <button className="flex-initial bg-indigo-700 text-white py-3 px-1 rounded-lg w-full">Contact Me</button>
        <div className="flex gap-10 justify-between items-center">
          {socialLogos.map((item, idx) => {
            return (
              <img
                key={`${item.label}-${idx}`}
                className="w-5 h-5 items-center justify-center"
                src={item.logoImg}
                alt={item.label}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
