import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Slides } from "../components/Slides/Slides";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WelcomeTabsScreenProps } from "../navigators/WelcomeTabs";

const SLIDE_DATA = [
  { text: "Welcome to job app", color: "#03A9F4" },
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" },
];

export const WelcomeScreen: React.FC<WelcomeTabsScreenProps<"Welcome">> = ({
  navigation,
}) => {
  const [token, setToken] = useState<boolean>();

  useEffect(() => {
    const getToken = async () => {
      const _token = await AsyncStorage.getItem("fb_token");
      if (_token) {
        navigation.navigate("Main", { screen: "Map" });
        setToken(!!_token);
      } else {
        setToken(false);
      }
    };
    getToken();
  }, []);

  if (token === undefined) {
    return <AppLoading />;
  }

  return (
    <View>
      <Slides data={SLIDE_DATA} />
    </View>
  );
};
