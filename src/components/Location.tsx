"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Msu Baroda"
        href=""
      >
        <div className="flex  basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-Poppins  text-base text-slate-100">
            MSU  DCA
          </h3>
          <div className="text-base !m-0 !p-0  font-thin">
            <span className="text-white ">
              Address for the Maharaja Sayajirao University of Baroda Computer Department.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.177748344576!2d73.17869558835443!3d22.312478344286678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf4d168ed471%3A0xc95be30239975099!2sMaharaja%20Sayajirao%20University%2C%20Sayajiganj%2C%20Vadodara%2C%20Gujarat%20390020!5e0!3m2!1sen!2sin!4v1730038027275!5m2!1sen!2sin" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.921057355174!2d73.17875714477364!3d22.317332493915675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf4d6f8036af%3A0x9fdb2832109efbd7!2sDepartment%20Of%20Computer%20Applications!5e0!3m2!1sen!2sin!4v1730571658198!5m2!1sen!2sin" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
