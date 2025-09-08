export type TestimonialCardProps = {
  profileImg: string;
  fullname: string;
  username: string;
  content: string;
};

export const TestimonialCard = ({
  profileImg,
  fullname,
  username,
  content,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg border-[1px] border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex justify-start gap-4 self-stretch align-middle">
        <img
          className="h-12 w-12 flex-none rounded-full"
          src={profileImg}
          alt={`/profile/${username}`}
        />
        <div className="flex-auto">
          <div className="flex flex-col items-start justify-between">
            <span className="text-left text-lg font-semibold">{fullname}</span>
            <span className="text-left text-sm font-normal text-neutral-600">{"@" + username}</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-base font-normal text-neutral-600">{content}</p>
      </div>
    </div>
  );
};
