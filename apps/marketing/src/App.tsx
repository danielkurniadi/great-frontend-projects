import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "~/pages/landing/page";
import { BlogCardShowCase } from "~/pages/showcases/blog-card";
import { ProfileCardShowcase } from "~/pages/showcases/profile-card";
import { TestimonialCardShowcase } from "~/pages/showcases/testimonial-card";
import { TestimonialSectionsShowcase } from "./pages/showcases/testimonial-section";
import { NavbarShowcase } from "./pages/showcases/navbar";
import { HeroSectionShowcase } from "./pages/showcases/hero-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/showcase/navbar" element={<NavbarShowcase />} />
        <Route path="/showcase/testimonial-card" element={<TestimonialCardShowcase />} />
        <Route path="/showcase/hero-section" element={<HeroSectionShowcase />} />
        <Route path="/showcase/testimonial-section" element={<TestimonialSectionsShowcase />} />
        <Route path="/showcase/blog-card" element={<BlogCardShowCase />} />
        <Route path="/showcase/profile-card" element={<ProfileCardShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
