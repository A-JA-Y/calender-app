import React, { useContext, useState } from 'react';
import { EventContext } from '../eventContext';
import { editEvent } from '../serviceHandeling/apiService.js';

const EditEvent = ({ eventId }) => {
  const { events, setEvents } = useContext(EventContext);
  const event = events.find(e => e.id === eventId);
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);

  const handleEditEvent = async () => {
    try {
      const updatedEvent = { ...event, title, date };
      const response = await editEvent(updatedEvent);
      setEvents(prevEvents =>
        prevEvents.map(e => (e.id === eventId ? response : e))
      );
    } catch (error) {
      console.error('Failed to edit event:', error);
    }
  };

  return (
    <div>
      <h1>Edit Event</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button onClick={handleEditEvent}>Edit Event</button>
    </div>
  );
};

export default EditEvent;