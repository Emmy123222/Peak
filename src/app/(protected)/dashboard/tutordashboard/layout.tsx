// src/app/(protected)/dashboard/tutordashboard/layout.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Book,
  GraduationCap,
  BrainCircuit,
  Users,
  Award,
  Settings,
  ChevronRight,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";

// SidebarLink component
interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

function SidebarLink({ href, icon: Icon, label, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-primary/10 hover:text-primary",
        active && "bg-primary/10 text-primary"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}

// Sidebar component
function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col shadow-md bg-background w-64 p-4">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20">
        <img src="/icons/Black 1.png" alt="PeakClass Logo" className="w-[54.39px] h-[45px]" />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center p-4 border border-[#E4E4E4] w-[220px] h-[48px] rounded-[20px]">
        <img
          src="/icons/bags.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <span className="text-base font-medium">Vivian Adams</span>
        </div>
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-auto p-4">
        <div className="space-y-1">
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard"
              icon={LayoutDashboard}
              label="Dashboard"
              active={pathname === "/dashboard/tutordashboard"}
            />
          </div>
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard/exams-subjects" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard/exams-subjects"
              icon={Book}
              label="Exams & Subjects"
              active={pathname === "/dashboard/tutordashboard/exams-subjects"}
            />
          </div>
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard/my-classes" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard/my-classes"
              icon={GraduationCap}
              label="My Classes"
              active={pathname === "/dashboard/tutordashboard/my-classes"}
            />
          </div>
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard/quiz-with-ai" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard/quiz-with-ai"
              icon={BrainCircuit}
              label="Quiz with AI"
              active={pathname === "/dashboard/tutordashboard/quiz-with-ai"}
            />
          </div>
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard/community" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard/community"
              icon={Users}
              label="Community"
              active={pathname === "/dashboard/tutordashboard/community"}
            />
          </div>
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard/certificates" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard/certificates"
              icon={Award}
              label="Certificates & Badges"
              active={pathname === "/dashboard/tutordashboard/certificates"}
            />
          </div>
          <div
            className={cn(
              "rounded",
              pathname === "/dashboard/tutordashboard/settings" && "bg-purple-200"
            )}
          >
            <SidebarLink
              href="/dashboard/tutordashboard/settings"
              icon={Settings}
              label="Settings"
              active={pathname === "/dashboard/tutordashboard/settings"}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

// Dashboard layout component
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      {sidebarOpen && (
        <div
          className={cn(
            "fixed inset-y-0 z-50 flex w-72 flex-col lg:relative transition-opacity duration-300 ease-in-out",
            sidebarOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-40 shadow-md bg-background w-full">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="mr-2 lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="mr-2 hidden lg:flex"
              >
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-all",
                    !sidebarOpen && "rotate-180"
                  )}
                />
              </Button>
              <p className="font-semibold text-[20px] leading-[30px] tracking-[0] font-montserrat">
                Dashboard
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/iconss (1).png" alt="Icon 1" />
              <img src="/icons/iconss (2).png" alt="Icon 2" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-muted/20 p-4 lg:p-6 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}