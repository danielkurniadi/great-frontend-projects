import { ProfileCard, type ProfileCardProps } from "~/components/ui/profile-card";
import profileImg from "~/assets/profile-pics/profile-sarahdole.jpg";

const defaultCardData: ProfileCardProps = {
  profileImg,
  company: "Microsoft",
  fullname: "Sarah Dole",
  headline: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  jobTitle: "Front End Engineer"
}

export const ProfileCardShowcase = () => {
  return (
    <section className="flex flex-col items-center bg-gray-200">
      <div className="overflow-x-auto mx-auto py-[200px] align-top items-center">
        <ProfileCard {...defaultCardData} />
      </div>
    </section>
  )
}
