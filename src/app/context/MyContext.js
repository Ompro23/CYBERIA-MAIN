"use client"

import React, { createContext ,useEffect,useState } from 'react'




export const eventContext = createContext(null);



const EventsContextProvider = (props) =>{
  
useEffect(()=>{
  if(typeof window !== "undefined"){
    const storedEvent = JSON.parse(localStorage.getItem('UserSelectedEvent'));
    setUserSelectedEvent(storedEvent)
  }
},[])

    const [events, setEvents] = useState([]);
    const [UserSelectedEvent, setUserSelectedEvent] = useState([]);
    const [loading, setloading] = useState(true);
   
    
   
    const contextValue = {events,setEvents,UserSelectedEvent, setUserSelectedEvent,loading, setloading}
    
    return(
        <eventContext.Provider value={contextValue}>
            {props.children}
        </eventContext.Provider>
    )
}

export default EventsContextProvider;