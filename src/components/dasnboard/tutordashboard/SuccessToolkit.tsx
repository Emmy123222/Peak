// components/SuccessToolkit.tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, BookOpen, Link as LinkIcon } from "lucide-react";

interface SuccessToolkitProps {
  examName: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export default function SuccessToolkit({
  examName,
  description,
  features,
  icon,
  color,
}: SuccessToolkitProps) {
  // Sample resources (you can replace this with actual data or fetch from an API)
  const resources = [
    {
      title: `${examName} Past Papers`,
      description: `Access past ${examName} papers to practice with real exam questions.`,
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      link: "#", // Replace with actual link or downloadable file path
    },
    {
      title: `${examName} Study Guide`,
      description: `A comprehensive guide covering key ${examName} topics and tips.`,
      icon: <BookOpen className="h-5 w-5 text-muted-foreground" />,
      link: "#", // Replace with actual link or downloadable file path
    },
    {
      title: `External ${examName} Resources`,
      description: `Links to official ${examName} resources and recommended websites.`,
      icon: <LinkIcon className="h-5 w-5 text-muted-foreground" />,
      link: "#", // Replace with actual link or downloadable file path
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section with Background and Icon */}
      <div className={`relative ${color} rounded-2xl h-40 flex items-center justify-center`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">{icon}</span>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-gray-100 rounded-2xl p-1">
          <TabsTrigger value="overview" className="rounded-xl">
            Overview
          </TabsTrigger>
          <TabsTrigger value="resources" className="rounded-xl">
            Resources
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {examName} Success Toolkit
            </h2>
            <p className="text-sm text-muted-foreground">{description}</p>
            <h3 className="text-lg font-medium text-foreground">Why Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="resources" className="mt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Resources for {examName}
            </h3>
            <div className="grid gap-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="flex items-center p-4 rounded-xl border border-[#E4E4E7] hover:bg-gray-50 transition-colors"
                >
                  <div className="mr-4">{resource.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {resource.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}