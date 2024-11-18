"use client"
import { NavbarDemo } from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/Orbiting";
import { BlurInDemo } from "@/components/Blur-In";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCards";
import { AnimatedPinDemo } from "@/components/Location";
import MobNav from "@/components/MobNav";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { MarqueeDemo } from "@/components/MarqueDemo";
import { MacbookScrollDemo } from "@/components/MacBook";
import { CardDemo } from "@/components/AnimatedCardMob";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import CanvasLoader from '@/app/fiberComponents/CanvasLoader'
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "@/app/fiberComponents/HeroCamera";
import {useMediaQuery} from 'react-responsive'
import HeroElement from "@/app/fiberComponents/HeroElement";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Home() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push("about");
  };
  const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
    return {
      deskScale: isSmall ? 0.8 : isMobile ? 0.6 : 0.7,
      deskPosition: isMobile ? [10, -1, 20] : [13,0,-30],
      cubePosition: isSmall ? [5, 0, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [21, 7, 3],
      reactLogoPosition: isSmall ? [4, 12, -9] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [18, -7, 1],
      ringPosition: isSmall ? [-9, 4, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-43, 10, 10],
      targetPosition: isSmall ? [0, -15, -19] : isMobile ? [-9, -10, -10] : isTablet ? [-20, -5, -10] : [-22, -10, 0],
    };
  };
  

  const isMobile = useMediaQuery({maxWidth: 440})
    const isSmall = useMediaQuery({maxWidth: 440})
    const isTablet = useMediaQuery({minWidth: 768,maxWidth:1024})
    const sizes = calculateSizes(isSmall,isMobile,isTablet)
  return (
    <>
      <div className="sm:hidden z-50">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobNav />
      </div>
      <div className="h-full sm:hidden bg-[#08090a] overflow-hidden w-full">
        <div
          // style={{ backgroundImage: "url('/metaverseBg.jpg')" }}
          className="bg-clip-text   w-full sm:bg-[#141516] sm:bg-contain  bg-gradient-to-b from-[#141516] to-black overflow-x-hidden bg-fixed  bg-no-repeat h-full bg-cover"
        >
          <div className="flex   mt-10 h-screen  w-full  justify-center items-start flex-row ">
            <div className="flex overflow-hidden px-10 gap-10   h-full w-full  justify-center items-start flex-col ">
            <BlurInDemo />
            <TextGenerateEffectDemo />
            {/* <p className="text-xl text-wrap w-1/2  text-gray-300 text-start font-Poppins">Unleash innovation and defy digital boundaries at Cyberia Tech Fest: where mavericks of technology shape the future.</p> */}
            <GradualSpacing
              className="font-display text-center font-Poppins text-xl font-semibold -tracking-widest  text-black dark:text-white md:text-2xl md:leading-[5rem]"
              text={`On December 22 23 & 24 `}
            />
            <div className="z-10 flex min-h-10 items-center blur-in-text justify-center">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
              >
                <AnimatedShinyText className="inline-flex  items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span onClick={handleRedirect} >✨ More Info</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>

              </div>

            </div>
            </div>

            {/* Animation or Caraousal */}
            <div className="w-full h-full absolute overflow-hidden ">
            <Canvas className='w-full   h-full '>
                    <Suspense  fallback={<CanvasLoader/>}>                    
                    <PerspectiveCamera   makeDefault position={[0,0,20]}/>                    
                     <HeroCamera  isMobile={isMobile}>
                     <HeroElement 
                     
                    scale={sizes.deskScale}
                    rotation={[0,6,0]}
                    position={isMobile?[20,0,-30]:[13,0,-30]} 
                    //  position={isMobile?[0.3,-5,3]:[0,-7,4]} 
                    //  rotation={[0,-1.6,0]}
                     />
                     </HeroCamera>                    
                    <ambientLight intensity={1} />
                    <directionalLight position={[15,10,10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>

            </div>
          </div>          
            <MarqueeDemo />
          <div className="flex h-full w-full  justify-center items-center flex-col ">
          <MacbookScrollDemo />
          </div>         
          <div className="flex bg-gradient-to-b from-[#141516] to-black py-10 sm:bg-grid-white/[0.1] overflow-hidden  h-screen w-full justify-center items-center flex-col ">            
            <OrbitingCirclesDemo />
             <TypingAnimation
      className="text-2xl font-normal text-center font-Poppins text-neutral-600 dark:text-neutral-300 max-w-xl"
      text="Sponsored by those who make it all happen-thank you to our sponsors!"
    />
          </div>
          <div className="flex py-10 bg-gradient-to-b from-black to-[#000] sm:bg-grid-white/[0.1]  h-screen w-full justify-center items-center flex-col ">
            <h1 className="text-4xl border-b-2 border-white py-1">
              Powered By
            </h1>
            <InfiniteMovingCardsDemo />
          </div>

          <div className="flex overflow-hidden border-b-[1px] border-white/[0.2]  sm:p-0 2xl:bg-gradient-to-b from-black to-[#141516]  sm:bg-grid-white/[0.1]  h-full w-full justify-center items-center flex-col ">
            <div className="flex  flex-col sm:w-full  w-4/5 rounded-xl  justify-center items-center  h-screen">
              <h1 className="text-4xl sm:text-2xl border-b-2 text-center border-white pt-32">
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
      <div className="sm:flex h-full w-full md:hidden flex-col gap-10  py-32 flex justify-center  items-center lg:hidden 2xl:hidden xl:hidden">
      <div className="w-full h-[300px]  overflow-hidden ">
            <Canvas className='w-full h-[300px]'>
                    <Suspense  fallback={<CanvasLoader/>}>                    
                    <PerspectiveCamera   makeDefault position={[0,0,20]}/>                    
                     <HeroCamera  isMobile={isMobile}>
                     <HeroElement 
                     
                    scale={sizes.deskScale}
                    rotation={[0,6.2,0]}
                    position={[-12,0,-30]} 
                    //  position={isMobile?[0.3,-5,3]:[0,-7,4]} 
                    //  rotation={[0,-1.6,0]}
                     />
                     </HeroCamera>
                    
                    <ambientLight intensity={1} />
                    <directionalLight position={[15,10,10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>

            </div>
        <h1 className="font-SpaceAge bg-[url('/metaverseBg.jpg')] bg-cover  blur-in-text bg-center bg-clip-text text-center text-transparent  text-6xl font-semibold ">CYBERIA <p className="text-xs text-end text-white font-Poppins">Unleash the geek within</p> </h1>
        <p className="text-sm mx-8 text-gray-300 text-center font-Poppins">Unleash innovation and defy digital boundaries at Cyberia Tech Fest: where mavericks of technology shape the future.</p>
        <GradualSpacing
          className="font-display text-center font-Poppins text-xl font-bold -tracking-widest  text-black dark:text-white md:text-2xl md:leading-[5rem]"
          text="On December 22 23 & 24"
        />
        <div className="z-10 flex min-h-10 items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span onClick={handleRedirect} >✨ See more Events</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>

          </div>
        </div>
        <MarqueeDemo />

        <MacbookScrollDemo />

        <CardDemo />
        <div className="h-full flex justify-center items-center flex-col mt-10">
          <h1 className="text-2xl font-Poppins border-b-2 border-white text-center">Our Location</h1>
          <AnimatedPinDemo />
        </div>
      </div>
    </>
  );
}
