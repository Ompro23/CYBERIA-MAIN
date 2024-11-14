"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <div className="flex flex-wrap justify-start items-start text-start">
        <motion.div ref={scope} className="flex justify-start items-center text-start flex-wrap gap-1">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="text-xl text-gray-300 text-start font-Poppins opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className={cn("font-medium text-start flex justify-start items-center ", className)}>
      <div className="text-xl w-full max-w-2xl  text-start text-gray-300 font-Poppins leading-snug tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};
