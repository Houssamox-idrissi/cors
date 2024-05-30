import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ date, onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [hour] = time.split(':').map(Number);

    // Validate time within allowed ranges
    if (
      (hour >= 8 && hour < 12) ||
      (hour >= 14 && hour < 17)
    ) {
      const reservation = { title, date: `${date}T${time}:00` };
      await axios.post('http://localhost:8000/api/reservations', reservation);
      onSubmit(reservation);
    } else {
      alert('Please select a time between 8:00-12:00 or 14:00-17:00.');
    }
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour < 12; hour++) {
      options.push(
        <option key={`${hour}:00`} value={`${hour}:00`}>{`${hour}:00`}</option>
      );
      options.push(
        <option key={`${hour}:30`} value={`${hour}:30`}>{`${hour}:30`}</option>
      );
    }
    for (let hour = 14; hour < 17; hour++) {
      options.push(
        <option key={`${hour}:00`} value={`${hour}:00`}>{`${hour}:00`}</option>
      );
      options.push(
        <option key={`${hour}:30`} value={`${hour}:30`}>{`${hour}:30`}</option>
      );
    }
    return options;
  };

  return (
    <div className="reservation-form">
      <h2 className='mb-4' style={{fontFamily:'cursive'}}>Reserve Interview on {date}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{fontFamily:'cursive'}}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{fontFamily:'cursive'}}>Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="" disabled>Select time</option>
            {generateTimeOptions()}
          </select>
        </div>
        <button type="submit" className=' mr-2 bg-black px-4 py-2 rounded-full text-white'>Reserve</button>
        <button type="button" className='bg-black px-4 py-2 rounded-full text-white' onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default ReservationForm;
