import React, { useState } from 'react';

const MainContent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Handle message submission here
      console.log('Message sent:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] text-white relative">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-5">
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

      {/* Welcome Message */}
      <div className="flex flex-col items-center justify-center h-full pb-32">
        <h1 className="text-3xl font-medium mb-12">What can I help with?</h1>
      </div>

      {/* Input Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[750px] max-w-[90%]">
        <form onSubmit={handleSubmit}>
          <div className="relative rounded-2xl bg-[#40414f] border border-white/10 shadow-lg">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask anything"
              className="w-full rounded-2xl py-4 px-4 pr-12 bg-transparent text-white outline-none"
            />
            <div className="absolute right-3 bottom-3 flex gap-2">
              <button type="button" className="text-[#8e8ea0] hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button type="submit" className={`${inputValue.trim() ? 'text-[#10a37f]' : 'text-[#8e8ea0]'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </form>

        {/* Input Tools */}
        <div className="flex gap-2 mt-2">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#202123] text-[#ECECF1] text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Search
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#202123] text-[#ECECF1] text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M2.66998 18.95L7.59998 15.64C8.38998 15.09 9.52998 15.13 10.27 15.73L10.57 16C11.35 16.72 12.61 16.72 13.39 16L17.55 12.44C18.33 11.74 19.59 11.73 20.38 12.42L22 13.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reason
          </button>
          <button className="text-[#8e8ea0]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="12" r="1" fill="currentColor"/>
              <circle cx="12" cy="12" r="1" fill="currentColor"/>
              <circle cx="19" cy="12" r="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Help Button */}
      <button className="absolute bottom-4 right-4 text-[#8e8ea0] text-lg">?</button>
    </div>
  );
};

export default MainContent; 