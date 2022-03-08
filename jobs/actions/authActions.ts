import { ThunkAction } from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FACEBOOK_LOGIN_SUCCESS } from "./types";
import { DefaultRootState } from "react-redux";
import { Action } from "redux";

export const facebookLogin =
  (): ThunkAction<
    void,
    DefaultRootState,
    void,
    Action<typeof FACEBOOK_LOGIN_SUCCESS>
  > =>
  async (dispatch) => {
    const token = await AsyncStorage.getItem("fb_token");
    if (token) {
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
    }
  };
