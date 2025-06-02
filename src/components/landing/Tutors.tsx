"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WaitlistModal from "./WaitlistModal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card } from "../ui/card";

const tutors = [
  {
    name: "Raphael Ibitoye",
    image: "/images/raph.png",
    subject: "Mathematics and coding",
  },
  {
    name: "John Fiyin",
    image: "/images/john.png",
    subject: "Math, English",
  },
  {
    name: "Emmanuel Odoh",
    image: "/images/emma.png",
    subject: "Maths, Physics",
  },
  {
    name: "Salami Jonathan",
    image: "/images/salam.png",
    subject: "Math, physics",
  },
  {
    name: "Mr. Samuel Obasi",
    image: "/images/sam.png",
    subject: "Math, Economics",
  },
  {
    name: "John Fiyin",
    image: "/images/john2.png",
    subject: "Math, English",
  },
];

const Tutors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % tutors.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + tutors.length) % tutors.length);
  };

  const isMobile = windowWidth < 768;


  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };



  return (
    <section className="w-full py-8 md:py-16">
      <div className="container md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-6 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="font-montserrat font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] tracking-[0] text-center">
              Learn from Expert Tutors You Can Trust
            </h2>
            <p className="font-montserrat text-[16px] leading-[24px] text-center">
              Our team of passionate educators is here to guide your child every
              step of the way — whether it’s mastering Chemistry, acing entrance
              exams, or building long-term academic confidence.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              onClick={openWaitlist}
              className="border rounded-full px-6 py-3 h-auto"
            >
              Become a tutor
            </Button>
            <Button className="rounded-full px-6 py-3 h-auto bg-purple-700 hover:bg-purple-800 text-white" onClick={openWaitlist}>
              Find Tutor
            </Button>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {tutors.map((tutor, index) => (
                <CarouselItem
                  key={index}
                  className={`pl-4 max-sm:basis-1/1 md:basis-1/3 lg:basis-1/5 max-sm:mx-auto`}
                >
                  <div
                    key={index}
                    className="w-[200px] text-center flex flex-col items-center"
                  >
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full rounded-lg object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{tutor.name}</h3>
                      <p className="text-gray-600">{tutor.subject}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom navigation buttons positioned outside the carousel */}
            <div className="flex justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-200 bg-gray-100 hover:bg-gray-200"
                onClick={() => {
                  const prevButton = document.querySelector(
                    "[data-carousel-prev]"
                  ) as HTMLButtonElement;
                  if (prevButton) prevButton.click();
                }}
              >
                <img src="/icons/Arrow.png" alt="" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                className="bg-purple-700 hover:bg-purple-800 rounded-full"
                size="icon"
                onClick={() => {
                  const nextButton = document.querySelector(
                    "[data-carousel-next]"
                  ) as HTMLButtonElement;
                  if (nextButton) nextButton.click();
                }}
              >
                <img src="/icons/Arrow1.png" alt="" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>

            {/* Hidden actual carousel controls - we'll trigger these programmatically */}
            <div className="hidden">
              <CarouselPrevious data-carousel-prev />
              <CarouselNext data-carousel-next />
            </div>
          </Carousel>
        </div>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </section>
  );
};

export default Tutors;
