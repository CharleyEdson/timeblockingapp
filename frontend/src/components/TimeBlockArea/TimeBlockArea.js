import React from 'react';
import './TimeBlockArea.css';

const TimeBlock = ({ children }) => {
  const startHour = 8;
  const endHour = 19;
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);

  return (
    <div className="time-block">
      {hours.map((hour, index) => (
        <React.Fragment key={hour}>
          <div className="hour-line" style={{ top: `${(index / hours.length) * 100}%` }}>
            <span className="hour-label">{hour}:00</span>
          </div>
          <div
            className="half-hour-line"
            style={{ top: `${((index + 0.5) / hours.length) * 100}%` }}
          />
        </React.Fragment>
      ))}
      {children}
    </div>
  );
};

export default TimeBlock;
