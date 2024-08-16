function AddEventForm({ onAddEvent }) {
    const [event, setEvent] = useState({ title: '', date: '' });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddEvent(event);
      setEvent({ title: '', date: '' });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
          placeholder="Event Title"
        />
        <input
          type="date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <button type="submit">Add Event</button>
      </form>
    );
  }
  
  export default AddEventForm;
  