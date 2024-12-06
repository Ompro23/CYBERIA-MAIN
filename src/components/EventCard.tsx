"use client"
import { useContext, useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import axios from "axios";
import { eventContext } from "@/app/context/MyContext";
import {HOST} from '@/lib/utilities'
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/navigation";



export function CardHoverEffectDemo() {
  const context = useContext(eventContext);
  if (!context) {
    return null; // or handle the null case appropriately
  }
  const { events, setEvents, setloading, loading } = context;

  

  
  

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

  

  const technicalEvents = events.filter(event => event.field === "Technical Event");

  // Filter by non-technical field
  
  const router = useRouter()
  
  // Example output
  const eventCtx = useContext(eventContext);
  const setUserSelectedEvent = eventCtx?.setUserSelectedEvent;
  
const Hackathon = {
  "_id": {
    "$oid": "670eb790b13a65159310b68c"
  },
  "image": "https://firebasestorage.googleapis.com/v0/b/e-commerce-backend-bfa60.appspot.com/o/cyberia%20website%20images%2FScreenshot%202024-11-21%20140150.png?alt=media&token=baa0b5c0-2f28-4023-81b9-d8aa3acdeba7",
  "modalDescription": "The 48-Hour Hackathon is an intense, fast-paced coding competition where teams of developers, designers, and innovators come together to build innovative solutions from scratch in just two days. Participants will have 48 hours to brainstorm, design, develop, and present a working prototype that addresses a specific problem or theme announced at the start of the event. This hackathon challenges creativity, collaboration, and technical skills under tight deadlines, pushing teams to think outside the box and create impactful, real-world solutions. At the end of the event, teams will pitch their projects to a panel of judges, with prizes awarded based on innovation, functionality, design, and potential impact. It’s a thrilling race against the clock where ideas become reality",
  "title": "Hackathon",
  "description": "Difficulty Level - Beginner to Expert",
  "tag": "1-4 Members",
  "createdAt": {
    "$date": "2024-10-15T18:42:24.300Z"
  },
  "updatedAt": {
    "$date": "2024-10-15T18:42:24.300Z"
  },
  "__v": 0,
  "price": 400,
  "category": "team",
  "field": "Technical Event"
}


const handleRedirect = () =>{
  if (setUserSelectedEvent) {
    setUserSelectedEvent(Hackathon);
  }
  localStorage.setItem("UserSelectedEvent", JSON.stringify(Hackathon));
    router.push("/selectedEvent");
}
  
  return (
    <div className="flex flex-col overflow-hidden  w-full h-full ">
      <div onClick={handleRedirect}  style={{
        backgroundImage : "url('/Hackathon.jpg')"
    }} className="flex group flex-col hover:rounded-xl border-white/[0.5] text-center  hover:border-[8px]  justify-center items-center h-[400px] bg-cover bg-center bg-black/[0.2] hover:bg-black/[0.6] bg-blend-multiply cursor-pointer transition-all duration-300 bg-no-repeat rounded-xl   w-full my-5">

        <h1  className="p-4 text-white underline  text-5xl">Hackathon</h1>
        <h1  className="2xl:hidden sm:block transition-transform  duration-700  group-hover:inline-block p-4 text-white text-xl">Difficulty Level - Beginner to Expert</h1>
    </div>
        {
         loading  ?  ( <div className="flex flex-row flex-wrap justify-around w-full">
           <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2]  my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                                               
                             
        </div>)  :  <HoverEffect items={technicalEvents } />                        
      }
    </div>
  );
}

export function CardHoverEffectDemo2() {

  const context = useContext(eventContext);
  if (!context) {
    return null; // or handle the null case appropriately
  }
  const { events, setEvents, setloading, loading } = context;

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
  const nonTechnicalEvents = events.filter(event => event.field === "Non-Technical Event");
  
  // Example output
  
  


  return (
    <div className="flex flex-row  mb-10 w-full h-full ">      
      
        {
         loading ?  ( <div className="flex flex-row flex-wrap justify-around w-full ">
         <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2]  my-10 w-[250px] rounded-xl" />          
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                    
          <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />                                               
        </div>)  :  <HoverEffect items={nonTechnicalEvents} />                        
      }
    </div>
      
    
  );
}

export function CardHoverEffectDemo3() {

  const context = useContext(eventContext);
  if (!context) {
    return null; // or handle the null case appropriately
  }
  const { events, setEvents, setloading, loading } = context;

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
  const workshops = events.filter(event => event.field === "Workshop");
  
  // Example output
  
  


  return (
    <div className="flex flex-row  mb-10 w-full h-full ">      
      
      {
  loading ? (
    <div className="flex flex-row flex-wrap justify-around w-full">
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
      <Skeleton className="h-[180px] bg-white/[0.2] my-10 w-[250px] rounded-xl" />
    </div>
  ) : workshops.length === 0 ? (
    <div className="text-center text-xl text-gray-500 my-10">
      No workshops available.
    </div>
  ) : (
    <HoverEffect items={workshops} />
  )
}

      
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
