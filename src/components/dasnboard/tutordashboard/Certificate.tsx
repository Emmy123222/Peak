"use client";

import React from "react";
import { Download, Share2, X } from "lucide-react";

export default function Certificate() {
  return (
<div>
        <div className="flex justify-between items-center p-6 border-b border-[#E4E4E4]">
          <h1 className="text-2xl font-bold text-gray-900">Grade 3</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors rounded-full border border-gray-200">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
            <div className="relative   p-6 flex items-center flex-col">

      {/* Certificate Container */}
<img src="/images/cer.png" alt="" />
      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="flex items-center gap-2  text-[#640789] px-6 py-3 rounded-full  transition-colors font-medium border border-[#640789]">
          <Download size={18} />
          Download PDF
        </button>
        <button className="flex items-center gap-2  text-[#640789] px-6 py-3 rounded-full transition-colors font-medium border border-[#640789]">
          <Share2 size={18} />
          Share
        </button>
      </div>
    </div></div>
  );
}