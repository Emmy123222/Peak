import Image from "next/image";
import Link from "next/link";

interface WhatWeOfferCardProps {
  title: string;
  imageSrc: string;
  description: string;
  link?: string;
  badge?: string;
}

export default function WhatWeOfferCard({
  title,
  imageSrc,
  description,
  link,
  badge,
}: WhatWeOfferCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start mb-4 gap-3">
        <Image src={imageSrc} alt={title} width={40} height={40} />
        <h3 className="text-xl max-sm:text-lg font-semibold">{title}</h3>
      </div>

      <p className="text-[#484848] mb-4 font-montserrat font-normal text-[16px] leading-[24px]">
        {description}
      </p>

      {link && (
        <Link
          href={link}
          className="text-purple-600 font-medium hover:underline flex items-center mt-2"
        >
          Learn more <span className="ml-1">→</span>
        </Link>
      )}

      {badge && (
        <div className="flex items-center">
          <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}
