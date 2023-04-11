import React from 'react';
import ActivityList from './ActivityList';

function Tester() {
  const activities = [
    { name: 'Activity 1', duration: 60, timeStart: 0 },
    { name: 'Activity 2', duration: 30, timeStart: 60 },
    { name: 'Activity 3', duration: 45, timeStart: 150 },
    // ... more activities
  ];

  return (
    <div>
      {/* Your other components */}
      <ActivityList activities={activities} />
    </div>
  );
}

export default Tester;
