import React from "react";
import { Text, View } from "react-native";
import { Slides } from "../components/Slides/Slides";

const SLIDE_DATA = [
  { text: "Welcome to job app", color: "#03A9F4" },
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" },
];

export const WelcomeScreen: React.FC = () => {
  return (
    <View>
      <Slides data={SLIDE_DATA} />
    </View>
  );
};
