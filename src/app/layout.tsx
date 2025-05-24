// This is a layout.tsx file for a Next.js application.
import "@/app/globals.css";
import { Toaster } from 'react-hot-toast';
import { ReactNode } from "react";

export const metadata = {
  title: "Peak",
  description: "Your website description",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}