// This is a layout.tsx file for a Next.js application.
import "@/app/globals.css";
import { Toaster } from 'react-hot-toast';
import { ReactNode } from "react";
import { ReduxProvider } from "@/lib/redux-provider";
import AuthBootstrapper from "@/components/auth/authBootstrapper";

export const metadata = {
  title: "Peak",
  description: "Your website description",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <ReduxProvider >
            <AuthBootstrapper/>
            {children}
            </ReduxProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}