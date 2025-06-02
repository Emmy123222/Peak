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
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}

function SidebarLink({
  href,
  icon: Icon,
  label,
  active,
  collapsed,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-transform w-full box-border",
        active && "bg-purple-200 text-purple-700",
        collapsed &&
          "flex justify-center items-center h-[45px] w-[45px] border border-gray-300 p-0 mx-auto"
      )}
    >
      <Icon className={cn("w-5 h-5", collapsed && "mx-auto")} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

function Sidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-20">
        <img
          src="/icons/Black 1.png"
          alt="PeakClass Logo"
          className={cn(
            "transition-transform",
            collapsed ? "w-8 h-8" : "w-[60px] h-[45px]"
          )}
        />
      </div>

      {/* User Profile */}
      <div className="mt-4">
        <div
          className={cn(
            "flex items-center p-2 mb-4 transition-transform",
            collapsed
              ? "justify-center border border-[#E4E4E4] h-[48px] w-[45px] mx-auto rounded-[14px]"
              : "mx-4 h-[48px] rounded-[20px] border border-[#E4E4E4]"
          )}
        >
          <img
            src="/icons/bags.png"
            alt="User Avatar"
            className="w-[30px] h-[30px]"
          />
          {!collapsed && (
            <>
              <div className="flex-1 pl-2">
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
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-auto px-2">
          <div className="space-y-4">
            <SidebarLink
              href="/dashboard/tutor"
              icon={LayoutDashboard}
              label="Dashboard"
              active={pathname === "/dashboard/tutor"}
              collapsed={collapsed}
            />
            <SidebarLink
              href="/dashboard/tutor/exams-subjects"
              icon={Book}
              label="Exams & Subjects"
              active={pathname === "/dashboard/tutor/exams-subjects"}
              collapsed={collapsed}
            />
            <SidebarLink
              href="/dashboard/tutor/my-classes"
              icon={GraduationCap}
              label="My Classes"
              active={pathname === "/dashboard/tutor/my-classes"}
              collapsed={collapsed}
            />
            <SidebarLink
              href="/dashboard/tutor/quiz-with-ai"
              icon={BrainCircuit}
              label="Quiz with AI"
              active={pathname === "/dashboard/tutor/quiz-with-ai"}
              collapsed={collapsed}
            />
            <SidebarLink
              href="/dashboard/tutor/community"
              icon={Users}
              label="Community"
              active={pathname === "/dashboard/tutor/community"}
              collapsed={collapsed}
            />
            <SidebarLink
              href="/dashboard/tutor/certificates"
              icon={Award}
              label="Certificates & Badges"
              active={pathname === "/dashboard/tutor/certificates"}
              collapsed={collapsed}
            />
            <SidebarLink
              href="/dashboard/tutor/settings"
              icon={Settings}
              label="Settings"
              active={pathname === "/dashboard/tutor/settings"}
              collapsed={collapsed}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar with hardware-accelerated transform */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex flex-col lg:relative bg-white shadow-md transform-gpu",
          "transition-[width] duration-200 ease-out will-change-[width]",
          sidebarOpen ? "w-64" : "w-[106px]"
        )}
      >
        <Sidebar collapsed={!sidebarOpen} />
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={cn(
          "fixed top-[50px] z-50 hidden lg:flex items-center justify-center rounded-r",
          "transition-[left] duration-300 ease-out will-change-[left]",
          sidebarOpen ? "lg:left-[244px]" : "lg:left-[95px]"
        )}
      >
        <img
          src="/icons/Home.png"
          className="w-[24px] h-[24px] transform-gpu cursor-pointer"
          alt="Toggle"
        />
      </button>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-40 bg-white text-black p-4 flex items-center justify-between shadow-md h-[84px]">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/iconss (1).png" alt="Icon 1" className="w-6 h-6" />
            <img src="/icons/iconss (2).png" alt="Icon 2" className="w-6 h-6" />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}