import { TestimonialCard, type TestimonialCardProps } from "~/components/ui/testimonial-card";

import profileImg from "~/assets/profile-pics/profile-sarahdole.jpg";

const defaultCardData: TestimonialCardProps = {
  profileImg,
  fullname: "Sarah Dole",
  username: "sarahdole",
  content: `I've been searching for high-quality abstract images for my design projects, an I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
};

export const TestimonialCardShowcase = (cardData: Partial<TestimonialCardProps>) => {
  const mergedCardData = { ...defaultCardData, ...cardData };
  return (
    <section className={"h-screen w-screen bg-gray-200"}>
      <div className="mx-auto w-[340px] items-center overflow-x-auto py-[200px] align-top">
        <TestimonialCard {...mergedCardData} />
      </div>
    </section>
  );
};
