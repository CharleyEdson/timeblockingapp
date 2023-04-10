import React, { useState, useContext } from 'react';
import ActivitiesContext from "../../context/activities";


const CreateActivity = () => {
    const [nameOfActivity, setNameOfActivity] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    const { handleCreateActivity } = useContext(ActivitiesContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let activity = {
            activity: nameOfActivity,
            time_start: timeStart,
            time_end: timeEnd,
        };
        handleCreateActivity(activity);
        setNameOfActivity('');
        setTimeStart('');
        setTimeEnd('');

    };


    return ( <div>
        create activity here
        <form onSubmit={handleSubmit}>
            <label>Name of Activity</label>
            <input value={nameOfActivity} onChange={(event) => setNameOfActivity(event.target.value)}/>
            <label>What time does the activity start?</label>
            <input value={timeStart} onChange={(event) => setTimeStart(event.target.value)}/>
            <label>What time does the activity end?</label>
            <input value={timeEnd} onChange={(event) => setTimeEnd(event.target.value)}/>
            <button>Create!</button>
        </form>
    </div> );
}
 
export default CreateActivity;