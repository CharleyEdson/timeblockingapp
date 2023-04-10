import React, { useState, useContext } from "react";
import ActivitiesContext from "../../context/activities";

const CreateActivity = () => {
  const [nameOfActivity, setNameOfActivity] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const { handleCreateActivity } = useContext(ActivitiesContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let activity = {
      activity: nameOfActivity,
      time_start: timeStart,
      time_end: timeEnd,
    };
    handleCreateActivity(activity);
    setNameOfActivity("");
    setTimeStart("");
    setTimeEnd("");
  };

  return (
    <div>
      <div className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">create activity here</div>
      <form className="w-full max-w-sm p-3" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Activity
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={nameOfActivity}
              onChange={(event) => setNameOfActivity(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Start Time
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={timeStart}
              onChange={(event) => setTimeStart(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              End Time
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={timeEnd}
              onChange={(event) => setTimeEnd(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Create!
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
