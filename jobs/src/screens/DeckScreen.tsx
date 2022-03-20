import React from "react";
import { Text, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { actions } from "../actions";
import { MainTabsScreenProps } from "../navigators/MainTabs";

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & MainTabsScreenProps<"Deck">;

export const _DeckScreen: React.FC<Props> = () => {
  return <View></View>;
};

// @ts-ignore
const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

const connector = connect(mapStateToProps, actions);
export const DeckScreen = connector(_DeckScreen);
