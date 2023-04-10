import { useContext } from "react";
import ActivitiesContext from "../context/activities";

function useActivitiesContext() {
    return useContext(ActivitiesContext);
  }


export default useActivitiesContext;