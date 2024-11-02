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
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
    <img src="/Logo/75.png" alt="" className="h-[30vh]  object-contain  sm:object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: 
    <img src="/image.png" alt="" className="h-[30vh] object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
    <img src="/microsoft/image.png" alt="" className="h-[30vh] object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
    <img src="/Logo/image.png" alt="" className="h-[30vh] object-contain sm:h-[30vh]  sm:w-[40vw] w-[20vw]"/>,
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
