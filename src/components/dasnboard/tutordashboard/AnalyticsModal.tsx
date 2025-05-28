import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import PerformanceChart from './PerformanceChart';
import MetricCard from './MetricCard';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsModal({ isOpen, onClose }: AnalyticsModalProps) {
  const [timeframe, setTimeframe] = useState('Weekly');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Animation classes for modal entry
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');
  
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow the backdrop to appear first
      setTimeout(() => {
        setAnimationClass('opacity-100 scale-100');
      }, 50);
    } else {
      setAnimationClass('opacity-0 scale-95');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const timeframeOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
      <div 
        className={`bg-white rounded-2xl w-full max-w-4xl p-6 shadow-xl relative transition-all duration-300 ease-out ${animationClass}`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">2001 Mathematics analytics</h2>
        
        <div className="space-y-8">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetricCard 
              icon="practice"
              title="Total number of practice questions taken" 
              value="700"
            />
            <MetricCard 
              icon="score"
              title="Average practice question score" 
              value="70%"
            />
          </div>

          {/* Performance Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Your performance so far</h3>
              
              {/* Timeframe Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {timeframe} 
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 w-32 animate-fade-in">
                    {timeframeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setTimeframe(option);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm ${
                          timeframe === option 
                            ? 'bg-purple-50 text-purple-700' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Chart */}
            <div className="h-64">
              <PerformanceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}