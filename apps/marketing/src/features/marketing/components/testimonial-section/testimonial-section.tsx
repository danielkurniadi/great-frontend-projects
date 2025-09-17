import {
  TestimonialCard,
  type TestimonialCardProps,
} from "~/features/marketing/components/testimonial-card/testimonial-card";

export type TestimonialSectionsProps = {
  testimonials: TestimonialCardProps[];
};

export const TestimonialSections = ({ testimonials }: TestimonialSectionsProps) => {
  return (
    <section>
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
    </section>
  );
};
