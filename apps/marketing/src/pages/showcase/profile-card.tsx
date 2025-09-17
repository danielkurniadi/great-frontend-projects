import {
  ProfileCard,
  type ProfileCardProps,
} from "~/features/forum/components/profile-card/profile-card";
import profileImg from "~/features/forum/assets/profile/profile-sarahdole.jpg";

const defaultCardData: ProfileCardProps = {
  profileImg,
  company: "Microsoft",
  fullname: "Sarah Dole",
  headline:
    "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  jobTitle: "Front End Engineer",
};

export const ProfileCardShowcase = () => {
  return (
    <section className="flex h-full flex-col items-center bg-gray-200">
      <div className="mx-auto items-center overflow-x-auto py-[200px] align-top">
        <ProfileCard {...defaultCardData} />
      </div>
    </section>
  );
};
