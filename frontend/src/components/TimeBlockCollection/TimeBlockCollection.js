import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';

const TimeBlockCollection = ({activities, isActive}) => {

    const renderedActivities = activities.map((activity) => {
        return (
            <div key={activity.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">{activity.id}</div>
                <div className="border-b p-5">{activity.activity}</div>
            </div>
        )
    });
    return (
        <div>{renderedActivities}</div>
    )
 
}
 
export default TimeBlockCollection;