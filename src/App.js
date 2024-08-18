import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEvent from './components/AddEventForm';
import CalendarView from './components/calenderView';
import { EventProvider } from './eventContext';

function App() {
  return (
    <EventProvider>
      <Router>
        <div className="App">
            <Routes>
              <Route path="/" element={<CalendarView />} />
              <Route path="/addevent" element={<AddEvent />} />
            </Routes>
          </div>
      
      </Router>
    </EventProvider>
  );
}

export default App;