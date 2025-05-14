"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { HeroForm } from "@/components/landing/HeroForm";
import { SpeechBubble } from "@/components/landing/SpeechBubble";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (submittedEmail: string) => {
    console.log("Submitted email:", submittedEmail);
    setEmail("");
  };

  return (
    <section className="relative w-full pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto  flex flex-col lg:flex-row items-center relative z-10">
        <div className="w-full lg:w-1/2 lg:pr-8 z-10">
          <h1 className="font-montserrat font-bold text-[55px] leading-[75px] tracking-[0px]">
            Unlock Your Brilliance{" "}
            <span className="block">
              with <span className="text-(--my-primary-color)">PeakClass</span>
            </span>
          </h1>

          <p className="font-montserrat font-normal text-base leading-6 align-middle tracking-[0px] text-[#777777] mt-4">
            Transform your academic journey with expert tutoring, AI-driven
            tools, and a curriculum designed to shape future leaders.
          </p>

          <div className="mt-8 mb-4">
            <p className="font-montserrat font-medium text-[14px] leading-[20px] tracking-[0%]">
              Join the PeakClass waitlist. Be the first to know when
            </p>
            <p className="font-montserrat font-medium text-[14px] leading-[20px] tracking-[0%]">
              we launch!
            </p>
            <HeroForm
              onSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
            />
          </div>
        </div>
        {/* Right side (Images) */}
        <div className="relative">
          {/* Background circles */}
          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-secondary/20"></div>
          <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-primary/20"></div>

          {/* Student images */}
          <div className="relative flex justify-center">
            {/* Girl student */}
            <div className="relative z-10">
              <Image
                src="/images/Hero/boy.png"
                alt="Student with books"
                width={250}
                height={150}
                className="object-cover"
              />
              <div className="absolute top-16 right-0 transform translate-x-[70%]">
                <SpeechBubble text="Over 1000 Past questions" className=" " />
              </div>
            </div>

            {/* Boy student */}
            <div className="relative z-10 ml-[-50px] mt-40">
              <Image
                src="/images/Hero/girl.png"
                alt="Student with headphones"
                width={300}
                height={468}
                className="object-cover"
              />
              <div className="absolute bottom-12 left-0 transform -translate-x-1/2">
                <SpeechBubble
                  text="Access 50+ Subjects"
                  className="bg-white border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
