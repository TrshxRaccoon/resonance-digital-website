// components/AnimatedColorText.tsx
"use client";

import { useEffect, useState } from "react";

type Props = {
  whiteText: string;
  blueText: string;
  className?: string;
};

/**
 * Renders a two-part paragraph where the first part is static white and the
 * second part appears using a typewriter animation on mount.
 */
export default function AnimatedColorText({ whiteText, blueText, className = "" }: Props) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);

    const intervalMs = Math.max(5, 1500 / Math.max(blueText.length, 1));

    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= blueText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [blueText]);

  const hiddenText = blueText.slice(visibleChars);
  const visibleText = blueText.slice(0, visibleChars);

  return (
    <p
      className={`font-display text-[32px] md:text-[36px] lg:text-[40px] leading-[1.3] max-w-[1200px] font-bold ${className}`}
      style={{ 
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'auto'
      }}
    >
      <span className="text-white">{whiteText} </span>
      <span className="text-white">
        <span>{visibleText}</span>
        <span className="opacity-0">{hiddenText}</span>
      </span>
    </p>
  );
}
