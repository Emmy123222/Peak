import React from "react";
import { Button } from "@/components/ui/button";

const UnlockSection = () => {
  return (
    <section className="w-full py-12 bg-[#FCF4FF]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-start gap-8">
          {/* Left side (Images) - Desktop */}
          <div className="flex flex-col">
            <div className="gap-4">
              {/* Top left image with purple border */}
              <div className="">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ borderRadius: "24px" }}
                >
                  <img
                    src="/images/Learningboy.png"
                    alt="Student learning"
                    className="w-[310.68px] h-[207.3px]"
                  />
                </div>
              </div>

              {/* Top right image with orange border */}
              <div className="flex mt-4 gap-4">
                <div className="">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ borderRadius: "24px" }}
                  >
                    <img
                      src="/images/Kid.png"
                      alt="Student studying"
                      className="w-[228.6px] h-[152.4px]"
                    />
                  </div>
                </div>

                {/* Bottom image with purple border */}
                <div className="">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ borderRadius: "24px" }}
                  >
                    <img
                      src="/images/Learning.png"
                      alt="Student learning"
                      className="w-[300px] h-[261.33px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Content) - Desktop */}
          <div className="">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Unlock Your Child's
              <br />
              Academic Superpowers
            </h2>
            <p className="text-gray-700 mb-6">
              Get real-time visibility into your child's learning journey with
              PeakClass's Parent Portal:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div>
                  <span className="font-semibold">Live grade tracking</span>{" "}
                  <span className="text-gray-700">across all subjects</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div>
                  <span className="font-semibold">AI-powered insights</span>{" "}
                  <span className="text-gray-700">on strengths/weaknesses</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div>
                  <span className="font-semibold">Instant tutor alerts</span>{" "}
                  <span className="text-gray-700">when help is needed</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div>
                  <span className="font-semibold">Personalized roadmap</span>{" "}
                  <span className="text-gray-700">to exam success</span>
                </div>
              </div>
            </div>

            <p className="mt-6 mb-6 font-medium">
              Join other parents who've boosted their child's grades by 35%+
            </p>

            <Button className="rounded-full px-8 py-2 h-auto text-base font-medium bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50">
              Sign up as a parent
            </Button>
          </div>
        </div>

        {/* Mobile layout (matches the image) */}
        <div className="md:hidden flex flex-col">
          {/* Images section - Mobile */}
          <div className="flex flex-col">
            <div className="gap-4">
              {/* Top left image with purple border */}
              <div className="">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ borderRadius: "24px" }}
                >
                  <img
                    src="/images/Learningboy.png"
                    alt="Student learning"
                    className="w-[212.6px] h-[141.86px]"
                  />
                </div>
              </div>

              {/* Top right image with orange border */}
              <div className="flex mt-4 gap-4">
                <div className="">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ borderRadius: "24px" }}
                  >
                    <img
                      src="/images/Kid.png"
                      alt="Student studying"
                      className="w-[228.6px] h-[152.4px]"
                    />
                  </div>
                </div>

                {/* Bottom image with purple border */}
                <div className="">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ borderRadius: "24px" }}
                  >
                    <img
                      src="/images/Learning.png"
                      alt="Student learning"
                      className="w-[170.62px] h-[171.99px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section - Mobile */}
          <div className="px-4">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Unlock Your Child's Academic Superpowers
            </h2>

            <p className="text-gray-700 mb-4 text-sm">
              Get real-time visibility into your child's learning journey with
              PeakClass's Parent Portal:
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="text-sm">
                  <span className="font-semibold">Live grade tracking</span>{" "}
                  <span className="text-gray-700">across all subjects</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="text-sm">
                  <span className="font-semibold">AI-powered insights</span>{" "}
                  <span className="text-gray-700">on strengths/weaknesses</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="text-sm">
                  <span className="font-semibold">Instant tutor alerts</span>{" "}
                  <span className="text-gray-700">when help is needed</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="text-sm">
                  <span className="font-semibold">Personalized roadmap</span>{" "}
                  <span className="text-gray-700">to exam success</span>
                </div>
              </div>
            </div>

            <p className="mb-4 text-sm font-medium">
              Join other parents who've boosted their child's grades by 35%+
            </p>

            <div className="flex  mb-6">
              <Button className="rounded-full px-8 py-2 h-auto text-base font-medium bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50">
                Sign up as a parent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
