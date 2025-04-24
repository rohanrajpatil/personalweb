// components/MouseMask.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function MouseMask() {
  const bgRef   = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;

        const maskValue = 
          `radial-gradient(300px circle at ${x}px ${y}px, black, transparent 50%)`;
        if (bgRef.current) {
          bgRef.current.style.maskImage        = maskValue;
          bgRef.current.style.webkitMaskImage  = maskValue;
        }

        if (glowRef.current) {
          glowRef.current.style.background = 
            `radial-gradient(300px circle at ${x}px ${y}px, 
                             rgba(29, 78, 216, 0.3), transparent 50%)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Background Image with radial‐mask */}
      <div
        ref={bgRef}
        className="
          fixed inset-0
          bg-[url('/personalweb/neural-net.jpg')]
          bg-cover bg-center
          opacity-100 transition-opacity
          pointer-events-none
        "
      />

      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed inset-0
          z-1 transition-opacity
        "
      />
    </>
  );
}