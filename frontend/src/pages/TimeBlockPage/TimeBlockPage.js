import TimeBlockCollection from "../../components/TimeBlockCollection/TimeBlockCollection";
import ActivitiesContext from "../../context/activities";

import React, { useState, useEffect, useContext } from 'react';
import CreateActivity from "../../components/CreateActivity/CreateActivity";
import TimeScale from "../../components/TimeScale/TimeScale";


const TimeBlockPage = () => {
const {fetchActivities } = useContext(ActivitiesContext);

useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let fullDate = `${month}-${day}-${year}`;

  return (
    <div>
      <div className="flex justify-center">{fullDate}</div>
        
        <CreateActivity />
        <TimeScale />
        <TimeBlockCollection  />

    </div>
  );
};

export default TimeBlockPage;
