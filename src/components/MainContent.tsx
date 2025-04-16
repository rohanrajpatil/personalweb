'use client';

import React, { useState } from 'react';

const MainContent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log('Message sent:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-5 border-b border-white/10">
        <div className="flex items-center gap-2 font-medium">
          RohanGPT
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#10a37f] text-white flex items-center justify-center font-bold">
            R
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* About Me Section */}
        <section id="about" className="min-h-screen p-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl text-center">
            Welcome! I'm a passionate developer with expertise in web technologies.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-8 flex flex-col items-center justify-center bg-black/10">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {/* Project Cards */}
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-300">Description of project 1</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-300">Description of project 2</p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="min-h-screen p-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
          <div className="max-w-2xl w-full space-y-8">
            <div className="border-l-2 border-[#10a37f] pl-4">
              <h3 className="text-xl font-semibold">Senior Developer</h3>
              <p className="text-gray-300">Company Name • 2020 - Present</p>
              <p className="text-gray-400 mt-2">Description of role and achievements</p>
            </div>
            <div className="border-l-2 border-[#10a37f] pl-4">
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-gray-300">Previous Company • 2018 - 2020</p>
              <p className="text-gray-400 mt-2">Description of role and achievements</p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="min-h-screen p-8 flex flex-col items-center justify-center bg-black/10">
          <h2 className="text-4xl font-bold mb-8">Research</h2>
          <div className="max-w-2xl w-full space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Research Paper 1</h3>
              <p className="text-gray-300">Abstract and key findings</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Research Paper 2</h3>
              <p className="text-gray-300">Abstract and key findings</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen p-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8">Education</h2>
          <div className="max-w-2xl w-full space-y-8">
            <div className="border-l-2 border-[#10a37f] pl-4">
              <h3 className="text-xl font-semibold">Master's Degree</h3>
              <p className="text-gray-300">University Name • 2018 - 2020</p>
              <p className="text-gray-400 mt-2">Relevant coursework and achievements</p>
            </div>
            <div className="border-l-2 border-[#10a37f] pl-4">
              <h3 className="text-xl font-semibold">Bachelor's Degree</h3>
              <p className="text-gray-300">University Name • 2014 - 2018</p>
              <p className="text-gray-400 mt-2">Relevant coursework and achievements</p>
            </div>
          </div>
        </section>
      </div>

      {/* Input Section - Fixed at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[750px] max-w-[90%]">
        <form onSubmit={handleSubmit}>
          <div className="relative rounded-2xl bg-[#40414f] border border-white/10 shadow-lg">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Shoot me a quick email"
              className="w-full rounded-2xl py-4 px-4 pr-12 bg-transparent text-white outline-none"
            />
            <button 
              type="submit" 
              className={`absolute right-3 bottom-3 ${inputValue.trim() ? 'text-[#10a37f]' : 'text-[#8e8ea0]'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Help Button */}
      <button className="absolute bottom-4 right-4 text-[#8e8ea0] text-lg">?</button>
    </div>
  );
};

export default MainContent; 