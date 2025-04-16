'use client';

import React, { useState, useEffect } from 'react';

const MainContent = () => {
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const UserMessage = ({ message }: { message: string }) => (
    <div className="flex justify-end mb-2 px-48">
      <div className="bg-[#343541] rounded-2xl px-4 py-2 inline-block text-white">
        {message}
      </div>
    </div>
  );

  const AssistantMessage = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#1a1a1a] py-4 min-h-[calc(100vh-120px)] flex items-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Top Navigation */}
      <div className="flex justify-between items-center p-5 bg-[#1a1a1a]">
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
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
        {/* About Me Section */}
        <div className="snap-start h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="Who is this?" />
          </div>
          <AssistantMessage>
            <section id="about" className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-gray-300 max-w-2xl text-center">
                Welcome! I'm a passionate developer with expertise in web technologies.
              </p>
            </section>
          </AssistantMessage>
        </div>

        {/* Projects Section */}
        <div className="snap-start h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="What have you worked on?" />
          </div>
          <AssistantMessage>
            <section id="projects" className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                <div className="bg-[#2a2a2a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                  <p className="text-gray-300">Description of project 1</p>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                  <p className="text-gray-300">Description of project 2</p>
                </div>
              </div>
            </section>
          </AssistantMessage>
        </div>

        {/* Work Experience Section */}
        <div className="snap-start h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="Tell me about your work experience" />
          </div>
          <AssistantMessage>
            <section id="experience" className="flex flex-col items-center justify-center">
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
          </AssistantMessage>
        </div>

        {/* Research Section */}
        <div className="snap-start h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="What research have you done?" />
          </div>
          <AssistantMessage>
            <section id="research" className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-8">Research</h2>
              <div className="max-w-2xl w-full space-y-6">
                <div className="bg-[#2a2a2a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Research Paper 1</h3>
                  <p className="text-gray-300">Abstract and key findings</p>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Research Paper 2</h3>
                  <p className="text-gray-300">Abstract and key findings</p>
                </div>
              </div>
            </section>
          </AssistantMessage>
        </div>

        {/* Education Section */}
        <div className="snap-start h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="What's your educational background?" />
          </div>
          <AssistantMessage>
            <section id="education" className="flex flex-col items-center justify-center">
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
          </AssistantMessage>
        </div>
      </div>

      {/* Input Section - Fixed at bottom */}
      <div className="absolute bottom-8 left-[calc(50%+32px)] transform -translate-x-1/2 w-[750px] max-w-[90%] z-40">
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
      <button className="fixed bottom-4 right-4 text-[#8e8ea0] text-lg z-40">?</button>
    </div>
  );
};

export default MainContent; 