"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/app/globals.css";
import { ReduxProvider } from "@/lib/redux-provider";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();

  return (

    <div className="flex min-h-screen">
      {/* Left side with background + foreground image */}
      <div className=" lg:flex md:w-1/2 relative max-lg:hidden">
        {/* Background image */}
        <Image
          src="/icons/background.png"
          alt="Background"

          priority
          width={713}
          height={904}
        />

        {/* Foreground image (woman) */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <img
            src="/icons/woman.png"
            alt="Student with books"
            width={674}
            height={400}
            className="w-[674px] h-auto"
          />
        </div>
      </div>

      {/* Right side with content */}
      <div className="w-full  flex items-center justify-center p-6">
        <div className="w-full max-w-md"><ReduxProvider>{children}</ReduxProvider></div>
              
      </div>
    </div>

  );
}
