import { ProfileCard } from "~/features/forum/components/profile-card/profile-card";
import profiles from "~/features/forum/assets/profile";

const defaultCardData = {
  profileImg: profiles.sarahdole,
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
