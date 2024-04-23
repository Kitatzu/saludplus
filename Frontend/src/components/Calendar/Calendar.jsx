"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar-style.css';


function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    // Aquí puedes manejar la lógica cuando se selecciona una fecha
  };

  return (
    <div>
      <h2>Calendario</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
}

export default MyCalendar;
