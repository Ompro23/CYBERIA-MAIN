"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem]   overflow-x-auto w-full rounded-md flex flex-col antialiased bg-white dark:bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      <img src="/Logo/msu.png" alt="" className="h-[30vh]   object-contain sm:h-[30vh] sm:w-[40vw] w-[20vw]"/>,
    name: "The Maharaja Sayajirao University of Baroda",
    title: "MSU Baroda is accredited with an 'A+' grade by NAAC, ensuring high educational standards and quality.",
  },
  {
    quote:
    <img src="/Logo/75.png" alt="" className="h-[30vh]  object-contain  sm:object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "University Ka Amrit Mahotsav",
    title: "75 years of Independence, 75 years of Excellence, 75 years of Progress, 75 years of Unity.",
  },
  {
    quote: 
    <img src="/image.png" alt="" className="h-[30vh] object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "Befriends",
    title: "A community powered & AI backed emotional well-being platform. Lets dive in to express yourself, and embark on a soul-stirring adventure with BeFriends",
  },
  {
    quote:
    <img src="/microsoft/image.png" alt="" className="h-[30vh] object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "Microsoft Learn Student Ambassador",
    title: "Microsoft Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future.",
  },
  // {
  //   quote:
  //   <img src="/Logo/image.png" alt="" className="h-[30vh] object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
