import axios from "axios";
import { DefaultRootState } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { CLEAR_LIKED_JOBS, FETCH_JOBS, LIKE_JOB } from "./types";
import { Region } from "react-native-maps";
import { JOB_DATA } from "./mockJobData";

// @ts-ignore
import geo2zip from "geo2zip";

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const JOB_QUERY_PARAMS = {
  publisher: "4201738803816157",
  format: "json",
  v: "2",
  latlong: "1",
  radius: "10",
  q: "javascript",
};

const buildJobsUrl = (zip: string) => {
  const query = new URLSearchParams(JOB_QUERY_PARAMS);
  query.append("l", zip);

  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs =
  (
    _: Region,
    callback: () => void
  ): ThunkAction<void, DefaultRootState, void, Action<typeof FETCH_JOBS>> =>
  async (dispatch) => {
    try {
      // const closestZip = await geo2zip(region);
      // const url = buildJobsUrl(closestZip);
      // const { data } = await axios.get(url);
      // dispatch({ type: FETCH_JOBS, payload: data });

      dispatch({ type: FETCH_JOBS, payload: JOB_DATA });
      callback();
    } catch (e) {
      console.log(e);
    }
  };

export const likeJob =
  (
    job: any
  ): ThunkAction<void, DefaultRootState, void, Action<typeof LIKE_JOB>> =>
  (dispatch) => {
    dispatch({
      payload: job,
      type: LIKE_JOB,
    });
  };

export const clearLikedJobs =
  (): ThunkAction<
    void,
    DefaultRootState,
    void,
    Action<typeof CLEAR_LIKED_JOBS>
  > =>
  (dispatch) => {
    dispatch({
      type: CLEAR_LIKED_JOBS,
    });
  };
