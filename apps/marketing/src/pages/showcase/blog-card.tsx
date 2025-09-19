import { BlogCard, type BlogCardProps } from "~/features/forum/components/blog-card";
import blogCardThumbnail from "~/features/forum/assets/blog/thumbnail-unsplash.jpg";

const defaultCardData = {
  thumbnailImg: blogCardThumbnail,
  badges: ["Interior"],
  blogUrl: "#",
  title: "Top 5 Living Room Inspiration",
  summary: "Curated vibrants colours for your living, make it pop & calm in the same time",
};

export const BlogCardShowCase = (cardData?: Partial<BlogCardProps>) => {
  const mergedCardData = { ...defaultCardData, ...cardData };
  return (
    <section className="flex h-full flex-col items-center bg-gray-200">
      <main className="mx-auto items-center overflow-x-auto pt-[120px] align-top">
        <BlogCard {...mergedCardData} />
      </main>
    </section>
  );
};
