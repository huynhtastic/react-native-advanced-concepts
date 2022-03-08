import { ThunkAction, ThunkDispatch } from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS } from "./types";
import { DefaultRootState } from "react-redux";
import { Action } from "redux";
import Facebook from "expo-facebook";

export const facebookLogin =
  (): ThunkAction<
    void,
    DefaultRootState,
    void,
    Action<typeof FACEBOOK_LOGIN_SUCCESS | typeof FACEBOOK_LOGIN_FAIL>
  > =>
  async (dispatch) => {
    const token = await AsyncStorage.getItem("fb_token");
    if (token) {
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      doFacebookLogin(dispatch);
    }
  };

const doFacebookLogin = async (
  dispatch: ThunkDispatch<
    DefaultRootState,
    void,
    Action<"FACEBOOK_LOGIN_SUCCESS" | "FACEBOOK_LOGIN_FAIL">
  >
) => {
  await Facebook.initializeAsync("343123017746716");
  const result = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile"],
  });
  if (result.type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token", result.token);
};
