import { Reducer } from "redux";
import { CLEAR_LIKED_JOBS, LIKE_JOB } from "../actions/types";

const uniqBy = (items: any[], key: string) => {
  const existingKeys: Record<string, any> = {};
  return items.filter((item) => {
    if (existingKeys[item[key]]) {
      return false;
    } else {
      existingKeys[item[key]] = true;
      return true;
    }
  });
};

export const likeJob: Reducer = (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return uniqBy([action.payload, ...state], "jobkey");
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
};
