import React from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className="flex h-screen bg-[#1a1a1a] text-white">
      <Sidebar />
      <MainContent />
    </main>
  );
} 