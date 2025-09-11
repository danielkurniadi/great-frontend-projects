import {
  TestimonialSections,
  type TestimonialSectionsProps,
} from "~/pages/landing/sections/testimonial-section";

import profileSarahDole from "~/assets/profile-pics/profile-sarahdole.jpg";
import profileJohnAseed from "~/assets/profile-pics/profile-johnaseed.jpg";
import profileJeniic from "~/assets/profile-pics/profile-jeniic.jpg";
import profileJakeJohnson from "~/assets/profile-pics/profile-jakejohnson.jpg";
import profileMThompson from "~/assets/profile-pics/profile-mthompson.jpg";
import profileIgoStrav from "~/assets/profile-pics/profile-igorstrav.jpg";
import profileDrice from "~/assets/profile-pics/profile-drice.jpg";
import profileOliverNever from "~/assets/profile-pics/profile-marked.jpg";
import profileMDennis from "~/assets/profile-pics/profile-marked.jpg";

const testimonials: TestimonialSectionsProps["testimonials"] = [
  {
    profileImg: profileSarahDole,
    content:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    fullname: "Sarah Dole",
    username: "sarahdole",
  },
  {
    profileImg: profileJohnAseed,
    content:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
    fullname: "John Appleseed",
    username: "johnaseed",
  },
  {
    profileImg: profileJeniic,
    content:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
    fullname: "Jean Gray",
    username: "jeniic",
  },
  {
    profileImg: profileJakeJohnson,
    content:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
    fullname: "Jake Johnson",
    username: "jakejohnshon",
  },
  {
    profileImg: profileIgoStrav,
    content:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
    fullname: "Igor Stravinsky",
    username: "igorstrav",
  },
  {
    profileImg: profileDrice,
    content:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
    fullname: "Declan Rice",
    username: "drice",
  },
  {
    profileImg: profileMThompson,
    content:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
    fullname: "Marcus Thompson",
    username: "mthompson",
  },
  {
    profileImg: profileOliverNever,
    content:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
    fullname: "Oliver Never",
    username: "olivernever",
  },
  {
    profileImg: profileMDennis,
    content:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
    fullname: "Mark Dennis",
    username: "marked",
  },
];

export const TestimonialSectionsShowcase = () => {
  return (
    <section className={"flex h-full flex-col items-center bg-white"}>
      <div className="mx-auto items-center overflow-auto px-4 pt-12 align-top md:px-4 md:pt-16 lg:px-24 lg:pt-28">
        <TestimonialSections testimonials={testimonials} />
      </div>
    </section>
  );
};
