import {
  BookOpen,
  BookText,
  Code,
  GraduationCap,
  User,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 justify-between">
          {/* Left side - Title */}
          <div className=" md:w-1/4 mr-48 space-y-8 max-sm:mr-0">
            <h2 className="font-montserrat font-bold text-[48px] leading-[67px] tracking-[0%] whitespace-nowrap">
              What we offer
            </h2>
            <div className="flex flex-col items-center sm:items-start">
              <img src="/images/girlss.png" alt="" className="" />
              <img
                src="/icons/Vector (4).png"
                alt=""
                className=" ml-0 sm:ml-28"
              />
            </div>
          </div>

          {/* Right side - Content grid */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Exam Prep */}
              <div className="flex flex-col">
                <div className="flex items-start mb-4 gap-3">
                  <img src="/images/What we offer/Exam.png" alt="" />
                  <h3 className="text-xl font-semibold">Exam Prep</h3>
                </div>
                <p className="text-[#484848] mb-4 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0%] align-middle">
                  Get access to 1,000+ past questions, expert-curated study
                  plans, and mock exams tailored to your syllabus (WAEC, JAMB,
                  GCSE, SAT, and more). Our AI-powered analytics track your
                  progress, so you focus on weak areas and smash your goals.
                </p>
                <Link
                  href="#"
                  className="text-purple-600 font-medium hover:underline flex items-center mt-2"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>

              {/* Peak Tutors */}
              <div className="flex flex-col">
                <div className="flex items-start mb-4 gap-3">
                  <img src="/images/What we offer/Peak.png" alt="" />
                  <h3 className="text-xl font-semibold">Peak Tutors</h3>
                </div>
                <p className="text-[#484848] mb-4 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0%] align-middle">
                  Learn from the top 1% of tutors—rigorously trained to simplify
                  complex topics. Whether you need help in STEM, humanities, or
                  languages, we match you with the perfect tutor for your
                  learning style and goals.
                </p>
                <Link
                  href="#"
                  className="text-purple-600 font-medium hover:underline flex items-center mt-2"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>

              {/* Summary Notes */}
              <div className="flex flex-col">
                <div className="flex items-start mb-4 gap-3">
                  <img src="/images/What we offer/Summary.png" alt="" />
                  <h3 className="text-xl font-semibold">Summary Notes</h3>
                </div>
                <p className="text-[#484848] mb-4 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0%] align-middle">
                  Concise, visually engaging notes for 10+ subjects—created by
                  experts and toppers. Perfect for last-minute revision, with
                  key concepts, diagrams, and mnemonics to boost retention.
                </p>
                <Link
                  href="#"
                  className="text-purple-600 font-medium hover:underline flex items-center mt-2"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>

              {/* Quiz with AI */}
              <div className="flex flex-col">
                <div className="flex items-start mb-4 gap-3">
                  <img src="/images/What we offer/Quiz.png" alt="" />
                  <h3 className="text-xl font-semibold">Quiz with AI</h3>
                </div>
                <p className="text-[#484848] mb-4 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0%] align-middle">
                  Our adaptive quiz engine generates unlimited practice
                  questions based on your performance. Get instant explanations,
                  video solutions, and personalized challenge levels to keep
                  improving.
                </p>
                <Link
                  href="#"
                  className="text-purple-600 font-medium hover:underline flex items-center mt-2"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>

              {/* Coding */}
              <div className="flex flex-col">
                <div className="flex items-start mb-4 gap-3">
                  <img src="/images/What we offer/Coding.png" alt="" />
                  <h3 className="text-xl font-semibold">Coding</h3>
                </div>
                <p className="text-[#484848] mb-4 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0%] align-middle">
                  From Python to Web Development, our project-based courses turn
                  beginners into confident coders. Kids and teens learn by
                  building real apps, games, and websites—guided by industry
                  professionals.
                </p>
                <div className="flex items-center">
                  <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
