
export type TestimonialCardProps = {
  profileImg: string;
  fullname: string;
  username: string;
  content: string;
}

export const TestimonialCard = ({profileImg, fullname, username, content}: TestimonialCardProps) => {
  return (
    <div className="p-6 flex flex-col gap-4 items-start bg-white rounded-lg border-[1px] border-gray-200 shadow-sm">
      <div className="flex gap-4 justify-start align-middle self-stretch">
        <img className="flex-none w-12 h-12 rounded-full" src={profileImg} alt={`/profile/${username}`} />
        <div className="flex-auto">
          <div className="flex flex-col justify-between items-start">
            <span className="text-left text-lg font-semibold">{fullname}</span>
            <span className="text-left text-sm font-normal text-neutral-600">{"@" + username}</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="font-normal text-base text-neutral-600">{content}</p>
      </div>
    </div>
  )
}
