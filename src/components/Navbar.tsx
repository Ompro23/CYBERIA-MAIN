"use client";
import React, { useState, useEffect, useContext } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { eventContext } from "@/app/context/MyContext";
import axios from "axios";
import { HOST } from "@/lib/utilities";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        {/* Additional content can go here */}
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const context = useContext(eventContext);
  if (!context) {
    throw new Error("eventContext must be used within a EventProvider");
  }
  const { events, setEvents, setloading, setUserSelectedEvent } = context;

  
  

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const router = useRouter()
  return (
    <div
      className={cn(
        "fixed top-10  inset-x-0 max-w-2xl mx-auto sm:top-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      <Menu  setActive={setActive}>
        <a href="https://msubaroda.ac.in/" target="_blank" rel="noopener noreferrer"><Image className="sm:hidden" src="/Logo/msu.png" width={55} height={50} alt="" /></a>
        <button onClick={()=>router.push("/")}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Sponsors</HoveredLink>
            {/* <HoveredLink href="/">Date</HoveredLink> */}
            <HoveredLink href="/seo">Powered By</HoveredLink>
            {/* <HoveredLink href="/branding">Address</HoveredLink> */}
          </div>
        </MenuItem>
        </button>
        <button onClick={()=>router.push("/about")}>
        <MenuItem setActive={setActive} active={active} item="About">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">About Cyberia</HoveredLink>
            <HoveredLink href="/">Mentors</HoveredLink>
            <HoveredLink href="/">Team</HoveredLink>            
          </div> */}
        </MenuItem>
        </button>
        <button onClick={()=>router.push("/events")}>
       <MenuItem setActive={setActive} active={active} item="Events">
          {/* <div className="text-sm  grid grid-cols-2 gap-10 sm:gap-2 p-4">

            {events.slice(0, 4).map((event)=>{
              return  <ProductItem
               title={event.title}
               href={"/selectedEvent"}            
               src={event.image}
               description={event.description}
             /> */}
          {/* })} */}  
          {/* </div> */}
        </MenuItem>      
        </button>
        <a href="https://www.msubaroda.ac.in/Accreditation" target="_blank" rel="noopener noreferrer"><Image className="sm:hidden" src="/Logo/75.png" width={55} height={50} alt="" /></a>
      </Menu>
    </div>
  );
}
