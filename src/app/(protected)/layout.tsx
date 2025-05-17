import { ReduxProvider } from "@/lib/redux-provider";
import "@/app/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Peak",
  description: "Your website description",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ReduxProvider >{children}</ReduxProvider>
      </body>
    </html>
  );
}