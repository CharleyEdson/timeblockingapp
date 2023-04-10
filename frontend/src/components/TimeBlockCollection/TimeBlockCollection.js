import React, { useState, useEffect, useContext } from "react";
import Activity from "../Activity/Activity";
import ActivitiesContext from "../../context/activities";

const TimeBlockCollection = () => {
  const { fetchActivities, activities } = useContext(ActivitiesContext);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  const renderedActivities = activities.map((activity) => {
    return (
      <div key={activity.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
          {activity.id}
        </div>
        <div className="border-b p-5">{activity.activity}</div>
      </div>
    );
  });
  return (
    <div>
      <div>{renderedActivities}</div>
      <div>{console.log(renderedActivities)}</div>
    </div>
  );
};

export default TimeBlockCollection;
