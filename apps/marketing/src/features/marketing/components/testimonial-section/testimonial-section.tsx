import { TestimonialCard, type TestimonialCardProps } from "../testimonial-card";

export type TestimonialSectionsProps = {
  testimonials?: TestimonialCardProps[];
};

import profiles from "~/features/forum/assets/profile";

const defaultTestimonials = [
  {
    profileImg: profiles.sarahdole,
    content:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    fullname: "Sarah Dole",
    username: "sarahdole",
  },
  {
    profileImg: profiles.johnaseed,
    content:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
    fullname: "John Appleseed",
    username: "johnaseed",
  },
  {
    profileImg: profiles.jeniic,
    content:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
    fullname: "Jean Gray",
    username: "jeniic",
  },
  {
    profileImg: profiles.jakejohnson,
    content:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
    fullname: "Jake Johnson",
    username: "jakejohnshon",
  },
  {
    profileImg: profiles.igorstrav,
    content:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
    fullname: "Igor Stravinsky",
    username: "igorstrav",
  },
  {
    profileImg: profiles.drice,
    content:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
    fullname: "Declan Rice",
    username: "drice",
  },
  {
    profileImg: profiles.mthompson,
    content:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
    fullname: "Marcus Thompson",
    username: "mthompson",
  },
  {
    profileImg: profiles.olivernever,
    content:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
    fullname: "Oliver Never",
    username: "olivernever",
  },
  {
    profileImg: profiles.marked,
    content:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
    fullname: "Mark Dennis",
    username: "marked",
  },
];

export const TestimonialSection = ({
  testimonials = defaultTestimonials,
}: TestimonialSectionsProps) => {
  return (
    <div className="flex flex-col items-center overflow-auto">
      <div className="mx-8 mb-16 flex flex-col items-center justify-center gap-3 text-center">
        <h6 className="text-xl font-semibold text-indigo-700">Testimonials</h6>
        <h1 className="text-3xl font-semibold md:text-5xl">Countless users, countless smiles</h1>
        <h6 className="text-xl font-normal text-neutral-600">
          Explore our community's journey and discover why satisfaction defines us.
        </h6>
      </div>
      <div className="columns-1 gap-6 space-y-6 md:columns-2 md:space-y-8 lg:columns-3">
        {testimonials.map((testimonial, idx) => {
          return (
            <div
              key={`testimonial-card-${testimonial.username}-${idx}`}
              className="max-w-[384px] break-inside-avoid-column"
            >
              <TestimonialCard {...testimonial} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
