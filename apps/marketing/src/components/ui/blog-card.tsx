import { RiArrowRightLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export type BlogCardProps = {
  thumbnailImg: string;
  badges: string[];
  blogUrl: string;
  title: string;
  summary: string;
}

export const BlogCard = ({thumbnailImg, badges, blogUrl="#", title, summary}: BlogCardProps) => {

  const navigate = useNavigate();

  const handleRedirectBlogUrl = (url: string) => {
    try {
      // This is a full URL (could be external).
      new URL(url);
      window.location.href = url;
    } catch (e) {
      // This is a path of a URL within this app domain.
      const urlPath = url;
      if (urlPath.startsWith('/') || !urlPath.includes(':')) {
        navigate(urlPath);
      }
    }
  }

  return (
    <div className="card w-[340px] bg-white rounded-2xl overflow-hidden">
      <img className="object-cover max-h-72 w-full" src={thumbnailImg} alt="blog-card-unsplash"/>

      <div className="card-container flex flex-col p-4 gap-3">
        <div className="card-header flex flex-col gap-2">
          <div className="flex gap-1 items-start align-baseline">
            {badges.filter(Boolean).map((badgeLabel, idx) => (
              <div
                key={`blog-card-badge-${idx}`}
                className="text-green-700 bg-green-50 hover:bg-green-100 min-w-12 py-0.5 px-2 border-green-200 border-2 rounded-full cursor-pointer"
              >
                  {badgeLabel}
              </div>
            ))}
          </div>
          <h3 className="text-left text-lg font-semibold">{title}</h3>
        </div>

        <div className="card-body flex flex-col gap-6 justify-center">
          <p className="font-medium text-left text-neutral-500">{summary}</p>
          <button className="flex gap-1 items-center justify-start" onClick={() => {handleRedirectBlogUrl(blogUrl)}}>
            <span className="text-indigo-700 align">Read more</span> <RiArrowRightLine size={20} color="#4338CA"/>
          </button>
        </div>
      </div>
    </div>
  )
}
