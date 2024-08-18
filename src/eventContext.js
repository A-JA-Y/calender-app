import React, { createContext, useState, useEffect } from "react";
import { fetchEvents } from "./serviceHandeling/apiService.js";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((data) => setEvents(data));
  }, []);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };
