"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tutors = [
  {
    name: "Tony Abraham",
    image: "/images/man.png",
    subject: "Chemistry",
  },
  {
    name: "Hilda Mason",
    image: "/images/girl.png",
    subject: "Chemistry",
  },
  {
    name: "Angela Adams",
    image: "/images/girl1.png",
    subject: "Chemistry",
  },
  {
    name: "Phillip Davis",
    image: "/images/man1.png",
    subject: "Physics",
  },
  {
    name: "Nathan Davidson",
    image: "/images/man2.png",
    subject: "Biology",
  },
];

const Tutors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

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

  return (
    <section className="w-full py-8 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
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
              className="border rounded-full px-6 py-3 h-auto"
            >
              Become a tutor
            </Button>
            <Button className="rounded-full px-6 py-3 h-auto bg-purple-700 hover:bg-purple-800 text-white">
              Find Tutor
            </Button>
          </div>

          {/* Tutor Cards */}
          {isMobile ? (
            <>
              <div className="w-full flex justify-center">
                <div className="w-64 text-center">
                  <img
                    src={tutors[currentIndex].image}
                    alt={tutors[currentIndex].name}
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="mt-4">
                    <h3 className="font-bold text-lg">
                      {tutors[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {tutors[currentIndex].subject}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center mt-4 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <img src="/icons/Arrow.png" alt="" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full bg-purple-700 text-white hover:bg-purple-800"
                >
                  <img src="/icons/Arrow1.png" alt="" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex justify-center space-x-2 mt-4">
                {tutors.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentIndex ? "bg-purple-700" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center gap-8 w-full flex-wrap">
              {tutors.map((tutor, index) => (
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
              ))}
            </div>
          )}
          <div className="flex justify-center mt-4 space-x-4 max-sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <img src="/icons/Arrow.png" alt="" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-purple-700 text-white hover:bg-purple-800"
            >
              <img src="/icons/Arrow1.png" alt="" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutors;
