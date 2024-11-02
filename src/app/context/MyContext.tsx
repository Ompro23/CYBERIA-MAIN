"use client";

import React, { createContext, useEffect, useState } from "react";

interface EventContextType {
  events: any[];
  setEvents: React.Dispatch<React.SetStateAction<any[]>>;
  UserSelectedEvent: any; // Changed to any instead of any[]
  setUserSelectedEvent: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const eventContext = createContext<EventContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const EventsContextProvider = (props: Props) => {
  const [events, setEvents] = useState<any[]>([]);
  const [UserSelectedEvent, setUserSelectedEvent] = useState<any>(null); // Changed to any instead of any[]
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEvent = JSON.parse(localStorage.getItem("UserSelectedEvent") || "null");
      setUserSelectedEvent(storedEvent);
    }
  }, []);

  const contextValue = {
    events,
    setEvents,
    UserSelectedEvent,
    setUserSelectedEvent,
    loading,
    setloading,
  };

  return <eventContext.Provider value={contextValue}>{props.children}</eventContext.Provider>;
};

export default EventsContextProvider;