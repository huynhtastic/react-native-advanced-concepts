import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Text, View } from "react-native";
import * as actions from "../actions";

type PropsFromRedux = ConnectedProps<typeof connector>;

export const _AuthScreen: React.FC<PropsFromRedux> = ({ facebookLogin }) => {
  useEffect(() => {
    facebookLogin();
  });

  return (
    <View>
      <Text>AuthScreen</Text>
      <Text>AuthScreen</Text>
      <Text>AuthScreen</Text>
      <Text>AuthScreen</Text>
      <Text>AuthScreen</Text>
    </View>
  );
};

const connector = connect(null, actions);
export const AuthScreen = connector(_AuthScreen);
