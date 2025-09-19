import {
  TestimonialCard,
  type TestimonialCardProps,
} from "~/features/marketing/components/testimonial-card/testimonial-card";

import profileImg from "~/features/forum/assets/profile/profile-sarahdole.jpg";

const defaultCardData: TestimonialCardProps = {
  profileImg,
  fullname: "Sarah Dole",
  username: "sarahdole",
  content: `I've been searching for high-quality abstract images for my design projects, an I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
};

export const TestimonialCardShowcase = (cardData: Partial<TestimonialCardProps>) => {
  const mergedCardData = { ...defaultCardData, ...cardData };
  return (
    <section className={"h-full w-screen bg-gray-200"}>
      <div className="mx-auto w-[340px] items-center overflow-x-auto py-[200px] align-top">
        <TestimonialCard {...mergedCardData} />
      </div>
    </section>
  );
};
