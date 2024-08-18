import React, { useContext, useState } from 'react';
import { EventContext } from '../eventContext';
import { addEvent } from '../serviceHandeling/apiService.js';

const AddEvent = () => {
  const { setEvents } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleAddEvent = async () => {
    try {
      const newEvent = { title, date };
      const response = await addEvent(newEvent);
      setEvents(prevEvents => [...prevEvents, response]);
    } catch (error) {
      console.error('Failed to add event:', error);
    }
  };

  const { events } = useContext(EventContext);
  return (
    <>
    <div className='bg-zinc-800 h-full flex flex-col items-center justify-center w-full'>
      <h1 className='text-white border-b-2 rounded-lg border-red-600 drop-shadow-2xl text-center text-7xl mb-3 p-5 font-thin' >Add Event</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Event Title"
        className='m-5 p-5 rounded-md'
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className='m-5 p-5 rounded-md drop-shadow-md'
      />
      <button className="bg-zinc-500 hover:bg-zinc-950 hover:text-white hover:scale-105 drop-shadow-xl px-5 py-3 m-5 rounded-md" onClick={handleAddEvent}>Add Event</button>
    <div className="saved">
      <h1 className='text-white border-b-2 rounded-lg border-red-600 drop-shadow-2xl text-center text-7xl mb-3 p-5 font-thin' >Saved Events</h1>
      <div>
      {events.map((event) => (
        <div key={event.id} className="text-white text-xl font-thin">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
        </div>
      ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default AddEvent;