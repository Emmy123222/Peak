"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Left side with background + foreground image */}
      <div className=" md:flex md:w-1/2 relative max-sm:hidden">
        {/* Background image */}
        <Image
          src="/icons/background.png"
          alt="Background"
          priority
          width={713}
          height={904}
        />

        {/* Foreground image (woman) */}
        <div className="absolute bottom-0 left-0 z-10">
          <Image
            src="/icons/woman.png"
            alt="Student with books"
            width={674}
            height={400}
            // style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Right side with content */}
      <div className="w-full  flex items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
