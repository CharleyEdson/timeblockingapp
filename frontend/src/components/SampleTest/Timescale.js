import React from 'react';

function TimeScale() {
  const timeScaleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: '10px',
  };

  const timeLabels = [];

  for (let hour = 8; hour <= 20; hour++) {
    const time = hour < 10 ? `0${hour}:00` : `${hour}:00`;
    timeLabels.push(time);
  }

  return (
    <div style={timeScaleStyle}>
      {timeLabels.map((time) => (
        <div key={time} style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
          {time}
        </div>
      ))}
    </div>
  );
}

export default TimeScale;
