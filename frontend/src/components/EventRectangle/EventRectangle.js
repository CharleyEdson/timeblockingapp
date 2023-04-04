import React from 'react';
import './EventRectangle.css';

const EventRectangle = ({ startTime, endTime }) => {
  const startHour = 8;
  const heightPerHour = 100 / (19 - startHour + 1);

  const top = ((startTime - startHour) / (19 - startHour)) * 100;
  const height = ((endTime - startTime) / (19 - startHour)) * 100;

  return (
    <div
      className="event-rectangle"
      style={{
        top: `${top}%`,
        height: `${height}%`,
      }}
    />
  );
};

export default EventRectangle;
