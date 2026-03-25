// components/VideoIntro.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoIntro({ onVideoEnd }: { onVideoEnd: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(console.error);

    const handleEnded = () => {
      setIsFading(true);           // Trigger fade-out
      setTimeout(onVideoEnd, 800); // Wait for fade to finish
    };

    video.addEventListener('ended', handleEnded);

    return () => video.removeEventListener('ended', handleEnded);
  }, [onVideoEnd]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-800 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="/coffee.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        autoPlay
      />

      {/* Skip button */}
      <button
        onClick={() => {
          setIsFading(true);
          setTimeout(onVideoEnd, 600);
        }}
        className="absolute bottom-8 right-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all z-10"
      >
        Skip Intro →
      </button>
    </div>
  );
}