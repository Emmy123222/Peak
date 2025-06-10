"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WaitlistModal from "./WaitlistModal";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <>
      <header className="w-full p-4  bg-white shadow-md relative z-50">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex justify-between items-center max-w-[400px] w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/navbar/peak.png" alt="" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                onClick={()=>setActiveLink("home")}
                className={` hover:text-primary transition-colors ${activeLink=="home"? "font-medium text-[#640789]":""}`}
              >
                Home
              </Link>

              <Link
                href="/contact"
                onClick={()=>setActiveLink("contact")}
                className={` hover:text-primary transition-colors ${activeLink=="contact"? "font-medium text-[#640789]":""}`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* CTA Button */}
          <div className=" ">
            <Button
              className="bg-(--my-primary-color) hover:bg-(--my-primary-color)/90 rounded-full  text-white cursor-pointer"
              onClick={openWaitlist}
            >
              Join waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {/* <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>

              <Link
                href="/contact"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Button
                className="bg-primary hover:bg-primary/90 w-full"
                onClick={openWaitlist}
              >
                Join waitlist
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  );
};

export default Navbar;
