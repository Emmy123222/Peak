"use client";

import { Hero } from "@/components/landing/Hero";
import LearningSection from "@/components/landing/LearningSection";
import WhatWeOffer from "@/components/landing/WhatWeOffer";
import Exams from "@/components/landing/Exams";
import Tutors from "@/components/landing/Tutors";
import UnlockSection from "@/components/landing/UnlockSection";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Landing from "@/components/landing/home";
export default function Home() {
  // const router = useRouter();
  // useEffect(() => {
  //   // Redirect to the authentication page
  //   router.push("/authentication");
  // }, [router]);

  return (
    <main className="flex min-h-screen flex-col">
      <Landing/>
    </main>
  );
}
