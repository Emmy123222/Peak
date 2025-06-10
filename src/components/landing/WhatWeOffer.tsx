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
import { whatWeOffer } from "../../../constant/data/whatWeOffer";
import WhatWeOfferCard from "./WhatWeOfferCard";

const WhatWeOffer = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 justify-between">
          {/* Left side - Title */}
          <div className=" md:w-1/4 mr-48 space-y-8 max-sm:mr-0">
            <h2 className="font-montserrat font-bold max-md:text-4xl text-[48px] leading-[67px] tracking-[0%] whitespace-nowrap">
              What we offer
            </h2>
            <div className="flex flex-col items-center sm:items-start">
              <img src="/images/girlss.png" alt="" className="max-sm:w-full" />
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
              {whatWeOffer.map((item, idx) => (
                <WhatWeOfferCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
