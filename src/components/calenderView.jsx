import React, { useContext } from "react";
import Calendar from "react-calendar";
import { EventContext } from "../eventContext";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

function CalendarView() {
  const { events } = useContext(EventContext);

  return (
    <div className="bg-zinc-800 h-full flex flex-col items-center justify-center w-full">
      <h1 className="text-white border-b-2 rounded-lg border-red-600 drop-shadow-2xl text-center text-7xl mb-3 p-5 font-thin">
        Calendar View
      </h1>
      {events.map((event) => (
        <div key={event.id} className="text-white font-thin">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
        </div>
      ))}
      <Calendar className="scale-110 m-5 p-5 rounded-md" />
      <Link to="/addevent">
        <button className="bg-zinc-500 hover:bg-zinc-950 hover:text-white hover:scale-105 drop-shadow-xl px-5 py-3 m-5 rounded-md">
          Add Event
        </button>
      </Link>
    </div>
  );
}

export default CalendarView;
