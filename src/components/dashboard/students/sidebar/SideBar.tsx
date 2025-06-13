import Link from "next/link";
import {
  LayoutDashboard,
  Book,
  GraduationCap,
  BrainCircuit,
  Users,
  Award,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-purple-50 hover:text-purple-700",
        active && "bg-purple-100 text-purple-700"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <div className="flex h-full flex-col border-r bg-white w-64">
      <img src="/icons/Black 1.png" alt="" />
      {/* Logo Section */}
      <div className="flex h-14 items-center px-4">
        <span className="text-lg font-semibold text-black">PeakClass</span>
      </div>
      {/* User Profile Section */}
      <div className="flex items-center gap-3 px-4 py-3 border-y">
        <Image
          src="/path-to-profile-pic.jpg" // Replace with actual image path
          alt="Vivian Adams"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="flex items-center gap-1">
          <p className="text-sm font-medium text-gray-800">Vivian Adams</p>
          <span className="text-xs text-gray-500">▼</span>
        </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-auto px-2 py-4">
        <div className="space-y-1">
          <SidebarLink
            href="/"
            icon={LayoutDashboard}
            label="Dashboard"
            active={true}
          />
          <SidebarLink
            href="/exams-subjects"
            icon={Book}
            label="Exams & Subjects"
          />
          <SidebarLink
            href="/my-classes"
            icon={GraduationCap}
            label="My Classes"
          />
          <SidebarLink
            href="/quiz-with-ai"
            icon={BrainCircuit}
            label="Quiz with AI"
          />
          <SidebarLink href="/community" icon={Users} label="Community" />
          <SidebarLink
            href="/certificates"
            icon={Award}
            label="Certificates & Badges"
          />
          <SidebarLink href="/settings" icon={Settings} label="Settings" />
        </div>
      </nav>
    </div>
  );
}