"use client"; // This line should be at the very top

import { eventContext } from "@/app/context/MyContext";
import { useContext, useEffect } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
// ... other imports

const selectedEvent = () => {
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
      <div className="h-full w-full">
        <div className="h-full relative justify-center items-center w-full bg-transparent inset-0 flex flex-col z-0 bg-fixed">
          {loading === false && UserSelectedEvent ? (
            <div className="h-full w-full text-start flex-col flex">
              <DirectionAwareHover
                className="w-full sm:w-2/3 sm:h-2/3 h-full my-2 rounded-md z-0"
                imageUrl={UserSelectedEvent.image || "default-image-url"}
              >
                <p className="font-bold text-xl">{UserSelectedEvent.description || "No description available"}</p>
                <p className="font-normal text-sm">INR {UserSelectedEvent.price || "Price not available"}</p>
              </DirectionAwareHover>
              <div className="flex gap-2 flex-col">
                <h1 className="text-xl font-normal">{UserSelectedEvent.title || "Untitled Event"}</h1>
                <p>{UserSelectedEvent.briefDescription || "No brief description"}</p>
                <p><strong>Price:</strong> {UserSelectedEvent.price || "Not specified"}</p>
                <p><strong>Tag:</strong> {UserSelectedEvent.tag || "None"} - {UserSelectedEvent.size || "Unknown"}</p>
                <p><strong>RuleBook:</strong> {UserSelectedEvent.ruleBook || "Not available"}</p>
              </div>
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </>
  );
};

export default selectedEvent;
