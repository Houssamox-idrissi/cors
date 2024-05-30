import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import ReservationForm from './reservationForm';
import '../assets/calendar.css' // Import the CSS file

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios.get('http://localhost:8000/api/reservations');
      setEvents(result.data);
    };

    fetchEvents();
  }, []);

  const handleDateClick = (arg) => {
    const day = new Date(arg.dateStr).getDay();
    if (day === 0|| day === 4) {
      alert('Reservations are not possible on Sundays and Thursdays.');
      return;
    }
    setSelectedDate(arg.dateStr);
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [arg.dateStr]: 'green',
    }));
  };

  const dayCellClassNames = (arg) => {
    const day = arg.date.getDay();
    if (day === 0 || day === 4) {
      return ['unavailable-day'];
    }
    if (selectedDates[arg.dateStr]) {
      return ['selected-day'];
    }
    return [];
  };

  const handleFormSubmit = async (newEvent) => {
    setEvents([...events, newEvent]);
    setSelectedDate(null);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        dayCellClassNames={dayCellClassNames}
      />
      {selectedDate && (
        <ReservationForm
          date={selectedDate}
          events={events}
          onSubmit={handleFormSubmit}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};

export default Calendar;
