import React from "react";
import { StyleSheet, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { actions } from "../actions";
import { MainTabsScreenProps } from "../navigators/MainTabs";
import MapView from "react-native-maps";
import { Card, Button, Text } from "react-native-elements";
import { Swipe } from "../components/Swipe/Swipe";

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & MainTabsScreenProps<"Deck">;

export const _DeckScreen: React.FC<Props> = ({ jobs }) => {
  // @ts-ignore
  const renderCard = (job) => {
    return (
      <Card>
        <Card.Title>{job.jobtitle}</Card.Title>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, "").replace(/<\/b>/g, "")}</Text>
      </Card>
    );
  };

  return (
    <View>
      <Swipe data={jobs} renderItem={renderCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

// @ts-ignore
const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

const connector = connect(mapStateToProps, actions);
export const DeckScreen = connector(_DeckScreen);
