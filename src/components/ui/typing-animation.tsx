"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    let typingEffect: NodeJS.Timeout;

    if (i < text.length) {
      typingEffect = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      }, duration);
    } else {
      // Animation complete, reset after 5 seconds
      typingEffect = setTimeout(() => {
        setDisplayedText("");
        setI(0);
      }, 5000);
    }

    return () => {
      clearInterval(typingEffect);
      clearTimeout(typingEffect);
    };
  }, [text, duration, i]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
    </h1>
  );
}
