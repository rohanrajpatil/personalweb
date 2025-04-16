import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#202123] text-white flex flex-col h-screen overflow-y-auto">
      {/* Header with logos */}
      <div className="flex justify-between items-center p-4">
        <button className="w-6 h-6 relative">
          <Image src="/pictures/github.png" alt="GitHub" width={24} height={24} className="object-contain" />
        </button>
        <button className="w-6 h-6 relative">
          <Image src="/pictures/linkedin.png" alt="LinkedIn" width={24} height={24} className="object-contain" />
        </button>
        <button className="w-6 h-6 relative">
          <Image src="/pictures/download.jpg" alt="Download" width={24} height={24} className="object-contain" />
        </button>
      </div>

      {/* Models Section */}
      <div className="px-4">
        <div className="flex items-center gap-3 p-2 rounded-md bg-[#2D2E30] cursor-pointer mb-2">
          <div className="w-6 h-6 rounded-full bg-[#5436DA] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>RohanGPT</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2D2E30] cursor-pointer mb-2">
          <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            </svg>
          </div>
          <span>Sora</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2D2E30] cursor-pointer mb-2">
          <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4" strokeWidth="2"/>
              <path d="M12 4V8" strokeWidth="2"/>
              <path d="M12 16V20" strokeWidth="2"/>
              <path d="M4 12L8 12" strokeWidth="2"/>
              <path d="M16 12L20 12" strokeWidth="2"/>
            </svg>
          </div>
          <span>ALPHA GPT</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2D2E30] cursor-pointer mb-2">
          <div className="w-6 h-6 rounded-full bg-[#2DD4BF] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2"/>
              <path d="M3 12H21" strokeWidth="2"/>
            </svg>
          </div>
          <span>AI Email Writer</span>
        </div>

        <div className="flex items-center gap-3 p-2 text-[#8E8EA0] cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2" fill="currentColor"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <circle cx="12" cy="18" r="2" fill="currentColor"/>
          </svg>
          <span>1 more</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="flex items-center gap-3 p-2 text-white cursor-pointer mt-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.34 17a10 10 0 1 1 17.32 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 14l2.5 2.5M12 8v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Explore GPTs</span>
        </div>
      </div>

      {/* History Section */}
      <div className="mt-4">
        <div className="px-4 py-2 text-xs text-[#8E8EA0] font-medium">Yesterday</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">WWI and Russian Revolution</div>

        <div className="px-4 py-2 text-xs text-[#8E8EA0] font-medium">Previous 30 Days</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Research Achievement and LOCI</div>

        <div className="px-4 py-2 text-xs text-[#8E8EA0] font-medium">February</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Modernity in European History</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Kenneth's Mural Analysis Reque...</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Texto extraído y resumido</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Fancy Synonyms for Applying</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Word Search Challenge</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Russian History Reading Guide</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Unit 7A Definitions</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">European History Summary</div>
        <div className="px-4 py-2 text-sm cursor-pointer hover:bg-[#2D2E30]">Practica Cancion Retry Request</div>
      </div>
    </div>
  );
};

export default Sidebar; 