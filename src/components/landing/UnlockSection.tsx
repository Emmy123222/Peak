"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const UnlockSection = () => {
  return (
    <section className="w-full pb-12  bg-[#FCF4FF] overflow-hidden">
      <div className="container mx-auto  md:px-6 relative">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between pt-12 items-start gap-8 ">
          <div className="absolute left-[-50] z-[0] right-[-100] top-[30%]">
            <Image
              src={"/icons/horizontal-stripes.svg"}
              alt="horizontal stripes"
              className="w-[700px] h-[250px]"
              width={400}
              height={200}
            />
          </div>
          <div className="absolute top-[-100] left-[190]">
            <Image
              src={"/icons/vertical-stripes.svg"}
              alt="vertical stripes"
              className="w-[250px] h-full"
              width={200}
              height={200}
            />
          </div>
          {/* Left side (Images) - Desktop */}
          <div className="relative">
            <div className="flex flex-col z-[100]">
              <div className="gap-4">
                {/* Top left image with purple border */}
                <div className="">
                  <div className=" overflow-hidden ">
                    <img
                      src="/images/Learningboy.png"
                      alt="Student learning"
                      className="w-[310.68px] h-[207.3px] "
                    />
                  </div>
                </div>

                {/* Top right image with orange border */}
                <div className="flex mt-4 gap-4">
                  <div className="">
                    <div className=" overflow-hidden">
                      <img
                        src="/images/Kid.png"
                        alt="Student studying"
                        className="w-[228.6px] h-[152.4px] z-50"
                      />
                    </div>
                  </div>

                  {/* Bottom image with purple border */}
                  <div className="">
                    <div className=" overflow-hidden">
                      <img
                        src="/images/Learning.png"
                        alt="Student learning"
                        className="w-[300px] h-[300px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Content) - Desktop */}
          <div className="">
            <h2 className="text-[55px] font-bold mb-6 text-gray-900">
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

            <Link
              href="/auth"
              className="rounded-full px-8 py-2 h-auto text-base font-medium bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
            >
              Sign up as a parent
            </Link>
          </div>
        </div>

        {/* Mobile layout (matches the image) */}
        <div className="md:hidden flex flex-col ">

          {/* Images section - Mobile */}
          <div className="overflow-hidden relative z-0">
          <div className="absolute top-[100] left-0 right-0 bg-amber-600">
            <div className="absolute left-[-50] z-[0] right-[-100] top-[120] ">
              <Image
                src={"/icons/horizontal-stripes.svg"}
                alt="horizontal stripes"
                className="w-[700px] h-[250px]"
                width={400}
                height={200}
              />
            </div>
            <div className="absolute top-[-100] left-[250]">
              <Image
                src={"/icons/vertical-stripes.svg"}
                alt="vertical stripes"
                className="w-[250px] h-full"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col py-12 px-4 z-50">
            <div className="gap-4">
              {/* Top left image with purple border */}
              <div className="">
                <div className=" overflow-hidden">
                  <img
                    src="/images/Learningboy.png"
                    alt="Student learning"
                    className="min-w-[212.6px] min-h-[141.86px]"
                  />
                </div>
              </div>

              {/* Top right image with orange border */}
              <div className="flex mt-4 gap-4">
                <div className="">
                  <div className=" overflow-hidden">
                    <img
                      src="/images/Kid.png"
                      alt="Student studying"
                      className="min-w-[156.6px] min-h-[104.4px]"
                    />
                  </div>
                </div>

                {/* Bottom image with purple border */}
                <div className="">
                  <div className=" overflow-hidden">
                    <img
                      src="/images/Learning.png"
                      alt="Student learning"
                      className="min-w-[170.62px] min-h-[171.99px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


          {/* Content section - Mobile */}
          <div className="p-4 py-8">
            <h2 className="text-4xl md:text-3xl font-bold mb-4 text-gray-900">
              Unlock Your Child's Academic Superpowers
            </h2>

            <p className="text-gray-700 mb-4 md:text-sm ">
              Get real-time visibility into your child's learning journey with
              PeakClass's Parent Portal:
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="max-md:text-sm">
                  <span className="font-semibold">Live grade tracking</span>{" "}
                  <span className="text-gray-700">across all subjects</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="max-md:text-sm">
                  <span className="font-semibold">AI-powered insights</span>{" "}
                  <span className="text-gray-700">on strengths/weaknesses</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="max-md:text-sm">
                  <span className="font-semibold">Instant tutor alerts</span>{" "}
                  <span className="text-gray-700">when help is needed</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/icons/Verified Check.png" alt="" />
                <div className="max-md:text-sm">
                  <span className="font-semibold">Personalized roadmap</span>{" "}
                  <span className="text-gray-700">to exam success</span>
                </div>
              </div>
            </div>

            <p className="mb-4 max-md:text-sm font-medium">
              Join other parents who've boosted their child's grades by 35%+
            </p>

            <div className="flex  mb-6 mt-4">
              <Link
                href={"/auth"}
                // onClick={handleSignUpClick}
                className="rounded-full px-8 py-2 h-auto text-base font-medium bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
              >
                Sign up as a parent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
