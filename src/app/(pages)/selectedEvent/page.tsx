"use client";
import dynamic from 'next/dynamic';
import { BackgroundBeams } from "@/components/ui/background-beams-with-collision";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DockDemo } from '@/components/FloatingDock';

interface UserEvent {
  image: string;
  description: string;
  price: string;
  title: string;
  breifDescription: string;
  tag: string;
  size: string;
  ruleBook: string;
}

// Use `import()` to avoid assuming a `default` export
// const DockDemo = dynamic(() => import("@/components/FloatingDock").then(mod => mod.FloatingDock), { ssr: false });
const SparklesPreview = dynamic(() => import("@/components/Sparkles").then(mod => mod.SparklesPreview), { ssr: false });
const DirectionAwareHover = dynamic(() => import("@/components/ui/direction-aware-hover").then(mod => mod.DirectionAwareHover), { ssr: false });

const SelectedEvent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const UserSelectedEvent: UserEvent = {
    image: "https://via.placeholder.com/150",
    description: "Sample event description",
    price: "100",
    title: "Sample Event",
    breifDescription: "This is a brief description of the sample event.",
    tag: "Sample Tag",
    size: "Medium",
    ruleBook: "Sample RuleBook"
  };

  useEffect(() => {
    console.log("UserSelectedEvent:", UserSelectedEvent);
    if (UserSelectedEvent) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [UserSelectedEvent]);

  return (
    <>
      <div className="h-full w-full">
        <div className="h-full relative justify-center items-center w-full bg-transparent bg-blend-multiply inset-0 flex flex-col z-0 bg-fixed bg-cover bg-center">
          <DockDemo />

          <div className="pb-32 h-full flex justify-center items-center w-full">
            <Tabs defaultValue="info" className="w-[800px] z-0 justify-start h-[800px] bg-black p-5 flex-col text-white flex items-center">
              <TabsList className="w-full">
                <TabsTrigger className="w-full" value="info">Info</TabsTrigger>
                <TabsTrigger className="w-full" value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent className="bg-transparent" value="info">
                {!loading ? (
                  <div className="h-full w-full bg-transparent text-start justify-center sm:items-center flex-col flex">
                    <DirectionAwareHover
                      className="w-full bg-transparent sm:w-2/3 sm:h-2/3 sm:object-contain h-full my-2 rounded-md z-0"
                      imageUrl={"https://via.placeholder.com/150"} children={undefined}                    />
                    <p className="font-bold sm:w-5/6 text-wrap text-xl">{UserSelectedEvent?.description || "No description available"}</p>
                    <p className="font-normal text-sm">INR {UserSelectedEvent?.price || "N/A"}</p>
                    <div className="flex gap-2 flex-col">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-xl sm:text-start font-normal border-b-2 border-white w-fit my-2 font-Poppins">{UserSelectedEvent?.title || "Event Title"}</h1>
                        <p className="font-Poppins sm:text-xs">{UserSelectedEvent?.breifDescription || "No brief description available"}</p>
                      </div>
                      <p className="font-Poppins sm:text-xs"><span className="text-lg sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">Price</span> : {UserSelectedEvent?.price}</p>
                      <p className="font-Poppins sm:text-xs"><span className="text-lg sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">Tag</span> : {UserSelectedEvent?.tag} - {UserSelectedEvent?.size}</p>
                      <p className="font-Poppins mb-20 sm:text-xs"><span className="text-lg sm:text-start font-normal border-b-2 border-white w-fit my-1 font-Poppins">RuleBook</span> : {UserSelectedEvent?.ruleBook}</p>
                    </div>
                  </div>
                ) : "Loading..."}
              </TabsContent>
              <TabsContent className="" value="register">
                <div className="flex w-full h-screen bg-black justify-center flex-col items-center">
                  <div className="w-full h-3/4">
                    <SparklesPreview />
                  </div>
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

export default SelectedEvent;
