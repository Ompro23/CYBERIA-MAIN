"use client"
import { NavbarDemo } from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/Orbiting";
import { SafariDemo } from "@/components/Safari";
import { BlurInDemo } from "@/components/Blur-In";
import Image from "next/image";
import { TextRevealDemo } from "@/components/TextReveal";
import { ScrollBasedVelocityDemo } from "@/components/ScrollVelocity";
import { TextRevealDemo2 } from "@/components/TextReveal2";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCards";
import { AnimatedPinDemo } from "@/components/Location";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";


export default function Home() {

 
  
  return (
    <>
      <div className="sm:hidden z-50">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobileNav />
      </div>
      <div className="h-full  w-full">
        <div
          style={{ backgroundImage: "url('/metaverseBg.jpg')" }}
          className="bg-blend-multiply w-full sm:bg-black sm:bg-contain   bg-[#0000009d] bg-fixed  bg-no-repeat h-full bg-cover"
        >
          <div className="flex   h-screen w-full  justify-center items-center flex-col ">
            <div className="sm:block  2xl:hidden">
              <img
                alt=""
                src="/metaverseBg.jpg"
                className="h-[50vh] object-contain opacity-70 w-full"
              />
            </div>
            <BlurInDemo />
          </div>
          <ScrollBasedVelocityDemo />
          <div className="flex h-full sm:bg-grid-white/[0.1] w-full  justify-center items-center flex-col ">
            {/* <ScrollBasedVelocityDemo/>  */}
            <TextRevealDemo />
          </div>
          {/* <div className="flex h-full sm:bg-grid-white/[0.1] w-full bg-transparent justify-center items-center flex-col ">            
            <TextRevealDemo2 />
          </div> */}
          <div className="flex py-10 sm:bg-grid-white/[0.1]  h-screen w-full justify-center items-center flex-col ">
            <h1 className="text-4xl border-b-2 border-white py-1">Sponsors</h1>
            <OrbitingCirclesDemo />
          </div>
          <div className="flex py-10 sm:bg-grid-white/[0.1]  h-screen w-full justify-center items-center flex-col ">
            <h1 className="text-4xl border-b-2 border-white py-1">
              Powered By
            </h1>
            <InfiniteMovingCardsDemo />
          </div>

          <div className="flex  py-24 sm:p-0 2xl:bg-[#0000005f] sm:bg-grid-white/[0.1]  h-screen w-full justify-center items-center flex-col ">
            <div className="flex  flex-col sm:w-full  w-4/5 rounded-xl  justify-center items-center  h-screen">
              <h1 className="text-4xl sm:text-2xl border-b-2 text-center border-white pt-24">
                The Maharaja Sayajirao University of Baroda
              </h1>
              <div className="flex sm:flex-col sm:gap-0 gap-32 justify-center  w-full   items-center  flex-row">
                <img
                  src="/Logo/msu.png"
                  alt=""
                  className="h-[50vh] sm:mt-20 sm:h-[25vh] object-contain"
                />
                <div className="h-full">
                  <AnimatedPinDemo />
                </div>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </>
  );
}
