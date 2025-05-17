"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  Award,
  BrainCircuit,
} from "lucide-react";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/tutor/dashboard",
  },
  {
    icon: BookOpen,
    label: "Exams & Subjects",
    href: "/tutor/exams",
  },
  {
    icon: Users,
    label: "My Classes",
    href: "/tutor/classes",
  },
  {
    icon: BrainCircuit,
    label: "Quiz with AI",
    href: "/tutor/quiz",
  },
  {
    icon: Users,
    label: "Community",
    href: "/tutor/community",
  },
  {
    icon: Award,
    label: "Certificates & Badges",
    href: "/tutor/certificates",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/tutor/settings",
  },
];

export default function TutorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-6">
          <Link href="/tutor/dashboard">
            <img src="/images/navbar/peak.png" alt="Logo" className="h-8" />
          </Link>
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-purple-50 text-purple-700 border-r-2 border-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}