// app/layout.tsx
import Navbar from "@/app/LandingPage/Navbar";
import Footer from "@/app/LandingPage/Footer";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Peak",
  description: "Your website description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
