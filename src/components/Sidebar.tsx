'use client';

import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-64 bg-[#1a1a1a] text-white flex flex-col h-screen border-l border-white/10">
      {/* Header with logos */}
      <div className="flex justify-between items-center p-4">
        <button className="w-8 h-8 relative rounded-full overflow-hidden hover:opacity-80 transition-opacity">
          <Image 
            src="/github.png" 
            alt="GitHub" 
            fill
            className="object-cover p-1"
          />
        </button>
        <button className="w-8 h-8 relative rounded-full overflow-hidden hover:opacity-80 transition-opacity">
          <Image 
            src="/linkedin.png" 
            alt="LinkedIn" 
            fill
            className="object-cover p-1"
          />
        </button>
        <button className="w-8 h-8 relative rounded-full overflow-hidden hover:opacity-80 transition-opacity">
          <Image 
            src="/download.jpg" 
            alt="Download" 
            fill
            className="object-cover p-1"
          />
        </button>
      </div>

      {/* Main Sections - Centered */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-4 space-y-4">
          {/* About Me Section */}
          <div className="cursor-pointer" onClick={() => scrollToSection('about')}>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#2D2E30] hover:bg-[#3D3E40] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="white" strokeWidth="2"/>
                  <path d="M12 6v8M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-medium">About Me</span>
            </div>
          </div>

          {/* Projects Section */}
          <div className="cursor-pointer" onClick={() => scrollToSection('projects')}>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2D2E30] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h18v18H3V3z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 9h18M9 9v12" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Projects</span>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="cursor-pointer" onClick={() => scrollToSection('experience')}>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2D2E30] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="white" strokeWidth="2"/>
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Work Experience</span>
            </div>
          </div>

          {/* Research Section */}
          <div className="cursor-pointer" onClick={() => scrollToSection('research')}>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2D2E30] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 21h4M4 7h16M4 15h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3L12 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Research</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="cursor-pointer" onClick={() => scrollToSection('education')}>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2D2E30] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-yellow-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Education</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 