"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


type RedirectEvent = {
    value: string;
};

const MobNav = () => {
    const router =  useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    
    const handleRedirect = (e:RedirectEvent) => {
        const route = e.value; 
        router.push(route);
        closeMenu()
    };
    return (
        <div className={`border ${isOpen? "h-full " : "h-[8vh]"}  backdrop-blur-md bg-transparent z-50 border-white/[0.1] my-2 mx-2 rounded-xl  fixed  top-0 left-0 right-0  transition-all duration-400 ease-in-out overflow-hidden   block `}>
            <div className="flex  h-[7vh] w-full">
                <div className="flex ms-3 h-full gap-5 p-2 w-3/4">
                    <img src="/Logo/msu.png" alt="" />
                    <img src="/Logo/75.png" alt="" />
                    
                </div>
                <div className="flex h-full  justify-center items-center  p-2 w-1/4">
                {isOpen ? <IoClose className="w-6 h-6" onClick={toggleMenu} /> : <FaBarsStaggered onClick={toggleMenu} className="text-white/[0.6]" /> }                  
                </div>
            </div>

            <div className="flex flex-col text-2xl font-Poppins justify-start p-10 gap-7 items-start   text-white w-full h-full">
                <button className="font-Poppins"  onClick={(e) => handleRedirect({ value: '/' })}>Home</button>
                <button className="font-Poppins"  onClick={(e) => handleRedirect({ value: '/about' })}>About</button>
                <button className="font-Poppins"  onClick={(e) => handleRedirect({ value: '/events' })}>Events</button>                
            </div>

        </div>
    )
}

export default MobNav