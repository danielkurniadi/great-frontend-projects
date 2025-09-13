import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "~/pages/landing/page";
import { BlogCardShowCase } from "~/pages/showcases/blog-card";
import { HeroFeatureSectionShowcase } from "~/pages/showcases/hero-feature-section";
import { ProfileCardShowcase } from "~/pages/showcases/profile-card";
import { TestimonialCardShowcase } from "~/pages/showcases/testimonial-card";
import { HeroSectionShowcase } from "./pages/showcases/hero-section";
import { TestimonialSectionsShowcase } from "~/pages/showcases/testimonial-section";
import { NavbarShowcase } from "~/pages/showcases/navbar";
import {
  FeaturesColorSection,
  FeaturesGlassSection,
} from "~/pages/landing/sections/features-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="showcase">
          <Route path="features-section">
            <Route index element={<FeaturesColorSection />} />
            <Route path="right" element={<FeaturesGlassSection />} />
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
