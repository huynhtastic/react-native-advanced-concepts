import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { actions } from "../actions";
import { MainTabsScreenProps } from "../navigators/MainTabs";
import MapView from "react-native-maps";
import { Card, Button, Text } from "react-native-elements";
import { Swipe } from "../components/Swipe/Swipe";

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & MainTabsScreenProps<"Deck">;

export const _DeckScreen: React.FC<Props> = ({ jobs, likeJob, navigation }) => {
  // @ts-ignore
  const renderCard = (job) => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };

    return (
      <Card>
        <Card.Title>{job.jobtitle}</Card.Title>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, "").replace(/<\/b>/g, "")}</Text>
        <View style={{ height: 300 }}>
          <MapView
            initialRegion={initialRegion}
            cacheEnabled={Platform.OS === "android"}
            scrollEnabled={false}
            style={{ flex: 1 }}
          />
        </View>
      </Card>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>No More Jobs</Card.Title>
        <Button
          title="Back To Map"
          icon={{ name: "my-location" }}
          onPress={() => navigation.navigate("Map")}
        />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Swipe
        keyProp="jobkey"
        data={jobs}
        renderItem={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeRight={likeJob}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  container: {
    marginTop: 10,
  },
});

// @ts-ignore
const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

const connector = connect(mapStateToProps, actions);
export const DeckScreen = connector(_DeckScreen);
