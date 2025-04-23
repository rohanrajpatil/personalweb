'use client';

import React, { useState, useEffect, useRef } from 'react';
import MouseMask from './MouseMask';
const MainContent = () => {
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [messages, setMessages] = useState<{ text: string; showResponse: boolean }[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (messages.length > 0 && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    // Auto-resize the textarea
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsSending(true);
    setSendStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setMessages(prev => [...prev, { text: inputValue, showResponse: true }]);
      setInputValue('');
    } catch (error) {
      setSendStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const UserMessage = ({ message }: { message: string }) => (
    <div className="flex justify-end mb-2 px-48 items-center gap-4">
        {/* Icon on the right (due to flex-row-reverse on the container) */}
        <div className="w-8 h-8 rounded-full bg-[#8e8ea0] flex items-center justify-center text-white font-semibold flex-shrink-0">
           A {/* Or an icon */}
        </div>
        {/* Message bubble - placed BEFORE the icon in the HTML flow */}
        <div className="bg-[#343541] rounded-2xl px-4 py-2 inline-block text-white max-w-lg overflow-hidden break-words"> {/* Use a slightly different background than user if desired */}
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
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;             /* Chrome, Safari and Opera */
        }
      `}</style>



        <MouseMask />


      {/* Top Navigation - Now Right Side Navigation */}
      <div className="fixed right-0 top-0 bottom-0 w-20 flex flex-col items-center py-5">
        <div className="absolute top-5 -left-20">
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              RohanGPT
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-3 z-50">
                <div className="flex justify-around items-center px-4">
                  {/* GitHub Icon */}
                  <a href="https://github.com/rohanrajpatil" className="text-white hover:text-[#10a37f] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/in/rohan-patil-4971942b9/" className="text-white hover:text-[#10a37f] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Download/Resume Icon */}
                  <a href="#" className="text-white hover:text-[#10a37f] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto pb-0 overscroll-contain scrollbar-hide">
        {/* About Me Section */}
        <div id="about" className="h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="Who is this?" />
          </div>
          <AssistantMessage>
            <section id="about" className="flex flex-col items-center justify-center">
              {/* ← HEADSHOT ABOVE TITLE */}
              <img
                src="/headshot.png"
                alt="Headshot"
                className="w-64 h-64 rounded-full mb-6 object-cover relative bg-[#1a1a1a] z-20"
              />

              <h2 className="text-4xl font-bold mb-8">Rohan Rajasekhara Patil</h2>
              <p className="text-lg text-gray-300 max-w-2xl text-center">
              Welcome! I’m a passionate developer eager to deepen my grasp of machine learning and to explore both its real‑world applications and the underlying mechanics that make it tick.
              </p>
            </section>
          </AssistantMessage>
        </div>
        {/* … */}

        {/* Projects Section */}
        <div id="projects" className="h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="What have you worked on?" />
          </div>
          <AssistantMessage>
            <section id="projects" className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
              <div className="group relative">
                  {/* Keep the gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Inner card div with background and inverted text colors on hover */}
                  <div className="bg-[#2a2a2a] p-6 rounded-lg scale-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,163,127,0.15)] cursor-pointer relative transform transition-all duration-300 ease-in-out hover:bg-[#10a37f]"> {/* Background transitions to accent green */}

                    {/* Modified content - Text colors invert to dark on hover */}
                    {/* Using black for heading, dark gray for paragraph */}
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-black">Project 1</h3> {/* Text changes to black */}
                    <p className="text-gray-300 group-hover:text-gray-800">Description of project 1</p> {/* Text changes to dark gray */}

                  </div>
                </div>
                <div className="group relative">
                  {/* Keep the gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Inner card div with background and inverted text colors on hover */}
                  <div className="bg-[#2a2a2a] p-6 rounded-lg scale-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,163,127,0.15)] cursor-pointer relative transform transition-all duration-300 ease-in-out hover:bg-[#10a37f]"> {/* Background transitions to accent green */}

                    {/* Modified content - Text colors invert to dark on hover */}
                    {/* Using black for heading, dark gray for paragraph */}
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-black">Project 2</h3> {/* Text changes to black */}
                    <p className="text-gray-300 group-hover:text-gray-800">Description of project 2</p> {/* Text changes to dark gray */}

                  </div>
                </div>
              </div>
            </section>
          </AssistantMessage>
        </div>

        {/* Work Experience Section */}
        <div id="experience" className="h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="Tell me about your work experience" />
          </div>
          <AssistantMessage>
            <section id="experience" className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
              <div className="max-w-2xl w-full space-y-8">
                <div className="relative group">
                  <div className="absolute -left-3 top-0 h-full w-[2px] bg-gradient-to-b from-[#10a37f] to-transparent" />
                  <div className="bg-[#2a2a2a] p-8 rounded-lg transform transition-all  border-l-4 border-[#10a37f] group-hover:translate-x-2">
                    <div className="absolute -left-6 top-8 w-4 h-4 rounded-full bg-[#10a37f] group-hover:scale-150 group-hover:shadow-[0_0_20px_#10a37f] transition-all " />
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#10a37f] transition-colors">AI Specialist in Finance and English</h3>
                        <p className="text-gray-300 mt-1">Outlier</p>
                      </div>
                      <span className="text-sm text-[#10a37f] bg-[#10a37f]/10 px-3 py-1 rounded-full">2024-Present</span>
                    </div>
                    <p className="text-gray-400 mt-4">Design, optimize, and deploy cutting-edge AI models in English and finance, driving impactful, ethical solutions in Generative AI.
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -left-3 top-0 h-full w-[2px] bg-gradient-to-b from-[#10a37f] to-transparent" />
                  <div className="bg-[#2a2a2a] p-8 rounded-lg transform transition-all  border-l-4 border-[#10a37f] group-hover:translate-x-2">
                    <div className="absolute -left-6 top-8 w-4 h-4 rounded-full bg-[#10a37f] group-hover:scale-150 group-hover:shadow-[0_0_20px_#10a37f] transition-all " />
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#10a37f] transition-colors">Python Coding Tutor</h3>
                        <p className="text-gray-300 mt-1">Detroit Education Society</p>
                      </div>
                      <span className="text-sm text-[#10a37f] bg-[#10a37f]/10 px-3 py-1 rounded-full">2022-2023</span>
                    </div>
                    <p className="text-gray-400 mt-4">Prepared Course Materials Taught Coding Language To A Multitude of Students</p>
                  </div>
                </div>
              </div>
            </section>
          </AssistantMessage>
        </div>

        {/* Research Section */}
        <div id="research" className="h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="What research have you done?" />
          </div>
          <AssistantMessage>
            <section className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-8">Research</h2>
              <div className="max-w-3xl w-full mx-auto space-y-4">
                <div className="group relative perspective perspective-origin-bottom">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="bg-[#2a2a2a] p-6 rounded-lg scale-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,163,127,0.2)] hover:bg-[#2d2d2d] cursor-pointer relative transform-style-preserve-3d group-hover:-rotate-x-30 group-hover:rotate-z-6 group-hover:translate-y-5 group-hover:translate-z-10 transition-all duration-300 ease-in-out">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAMCA2MCA2MDYwIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6bTAgMjVjLTUuNTIzIDAtMTAtNC40NzctMTAtMTBzNC40NzctMTAgMTAtMTAgMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-5" />
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#10a37f]">Research Paper 1</h3>
                  <p className="text-gray-300 group-hover:text-gray-200">Abstract and key findings</p>
                  </div>    
                </div>
              </div>
            </section>
          </AssistantMessage>
        </div>

        {/* Education Section */}
        <div id="education" className="h-screen overflow-hidden flex flex-col">
          <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
            <UserMessage message="What's your educational background?" />
          </div>
          <AssistantMessage>
            <section id="education" className="flex flex-col items-center justify-center h-full">
              <h2 className="text-4xl font-bold mb-8">Education</h2>
              <div className="max-w-2xl w-full space-y-6">
                <div className="group">
                  <div className="relative bg-[#2a2a2a] p-6 rounded-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#10a37f] opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#10a37f]/20 flex items-center justify-center group-hover:bg-[#10a37f]/30 transition-colors">
                          <svg className="w-6 h-6 text-[#10a37f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-[#10a37f] transition-colors">In Progress...</h3>
                          <p className="text-gray-300">Novi High School</p>
                        </div>
                      </div>
                      <div className="ml-16">
                        <div className="text-sm text-[#10a37f] mb-2">2021 - 2025</div>
                        <div className="text-gray-400"> {/* Container div for shared text color */}
                        <p className="mb-2">
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200 ease-in-out">Relevant Coursework:</span> Calculus I, II, Multivariable, AP Computer Science
            </p>
            <p className="mb-2">
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200 ease-in-out">Weighted GPA:</span> 4.5+
            </p>
            <p>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200 ease-in-out">ACT Score :</span> 36/36
            </p>
</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AssistantMessage>
        </div>

        {/* Email Messages Section */}
        {messages.map((message, index) => (
          <div key={index} className="h-screen overflow-hidden flex flex-col">
            <div className="min-h-[60px] bg-[#1a1a1a] flex items-end">
              <UserMessage message={message.text} />
            </div>
            {message.showResponse && (
              <AssistantMessage>
                <section className="flex flex-col items-center justify-center">
                  <p className="text-lg text-gray-300 max-w-2xl text-center">
                    Loading...
                  </p>
                </section>
              </AssistantMessage>
            )}
          </div>
        ))}
      </div>

      {/* Input Section - Fixed at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[750px] max-w-[90%] z-40">
        <form onSubmit={handleSubmit}>
          <div className="relative rounded-2xl bg-[#40414f] border border-white/10 shadow-lg flex flex-col-reverse min-h-[56px]">
            <textarea
            onKeyDown={(e) => {

            if (e.key === 'Enter' && !e.shiftKey) {
              
            e.preventDefault();         // don’t insert a newline
              
              handleSubmit(e as any);     // trigger the same submit logic
              
            }
              
          }}
              value={inputValue}
              onChange={handleTextareaChange}
              placeholder="Anymore questions? (this goes to my email)"
              className="w-full rounded-2xl py-4 px-4 pr-12 bg-transparent text-white outline-none resize-none min-h-[56px] max-h-[200px] overflow-y-auto"
              disabled={isSending}
              rows={1}
              style={{ height: 'auto' }}
            />
            <button 
              type="submit" 
              className={`absolute right-3 bottom-3 ${inputValue.trim() ? 'text-[#10a37f]' : 'text-[#8e8ea0]'}`}
              disabled={isSending || !inputValue.trim()}
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