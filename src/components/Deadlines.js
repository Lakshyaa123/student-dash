// Deadlines.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Deadlines = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="deadlines">
      <h1>Deadline Tracker</h1>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
      <ul>
        {/* Replace with dynamic data */}
        <li>Google: Application Deadline - Nov 20</li>
        <li>Microsoft: Interview Scheduled - Nov 22</li>
      </ul>
    </div>
  );
};

export default Deadlines;
