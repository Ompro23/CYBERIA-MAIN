"use client"
import { eventContext } from "@/app/context/MyContext";
import MobNav from "@/components/MobNav";
import { NavbarDemo } from "@/components/Navbar";
import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react"

const DownloadTicket = () => {
    
    const eventContextValue = useContext(eventContext);
  
  const ticketData = eventContextValue?.ticketData;
const router = useRouter()
  const handleDownload = () => {    
    // Triggering the download using the `saveAs` function from `file-saver`
    if(!ticketData){
      message.info("Error fetching the ticket please check your mail")        
    }   
    else{
      router.push(ticketData?.ticketData.ticket)
    }
  };
  return (
    <>
    <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:flex 2xl:hidden">
        <MobNav />
      </div>
    <div className=' h-screen w-full flex text-center justify-center gap-5 flex-col items-center'>        
     <h1 className="text-2xl text-center px-5 font-Poppins">Hello {ticketData? ticketData.fullName || ticketData.teamName : ""} Download your ticket Here:</h1>    
     <Link href={`${ticketData? ticketData.ticket : "/events" }`} onClick={handleDownload} className="py-1 px-3 text-white bg-black hover:scale-110 transition-all duration-300 hover:border-4 rounded-sm border ">Download</Link>
    </div>
    
    </>
  )
}

export default DownloadTicket