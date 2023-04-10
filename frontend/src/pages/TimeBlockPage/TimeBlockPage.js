import TimeBlockCollection from "../../components/TimeBlockCollection/TimeBlockCollection";
import ActivitiesContext from "../../context/activities";

import React, { useState, useEffect, useContext } from 'react';
import CreateActivity from "../../components/CreateActivity/CreateActivity";


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
      <div className="columns-2">
        <CreateActivity />
        <TimeBlockCollection  />
      </div>
    </div>
  );
};

export default TimeBlockPage;
