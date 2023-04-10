import React, { useState, useEffect, useContext } from "react";
import Activity from "../Activity/Activity";
import ActivitiesContext from "../../context/activities";

const TimeBlockCollection = () => {
  const { activities } = useContext(ActivitiesContext);

  const renderedActivities = activities.map((activity) => {
    return (
      <div key={activity.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center">
          {activity.time_start}
          {"-"}
          {activity.time_end}
        </div>
        <div className="border-b p-3 cursor-pointer">{activity.activity}</div>
      </div>
    );
  });
  return (
    <div>
      <div>{renderedActivities}</div>
    </div>
  );
};

export default TimeBlockCollection;
