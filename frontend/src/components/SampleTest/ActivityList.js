import React from 'react';
import TimeBlock from './TimeBlock';
import Timescale from './Timescale';

function ActivityList({ activities }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    position: 'relative',
    minHeight: '720px', // 12 hours * 60 minutes
  };

  return (
    <div>
      <Timescale />
      <div style={containerStyle}>
        {activities.map(({ name, duration, timeStart }) => (
          <TimeBlock key={name} activity={name} duration={duration} timeStart={timeStart} />
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
