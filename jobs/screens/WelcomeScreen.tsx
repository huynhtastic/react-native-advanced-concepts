import React from "react";
import { Text, View } from "react-native";
import { Slides } from "../components/Slides/Slides";

const SLIDE_DATA = [
  { text: "Welcome to job app" },
  { text: "Set your location, then swipe away" },
];

export const WelcomeScreen: React.FC = () => {
  return (
    <View>
      <Slides data={SLIDE_DATA} />
    </View>
  );
};
