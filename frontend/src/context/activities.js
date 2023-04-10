import { createContext, useState, useCallback } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";


const ActivitiesContext = createContext();

function Provider({ children }) {
  const [user, token] = useAuth();
  const [activities, setActivities] = useState([]);

  const fetchActivities = useCallback(async () => {
    const response = await axios
      .get("http://127.0.0.1:8000/api/timeblock/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  const handleCreateActivity = async (activity) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/timeblock/",
      activity,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const updatedActivities = [...activities, response.data];
    setActivities(updatedActivities);
  };

  const valueToShare = {
    activities,
    fetchActivities,
    handleCreateActivity
  };

  return (
    <ActivitiesContext.Provider value={valueToShare}>
        {children}
    </ActivitiesContext.Provider>
  )

}

export { Provider };
export default ActivitiesContext;