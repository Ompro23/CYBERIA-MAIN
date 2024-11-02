"use client"
import { useContext, useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import axios from "axios";
import { eventContext } from "@/app/context/MyContext";
import {HOST} from '@/lib/utilities'
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";



export function CardHoverEffectDemo() {
  const { events,setEvents,setloading,loading } = useContext(eventContext)

  

  
  

  const handleGetEvents = async () => {
    setloading(true);
    try {
      const resp = await axios.get(`${HOST}/api/events`);
      // console.log(resp)
      if(resp){
        setEvents(resp.data.Event)
        setloading(false);
        
      }
      
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  };

  useEffect(() => {
    handleGetEvents();
    
  }, []);

  

  const technicalEvents = events.filter(event => event.field === "technical");

  // Filter by non-technical field
  
  
  // Example output
  

  
  return (
    <div className="flex flex-row  w-full h-full ">
        {
         loading  ?  ( <div className="flex flex-row flex-wrap justify-around w-full">
           <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2]  my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
                             
        </div>)  :  <HoverEffect items={technicalEvents } />                        
      }
    </div>
  );
}

export function CardHoverEffectDemo2() {

  const { events,setEvents,setloading,loading } = useContext(eventContext)

  const handleGetEvents = async () => {
    setloading(true);
    try {
      const resp = await axios.get(`${HOST}/api/events`);
      // console.log(resp)
      if(resp){
        setEvents(resp.data.Event)
        setloading(false);
        
      }
      
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  };

  useEffect(() => {
    handleGetEvents();
    
  }, []);

  
  
  

  // Filter by non-technical field
  const nonTechnicalEvents = events.filter(event => event.field === "non-technical");
  
  // Example output
  
  


  return (
    <div className="flex flex-row  w-full h-full ">
      
      <div className="flex flex-row  w-full h-full ">
        {
         loading ?  ( <div className="flex flex-row flex-wrap justify-around w-full ">
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2]  my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                   
        </div>)  :  <HoverEffect items={nonTechnicalEvents } />                        
      }
    </div>
      
    </div>
  );
}
export const projects = [
  
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image : "/image.png"
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    backgroundImage : "/image.png"
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
