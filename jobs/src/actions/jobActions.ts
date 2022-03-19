import axios from "axios";
import { DefaultRootState } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { FETCH_JOBS } from "./types";
import { Region } from "react-native-maps";

// @ts-ignore
import geo2zip from "geo2zip";

const JOB_QUERY_PARAMS = {
  publisher: "4201738803816157",
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript",
};

export const fetchJobs =
  (
    region: Region
  ): ThunkAction<void, DefaultRootState, void, Action<typeof FETCH_JOBS>> =>
  async (dispatch) => {
    try {
      const closestZip = await geo2zip(location);
      console.log(closestZip);
    } catch (e) {
      console.log(e);
    }
  };
