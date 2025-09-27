import { ContactUsSection } from "~/features/marketing/components/contact-us-section";
import { FAQSection, ExampleFAQItems } from "~/features/marketing/components/faq-section";
import { FeaturesGridSection } from "~/features/marketing/components/features-grid-section";
import {
  FeaturesSideColorImageSection,
  FeaturesSideGlassImageSection,
} from "~/features/marketing/components/features-side-img-section/features-side-img-section";
import { FooterSection } from "~/features/marketing/components/footer-section/footer-section";
import { HeroSection } from "~/features/marketing/components/hero-simple-section";
import { LogoMarqueeSection } from "~/features/marketing/components/logo-marquee";
import { Navbar } from "~/features/marketing/components/navbar";
import { NewsletterSection } from "~/features/marketing/components/newsletter-section/newsletter-section";

export const MarketingLandingPage = () => {
  return (
    <>
      <section className="mb-4">
        <Navbar />
      </section>
      <div className="mx-auto rounded-lg bg-white xl:max-w-[1408px]">
        <section className="">
          <HeroSection />
        </section>
        <section className="py-12 md:py-16 lg:py-24">
          <LogoMarqueeSection />
        </section>
        <section className="px-3 py-12 md:px-4 md:py-16 lg:p-24">
          <FeaturesGridSection />
        </section>
        <section className="px-3 py-12 md:px-4 md:py-16 lg:p-24">
          <FeaturesSideGlassImageSection />
        </section>
        <section className="px-3 py-12 md:px-4 md:py-16 lg:p-24">
          <FeaturesSideColorImageSection />
        </section>
        <section className="px-4 py-12 md:px-4 md:py-16 lg:py-24 xl:px-24">
          <FAQSection items={ExampleFAQItems} />
        </section>
        <section className="px-3 py-8 md:px-4 md:py-16 xl:px-16 xl:py-24">
          <NewsletterSection />
        </section>
        <section className="px-3 py-12 xl:p-24">
          <ContactUsSection />
        </section>
        <section className="px-6 py-12 md:py-16 lg:px-28 lg:py-24">
          <FooterSection />
        </section>
      </div>
    </>
  );
};
