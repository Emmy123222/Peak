"use client";

import { Hero } from "@/app/LandingPage/Hero";
import LearningSection from "@/app/LandingPage/LearningSection";
import WhatWeOffer from "@/app/LandingPage/WhatWeOffer";
import Exams from "@/app/LandingPage/Exams";
import Tutors from "@/app/LandingPage/Tutors";
import UnlockSection from "@/app/LandingPage/UnlockSection";
import Testimonials from "@/app/LandingPage/Testimonials";
import Pricing from "@/app/LandingPage/Pricing";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  // const router = useRouter();
  // useEffect(() => {
  //   // Redirect to the authentication page
  //   router.push("/authentication");
  // }, [router]);

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
