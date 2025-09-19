import defaultImg from "~/features/forum/assets/profile/profile-sarahdole.jpg";

export type TestimonialCardProps = {
  /** Profile image of the user */
  profileImg?: string;
  /** Full name of the user */
  fullname?: string;
  /** Username handle of the user */
  username?: string;
  /** Description of the testimony */
  content?: string;
};

const defaultDescription = `
I've been searching for high-quality abstract images for my design projects, an I'm thrilled to have found this platform.
The variety and depth of creativity are astounding!`;

export const TestimonialCard = ({
  profileImg = defaultImg,
  fullname = "Sarah Dole",
  username = "sarahdole",
  content = defaultDescription,
}: TestimonialCardProps) => {
  return (
    <div className="flex w-[340px] flex-col items-start gap-4 rounded-lg border-[1px] border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex justify-start gap-4 self-stretch align-middle">
        <img
          className="h-12 w-12 flex-none rounded-full"
          src={profileImg}
          alt={`/profile/${username}`}
        />
        <div className="flex-auto">
          <div className="flex flex-col items-start justify-between">
            <span className="text-left text-lg font-semibold">{fullname}</span>
            <span className="text-left text-sm font-light text-neutral-500">{"@" + username}</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-base font-light text-neutral-500">{content}</p>
      </div>
    </div>
  );
};
