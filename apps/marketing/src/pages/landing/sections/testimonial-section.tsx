import { TestimonialCard, type TestimonialCardProps } from "~/components/ui/testimonial-card"

export type TestimonialSectionsProps = {
  testimonials: TestimonialCardProps[];
}

export const TestimonialSections = ({testimonials}: TestimonialSectionsProps) => {
  return (
    <section className="container">
      <div className="flex flex-col gap-3 items-center justify-center mb-16">
        <h6 className="text-xl font-semibold text-indigo-700">Testimonials</h6>
        <h1 className="text-5xl font-semibold">Countless users, countless smiles</h1>
        <h6 className="text-xl text-neutral-600 font-normal">Explore our community's journey and discover why satisfaction defines us.</h6>
      </div>
      <div className="columns-1 gap-6 space-y-6 md:space-y-8 md:columns-2 lg:columns-3 items-start overflow-y-auto">
        {testimonials.map((testimonial, idx) => {
          return (
            <div key={`${testimonial.username}-${idx}`} className="w-[384px] break-inside-avoid-column">
              <TestimonialCard {...testimonial}/>
            </div>)
        })}
      </div>
    </section>
  )
}
