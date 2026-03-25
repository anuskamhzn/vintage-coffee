// app/page.tsx
'use client';

import { useState } from 'react';
import VideoIntro from '@/components/VideoIntro';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Types from '@/components/Types';
import FunFacts from '@/components/FunFacts';
import BrewingMethods from '@/components/BrewingMethods';
import Quiz from '@/components/Quiz';
import FinalSip from '@/components/FinalSip';

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);           // Start fade-out of video
    
    // After video fade-out completes, show the main content with fade-in
    setTimeout(() => {
      setShowContent(true);
    }, 800); // This matches the video fade-out duration
  };

  return (
    <>
      {/* Video Intro - with smooth fade out */}
      {!videoEnded && <VideoIntro onVideoEnd={handleVideoEnd} />}

      {/* Main Website Content */}
      {showContent && (
        <main className="bg-[#f5e8d3] font-serif overflow-hidden">
          <div className="animate-fadeIn">
            <Hero />
            <History />
            <Types />
            <FunFacts />
            <BrewingMethods />
            <Quiz />
            <FinalSip />
          </div>
        </main>
      )}
    </>
  );
}