"use client"

import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface EventContextType {
  events: any[];
  setEvents: React.Dispatch<React.SetStateAction<any[]>>;
  UserSelectedEvent: any[];
  setUserSelectedEvent: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const eventContext = createContext<EventContextType | null>(null);

interface EventsContextProviderProps {
  children: ReactNode;
}

const EventsContextProvider: React.FC<EventsContextProviderProps> = (props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedEvent = JSON.parse(localStorage.getItem('UserSelectedEvent') || 'null');
      setUserSelectedEvent(storedEvent);
    }
  }, []);

  const [events, setEvents] = useState<any[]>([]);
  const [UserSelectedEvent, setUserSelectedEvent] = useState<any[]>([]);
  const [loading, setloading] = useState<boolean>(true);

  const contextValue: EventContextType = {
    events,
    setEvents,
    UserSelectedEvent,
    setUserSelectedEvent,
    loading,
    setloading,
  };

  return (
    <eventContext.Provider value={contextValue}>
      {props.children}
    </eventContext.Provider>
  );
};

export default EventsContextProvider;