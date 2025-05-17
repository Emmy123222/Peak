"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Roseline Phillips",
    photo: "/images/image 23.png",
    text: "PeakClass's alerts helped us catch Math struggles early – my son went from D to B in 6 weeks!",
  },
  {
    id: 2,
    name: "Roseline Phillips",
    photo: "/images/image 23.png",
    text: "PeakClass's alerts helped us catch Math struggles early – my son went from D to B in 6 weeks!",
  },
  {
    id: 3,
    name: "Roseline Phillips",
    photo: "/images/image 23.png",
    text: "PeakClass's alerts helped us catch Math struggles early – my son went from D to B in 6 weeks!",
  },
  {
    id: 4,
    name: "Roseline Phillips",
    photo: "/images/image 23.png",
    text: "PeakClass's alerts helped us catch Math struggles early – my son went from D to B in 6 weeks!",
  },
  {
    id: 5,
    name: "Roseline Phillips",
    photo: "/images/image 23.png",
    text: "PeakClass's alerts helped us catch Math struggles early – my son went from D to B in 6 weeks!",
  },
  {
    id: 6,
    name: "Roseline Phillips",
    photo: "/images/image 23.png",
    text: "PeakClass's alerts helped us catch Math struggles early – my son went from D to B in 6 weeks!",
  },
];

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-1 md:px-6 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
          Why parents love us
        </h2>

        <div className="relative max-w-6xl mx-auto overflow-hidden ">
          {/* Left blur effect - stronger blur */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10"></div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className={`pl-4 md:basis-1/2 lg:basis-1/3`}
                >
                  <Card className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-12 w-12 rounded-full border-2 border-pink-100">
                        <AvatarImage
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </Avatar>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base">
                      "{testimonial.text}"
                    </p>
                  </Card>
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

          {/* Right blur effect - stronger blur */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
