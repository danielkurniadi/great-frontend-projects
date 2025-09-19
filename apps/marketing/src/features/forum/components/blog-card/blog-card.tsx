import { RiArrowRightLine } from "@remixicon/react";
import thumbnailBlogPost from "~/features/forum/assets/blog/thumbnail-unsplash.jpg";

export type BlogCardProps = {
  /**Thumbnail image of the blog post */
  thumbnailImg?: string;
  /** Badge labels' texts - for now colour is only green-700 */
  badges?: string[];
  /** URL of the blog post */
  blogUrl?: string;
  /** Title of the blog post */
  title?: string;
  /** Summary of the blog post */
  summary?: string;
};

export const BlogCard = ({
  thumbnailImg = thumbnailBlogPost,
  badges = ["Interior"],
  blogUrl = "#",
  title = "Top 5 Living Room Inspiration",
  summary = "Curated vibrants colours for your living, make it pop & calm at the same time",
}: BlogCardProps) => {
  return (
    <div className="card w-[340px] overflow-hidden rounded-2xl bg-white">
      <img className="max-h-72 w-full object-cover" src={thumbnailImg} alt="blog-card-unsplash" />

      <div className="card-container flex flex-col gap-3 p-4">
        <div className="card-header flex flex-col gap-2">
          <div className="flex items-start gap-1 align-baseline">
            {badges.filter(Boolean).map((badgeLabel, idx) => (
              <div
                key={`blog-card-badge-${idx}`}
                className="min-w-12 cursor-pointer rounded-full border-2 border-green-200 bg-green-50 px-2 py-0.5 text-green-700 hover:bg-green-100"
              >
                {badgeLabel}
              </div>
            ))}
          </div>
          <h3 className="text-left text-lg font-semibold">{title}</h3>
        </div>

        <div className="card-body flex flex-col justify-center gap-6">
          <p className="text-left font-medium text-neutral-500">{summary}</p>
          <button
            className="flex items-center justify-start gap-1"
            onClick={() => {
              window.location.href = blogUrl;
            }}
          >
            <span className="align text-indigo-700">Read more</span>{" "}
            <RiArrowRightLine size={20} color="#4338CA" />
          </button>
        </div>
      </div>
    </div>
  );
};
