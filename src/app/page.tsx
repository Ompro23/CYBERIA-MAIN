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
import MobNav from "@/components/MobNav";
import TypingAnimation from "@/components/ui/typing-animation";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { MarqueeDemo } from "@/components/MarqueDemo";
import { MacbookScrollDemo } from "@/components/MacBook";
import { CardDemo } from "@/components/AnimatedCardMob";


export default function Home() {
  const router =  useRouter()

  const handleRedirect = () => {    
    router.push("events");    
};

  return (
    <>
      <div className="sm:hidden z-50">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobNav />
      </div>
      <div className="h-full sm:hidden   w-full">
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
      <div className="sm:flex md:hidden flex-col gap-10  py-32 flex justify-center  items-center lg:hidden 2xl:hidden xl:hidden">
        <h1 className="font-SpaceAge bg-[url('/metaverseBg.jpg')] bg-cover  blur-in-text bg-center bg-clip-text text-center text-transparent  text-6xl font-semibold ">CYBERIA <p className="text-xs text-end text-white font-Poppins">Unleash the geek within</p> </h1>
        <p className="text-sm mx-8 text-gray-300 text-center font-Poppins">Unleash innovation and defy digital boundaries at Cyberia Tech Fest: where mavericks of technology shape the future.</p>
        <GradualSpacing
          className="font-display text-center font-Poppins text-xl font-bold -tracking-widest  text-black dark:text-white md:text-2xl md:leading-[5rem]"
          text="On December 22 to 24"
        />
        <div className="z-10 flex min-h-10 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText  className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span onClick={handleRedirect} >✨ See more Events</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>

      </div>
    </div>
        <MarqueeDemo/>

        <MacbookScrollDemo/>

        <CardDemo/>
        <div className="h-full flex justify-center items-center flex-col mt-10">
          <h1 className="text-2xl font-Poppins border-b-2 border-white text-center">Our Location</h1>
                  <AnimatedPinDemo />
                </div>
      </div>
    </>
  );
}
