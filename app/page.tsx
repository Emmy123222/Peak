import { Hero } from "@/app/LandingPage/Hero";
import LearningSection from "@/app/LandingPage/LearningSection";
import WhatWeOffer from "@/app/LandingPage/WhatWeOffer";
import Exams from "@/app/LandingPage/Exams";
import Tutors from "@/app/LandingPage/Tutors";
import UnlockSection from "@/app/LandingPage/UnlockSection";
import Testimonials from "@/app/LandingPage/Testimonials";
import Pricing from "@/app/LandingPage/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <LearningSection />
      <WhatWeOffer />
      <Exams />
      <Tutors />
      <UnlockSection />
      <Testimonials />
      <Pricing />
    </main>
  );
}
