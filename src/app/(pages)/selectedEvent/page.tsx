"use client"; // This line should be at the very top

import { eventContext } from "@/app/context/MyContext";
import { useContext, useEffect } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SparklesPreview } from "@/components/Sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams-with-collision";
import { NavbarDemo } from "@/components/Navbar";
import { SignupFormSolo } from "@/components/RegistrationForm";
import MobileNav from "@/components/MobileNav";
import MobNav from "@/components/MobNav";
import { SignupFormTeam } from "@/components/RegistrationFormTeam";
import { ShimmerButtonDemo } from "@/components/ShrimmerButton";
import { AnimatedGradientTextDemo } from "@/components/RegisterButton";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
// ... other imports

const selectedEvent = () => {

  const router = useRouter()
  const eventContextValue = useContext(eventContext);
  const UserSelectedEvent = eventContextValue?.UserSelectedEvent;
  const loading = eventContextValue?.loading;
  const setloading = eventContextValue?.setloading;

  useEffect(() => {
    if (UserSelectedEvent) {
      setloading && setloading(false);
    } else {
      setloading && setloading(true);
    }
  }, [UserSelectedEvent]);

  return (
    <>
      <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:flex 2xl:hidden">
        <MobNav />
      </div>
      <div className="h-full  relative w-full mt-24">
        <div className="h-full relative justify-center items-center w-full bg-transparent bg-blend-multiply inset-0 flex flex-col z-0 bg-fixed bg-cover bg-center">
          {/* <DockDemo /> */}

          <div className="pb-0 h-full  overflow-hidden  flex justify-center items-center w-full">
            <Tabs
              defaultValue="info"
              className="w-[800px] h-full overflow-hidden sm:mt-5 z-0 justify-start  bg-black p-5 flex-col text-white flex items-start"
            >
              <button onClick={()=>router.push("/events")} className=" px-3 py-3 mb-3">&larr; Back</button>
              <TabsList className="w-full  ">
                <TabsTrigger className="w-full" value="info">
                  Info
                </TabsTrigger>
                <TabsTrigger className="w-full" value="register">
                  Register
                </TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                {!loading ? (
                  <div className="h-full w-full bg-transparent text-start justify-center sm:items-center flex-col flex">
                    <DirectionAwareHover
                      className="w-full  bg-transparent sm:w-2/3  sm:h-2/3 sm:object-contain h-full my-2 rounded-md z-0"
                      imageUrl={UserSelectedEvent?.image || "default-image-url"}
                    >
                      <p className="font-bold sm:w-5/6 text-wrap text-xl">
                        {UserSelectedEvent?.description ||
                          "No description available"}
                      </p>
                      <p className="font-normal text-sm">
                        INR {UserSelectedEvent?.price || "N/A"}
                      </p>
                    </DirectionAwareHover>

                    <div className="flex w-full gap-2 flex-col">
                      <div className="flex  w-full flex-col gap-1">
                        <h1 className="text-xl sm:text-start font-normal border-b-2 border-white w-fit my-2 font-Poppins">
                          {UserSelectedEvent?.title || "Event Title"}
                        </h1>
                        <p className="font-Poppins sm:text-xs">
                          {UserSelectedEvent?.modalDescription ||
                            "No brief description available"}
                        </p>

                        {/* <p className="font-bold text-start sm:block border-b-2 border-white w-fit 2xl:hidden sm:w-5/6 text-wrap text-xl">{UserSelectedEvent?.description || "No description available"}</p>
            <p className="font-normal text-start sm:block border-b-2 border-white w-fit 2xl:hidden text-sm">INR {UserSelectedEvent?.price || "N/A"}</p> */}
                      </div>
                      <h1 className="font-Poppins flex flex-row sm:text-xs">
                        <span className="text-lg flex flex-row  sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">
                          Entry Fee
                        </span>
                         <p className="flex flex-row  items-center"> : 100 
                        <IoClose /> Team Member </p>
                      </h1>
                      <p className="font-Poppins sm:text-xs">
                        <span className="text-lg sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">
                          Size
                        </span>{" "}
                        : {UserSelectedEvent?.tag} 
                      </p>
                      <p className="font-Poppins sm:text-xs">
                        <span className="text-lg sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">
                          Info
                        </span>{" "}
                        :{" "}
                        {UserSelectedEvent?.description ||
                          "No description available"}
                      </p>
                      <p className="font-Poppins mb-20 sm:text-xs">
                        <span className="text-lg sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">
                          RuleBook
                        </span>{" "}
                        : { UserSelectedEvent?.ruleBook ?  <a target="_blank" href={UserSelectedEvent?.ruleBook}>Click to See</a> : "Updating Soon" }
                      </p>
                    </div>

                    <div className="flex my-5  justify-center items-center w-full ">
                      <TabsList className="bg-transparent ">
                      <TabsTrigger value="register">
                      <AnimatedGradientTextDemo/>
                      </TabsTrigger>
                      </TabsList>
                    {/* <TabsList className="bg-transparent hover:bg-white rounded-lg">
                      <TabsTrigger value="register"  className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12  opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                        <div className="flex items-center">
                          <AnimatedGradientTextDemo/>
                        </div>
                        <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                          <svg
                            className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                            data-slot="icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </TabsTrigger>
                      </TabsList> */}
                    </div>
                  </div>
                ) : (
                  "Loading..."
                )}
              </TabsContent>
              <TabsContent value="register">
                <div className="flex w-full  bg-black justify-center flex-col items-center">
                  {/* <div className="w-full h-3/4">
            <SparklesPreview />
            </div>
           */}
                </div>
                <div className="h-full w-full p-10 sm:p-0 bg-transparent text-start justify-center sm:items-center flex-col flex">
                  {UserSelectedEvent?.category === "solo" ? (
                    <SignupFormSolo />
                  ) : (
                    <SignupFormTeam />
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </>
  );
};

export default selectedEvent;
