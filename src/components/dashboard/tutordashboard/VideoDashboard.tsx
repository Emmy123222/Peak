// src/components/dasnboard/tutordashboard/VideoDashboard.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import AnalyticsModal from './AnalyticsModal'; // Ensure this path is correct
import Link from 'next/link';
import ChatInterface from './Chat'; // Import the ChatInterface component

interface Subsection {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface Section {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  subsections: Subsection[];
}

interface Subject {
  name: string;
  active: boolean;
}

interface Message {
  text: string;
  time: string;
  isSentByUser: boolean;
}

interface User {
  name: string;
  avatar?: string;
  status?: string;
  communityJoin?: () => void;
}

interface VideoDashboardProps {
  examName: string;
  pastQuestionTitle: string;
  onBack: () => void;
  onYearChange?: (year: string) => void; // Callback to notify parent of year change
}

export default function VideoDashboard({
  examName,
  pastQuestionTitle,
  onBack,
  onYearChange,
}: VideoDashboardProps) {
  const [currentSection, setCurrentSection] = useState("questions-1-10"); // Default to first question
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState('introduction'); // Default to "introduction" expanded
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [showChat, setShowChat] = useState(false); // State to toggle between video and chat
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Extract year from pastQuestionTitle (e.g., "2024 Past questions" -> "2024")
  const currentYear = parseInt(pastQuestionTitle.match(/\d+/)?.[0] || "2024", 10);

  const sections: Section[] = [
    { id: "questions-1-10", title: "Questions 1 to 10", duration: "20 min", completed: true, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-11-20", title: "Questions 11 to 20", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-21-30", title: "Questions 21 to 30", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-31-40", title: "Questions 31 to 40", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-41-50", title: "Questions 41 to 50", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-51-60", title: "Questions 51 to 60", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-61-70", title: "Questions 61 to 70", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-71-80", title: "Questions 71 to 80", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-81-90", title: "Questions 81 to 90", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
    { id: "questions-91-100", title: "Questions 91 to 100", duration: "20 min", completed: false, subsections: [
      { id: "introduction-1", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-2", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-3", title: "Introduction", duration: "2 min", completed: true },
      { id: "introduction-4", title: "Introduction", duration: "2 min", completed: true },
    ]},
  ];

  const subjects: Subject[] = [
    { name: "Mathematics", active: true },
    { name: "English language", active: false },
    { name: "Physics", active: false },
    { name: "Biology", active: false },
    { name: "Chemistry", active: false },
    { name: "Further mathematics", active: false },
  ];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
      setCurrentTime(formatTime(currentTime));
      setDuration(formatTime(duration));
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const toggleSection = (sectionId: string) => {
    if (sectionId.startsWith("questions-")) {
      setCurrentSection(sectionId);
      setExpandedSection(expandedSection === "introduction" ? '' : "introduction"); // Toggle expansion
    }
  };

  const handleNextYear = () => {
    const nextYear = currentYear - 1; // Move to previous year (e.g., 2024 to 2023)
    if (nextYear >= 2001) { // Boundary check (assuming 2001 is the earliest year)
      const newTitle = `${nextYear} Past questions`;
      if (onYearChange) onYearChange(newTitle);
    }
  };

  const handlePrevYear = () => {
    const prevYear = currentYear + 1; // Move to next year (e.g., 2024 to 2025)
    if (prevYear <= 2025) { // Boundary check (assuming 2025 is the latest year)
      const newTitle = `${prevYear} Past questions`;
      if (onYearChange) onYearChange(newTitle);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', updateProgress);
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
    }
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', updateProgress);
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
      }
    };
  }, []);

  // Chat-related state and functions
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello sir, please I would like you to explain something in your video",
      time: "12:07", // Previous time as of last interaction
      isSentByUser: true,
    },
    {
      text: "Hello sir, please I would like you to explain something in your video",
      time: "12:07",
      isSentByUser: false,
    },
  ]);

  const user: User = {
    name: "Ask PeakAI",
    avatar: " /icons/peak11.png",
    status: "Online",
    communityJoin: () => alert("Joined community!"),
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 12:22 PM WAT
      isSentByUser: true,
    };
    setMessages([...messages, newMessage]);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <div className="relative">
      {showChat ? (
        <div className="absolute inset-0 z-10 bg-white p-4">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleCloseChat}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50"
              >
                Back to Video
              </button>
              <h3 className="text-lg font-semibold text-gray-800">Chat with {user.name}</h3>
            </div>
            <div className="flex-1">
              <ChatInterface
                user={user}
                messages={messages}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-6">
          {/* Header with Back Button and Title */}
          <div className="flex items-center justify-between">
           
          </div>

          {/* Subject Tabs and Stats */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <button
                  key={subject.name}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    subject.active
                      ? 'bg-purple-100 text-purple-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-[34px] text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <img src="/icons/time.png" alt="" /> 2hr 30mins
              </span>
              <span className="flex items-center gap-1">
                <img src="/icons/file3.png" alt="" /> 90 Solved questions
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-sm rounded-full border border-[#640789] text-[#640789] flex items-center gap-2 transition-colors"
              >
                View Analytics <img src="/icons/Square.png" alt="" />
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleNextYear}
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-full border border-[#640789] text-[#640789]"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <button
                onClick={handlePrevYear}
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-full border border-[#640789] text-[#640789]"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Content and Section List */}
          <div className="flex gap-6">
            {/* Left Panel (Video) */}
            <div className="w-3/4 space-y-6">
              {/* Video Player */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover"
                  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                  poster="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
                  onClick={togglePlayPause}
                >
                  {!isPlaying && (
                    <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="flex items-center justify-between text-white mb-2">
                    <span>{currentTime}</span>
                    <div className="flex items-center gap-4">
                      <button onClick={togglePlayPause}>
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </button>
                      <Volume2 className="h-5 w-5" />
                      <button onClick={enterFullscreen}>
                        <Maximize2 className="h-5 w-5" />
                      </button>
                    </div>
                    <span>{duration}</span>
                  </div>
                  <div
                    className="w-full h-1 bg-white/30 rounded-full cursor-pointer"
                    onClick={handleProgressClick}
                    ref={progressBarRef}
                  >
                    <div
                      className="h-full bg-purple-600 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Tabs and Tutor Info */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      activeTab === "overview" ? 'bg-purple-100 text-purple-900' : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("notes")}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      activeTab === "notes" ? 'bg-purple-100 text-purple-900' : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Notes
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-gray-600">Tutor</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChat(true)}
                    className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-900 hover:bg-purple-200"
                  >
                    Message
                  </button>
                </div>
              </div>

              {/* Challenge Yourself Section */}
              <div className="bg-[#DCB5FF] rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center gap-4 flex-col">
                  
                 
                    <h2 className="font-montserrat font-medium text-[24px] leading-[32px] tracking-[0]">Challenge yourself</h2>
                    
                  
                  <Link
                  href="/dashboard/tutor/practise-question"
                  className="px-6 py-2 bg-[#FFFFFF] text-[#640789] rounded-full  border border-[#640789]"
                >
                  Attempt practice questions
                </Link>
                </div>
                <img src="/icons/lig.png" alt="" />
              </div>
            </div>

            {/* Right Panel (Section List) */}
            <div className="w-1/4 space-y-2 p-4 rounded-lg">
              {sections.map((section) => (
                <div key={section.id} className="border border-gray-200 p-2 rounded-lg text-black">
                  <div
                    className={`w-full rounded-lg overflow-hidden ${
                      currentSection === section.id ? 'bg-white' : 'bg-white'
                    }`}
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className={`w-full flex items-center justify-between py-3 px-4 text-white transition-all duration-200 ${
                        currentSection !== section.id ? 'opacity-50 hover:opacity-75' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                       <img
  src={
    currentSection === section.id && section.completed
      ? "/icons/green.png"
      : "/icons/gray.png"
  }
  alt="Status"
  className=""
/>

                        <span className="text-sm font-medium text-black">{section.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs">{section.duration}</span>
                        {section.subsections && currentSection === section.id && (
                          <img
                            src="/images/Stroke.png"
                            className="cursor-pointer rotate-180"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedSection('');
                            }}
                            alt="Chevron Up"
                          />
                        )}
                        {section.subsections && currentSection !== section.id && (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    </button>
                  </div>
                  {currentSection === section.id && section.subsections && expandedSection === "introduction" && (
                    <div className="mt-2 space-y-2">
                      {section.subsections.map((subsection) => (
                        <div
                          key={subsection.id}
                          className="flex items-center justify-between py-2 px-4 bg-white text-black rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <img src="/images/Polygon 1.png" alt="Play Icon" />
                            <span className="text-sm text-black">{subsection.title}</span>
                          </div>
                          <span className="text-xs text-black">{subsection.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowChat(true)}
              className="px-4 py-2 text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100"
            >
              Message
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-full">
              Ask to edit
            </button>
          </div> */}

          {/* Analytics Modal */}
          <AnalyticsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
}