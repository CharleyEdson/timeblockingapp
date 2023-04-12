import React, { useState, useEffect, useContext } from "react";
import Activity from "../Activity/Activity";
import ActivitiesContext from "../../context/activities";
import {format} from 'date-fns'
import {isValid} from 'date-fns'
import TimeScale from "../TimeScale/TimeScale";


const TimeBlockCollection = () => {
  const { activities } = useContext(ActivitiesContext);

  function formatTime(time) {
    return isValid(time) ? format(time, 'hh:mm a') : '';
  }
  
// new code




  const renderedActivities = activities.map((activity) => {
    return (
      <div key={activity.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center">
          {activity.start_time}
        </div>
        <div className="border-b p-3 cursor-pointer">{activity.activity}</div>
      </div>
    );
  });
  return (
    <div>
        <TimeScale />
      <div>{renderedActivities}</div>
    </div>
  );
};

export default TimeBlockCollection;
