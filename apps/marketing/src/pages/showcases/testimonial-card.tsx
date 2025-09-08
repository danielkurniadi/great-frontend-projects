import { TestimonialCard, type TestimonialCardProps } from "~/components/ui/testimonial-card";

import profileImg from "~/assets/profile-pics/profile-sarahdole.jpg";

const defaultCardData: TestimonialCardProps = {
  profileImg,
  fullname: "Sarah Dole",
  username: "sarahdole",
  content: `I've been searching for high-quality abstract images for my design projects, an I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`
}

export const TestimonialCardShowcase = (cardData: Partial<TestimonialCardProps>) => {
  const mergedCardData = {...defaultCardData, ...cardData}
  return (
    <section className={"bg-gray-200 w-screen h-screen"}>
      <div className="w-[340px] overflow-x-auto mx-auto py-[200px] align-top items-center">
        <TestimonialCard {...mergedCardData} />
      </div>
    </section>
  );
}
