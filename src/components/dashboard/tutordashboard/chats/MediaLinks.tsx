import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Image, FileText, Link as LinkIcon, Download } from 'lucide-react';

interface MediaLinksProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MediaLinks({ isOpen, onToggle }: MediaLinksProps) {
  const [activeTab, setActiveTab] = useState('Docs');

  const tabs = [
    { id: 'Media' },
    { id: 'Docs' },
    { id: 'Link' },
  ];

  // Sample data based on screenshots
  const docs = [
    { name: 'Hours of service.zip', size: '47 MB', type: 'ZIP' },
    { name: 'Hours of service.zip', size: '47 MB', type: 'ZIP' },
    { name: 'Hours of service.zip', size: '47 MB', type: 'ZIP' },
  ];

  const links = [
    { url: 'meet.google.com/wpc-zdli-aap', file: 'Hours of service.zip', size: '47 MB', type: 'ZIP' },
    { url: 'meet.google.com/wpc-zdli-aap', file: 'Hours of service.zip', size: '47 MB', type: 'ZIP' },
    { url: 'meet.google.com/wpc-zdli-aap', file: 'Hours of service.zip', size: '47 MB', type: 'ZIP' },
  ];

  return (
    <div className="">
      {isOpen && (
        <div className="p-4">
          <div className="flex bg-[#F3F5F9] p-1 rounded-[24px] h-[50px] mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex items-center justify-center text-sm py-2 px-3 font-medium transition-all rounded-full ${
                  activeTab === tab.id 
                    ? 'bg-[#F4D8FF] text-purple-700 shadow-sm mx-1' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.id}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'Media' && (
                <div className="grid grid-cols-3 gap-3 mb-2">
                  {Array(9).fill(undefined).map((_, index) => (
                    <motion.div
                      key={index}
                      className="aspect-video bg-neutral-100 rounded-lg overflow-hidden hover:shadow-md cursor-pointer group relative "
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                        <Image className="w-5 h-5 text-purple-600" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'Docs' && (
                <div className="space-y-3 max-h-64 ">
                  {docs.map((doc, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-lg p-4"
                    >
                      {/* Header with Tutor and Phone */}
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3 border-b pb-3 border-[#E4E4E4]">
                        <span>Tutor</span>
                        <span>+234 804 789 3459</span>
                      </div>
                      
                      {/* File Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="">
                             <img src="/icons/File.png" alt="" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{doc.name}</div>
                            <div className="text-sm text-gray-500">{doc.type} • {doc.size}</div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-200 rounded-full border border-[#E4E4E4] transition-colors">
                          <img src="/icons/Download.png" alt="" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Link' && (
                <div className="space-y-3 max-h-64 ">
                  {links.map((link, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-lg p-4"
                    >
                      {/* Header with Tutor and Phone */}
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3 border-b pb-3 border-[#E4E4E4]">
                        <span>Tutor</span>
                        <span>+234 804 789 3459</span>
                      </div>
                      
                      {/* File Info */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="">
                            <img src="/icons/File.png" alt="" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{link.file}</div>
                            <div className="text-sm text-gray-500">{link.type} • {link.size}</div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                          
                        </button>
                      </div>
                      
                      {/* Link */}
                      <a
                        href={`https://${link.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline block"
                      >
                        {link.url}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            
          </motion.div>
        </div>
      )}
    </div>
  );
}