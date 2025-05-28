import { ReduxProvider } from "@/lib/redux-provider";
import "@/app/globals.css";
import { ReactNode } from "react";
// import AuthBootstrapper from "@/components/auth/authBootstrapper";

export const metadata = {
  title: "Peak",
  description: "Your website description",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
  
      <div className="flex flex-col min-h-screen">
        {/* <AuthBootstrapper/> */}
        {children}
      </div>

  );
}