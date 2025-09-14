import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "~/pages/landing/page";

import { BlogCardShowCase } from "~/pages/showcase/blog-card";
import { HeroFeatureSectionShowcase } from "~/pages/showcase/hero-feature-section";
import { ProfileCardShowcase } from "~/pages/showcase/profile-card";
import { TestimonialCardShowcase } from "~/pages/showcase/testimonial-card";
import { HeroSectionShowcase } from "./pages/showcase/hero-simple-section";
import { TestimonialSectionsShowcase } from "~/pages/showcase/testimonial-section";
import { NavbarShowcase } from "~/pages/showcase/navbar";
import {
  FeaturesColorSectionShowcase,
  FeaturesGlassSectionShowcase,
} from "~/pages/showcase/features-side-image-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Normal pages for Marketing website */}
        <Route path="/" element={<LandingPage />} />
        {/* Showcase pages for Great frontend submission */}
        <Route path="showcase">
          <Route path="features-side-image-section">
            <Route index element={<FeaturesColorSectionShowcase />} />
            <Route path="right" element={<FeaturesGlassSectionShowcase />} />
          </Route>
          <Route path="navbar" element={<NavbarShowcase />} />
          <Route path="testimonial-card" element={<TestimonialCardShowcase />} />
          <Route path="hero-section" element={<HeroSectionShowcase />} />
          <Route path="testimonial-section" element={<TestimonialSectionsShowcase />} />
          <Route path="blog-card" element={<BlogCardShowCase />} />
          <Route path="hero-feature-section" element={<HeroFeatureSectionShowcase />} />
          <Route path="profile-card" element={<ProfileCardShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
