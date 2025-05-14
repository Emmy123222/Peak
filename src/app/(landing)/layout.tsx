// app/layout.tsx
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import "@/app/globals.css";
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
