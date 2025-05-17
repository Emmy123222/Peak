// app/layout.tsx
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ReactNode } from "react";


export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>

  );
}