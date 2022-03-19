import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Text, View } from "react-native";
import { actions } from "../actions";
import { WelcomeTabsScreenProps } from "../navigators/WelcomeTabs";

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & WelcomeTabsScreenProps<"Auth">;

export const _AuthScreen: React.FC<Props> = ({
  facebookLogin,
  navigation,
  token,
}) => {
  useEffect(() => {
    facebookLogin();
  }, [facebookLogin]);

  useEffect(() => {
    console.log(token);
    // if (token) {
    navigation.navigate("Main", { screen: "Map" });
    // }
  }, [token]);

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

const mapStateToProps = ({ auth }: { auth: { token?: string } }) => {
  return { token: auth.token };
};

const connector = connect(mapStateToProps, actions);
export const AuthScreen = connector(_AuthScreen);
