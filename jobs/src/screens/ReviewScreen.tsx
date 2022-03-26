import MapView from "react-native-maps";
import React, { useCallback } from "react";
import {
  Linking,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Platform,
} from "react-native";
import { Button, Card } from "react-native-elements";
import { connect, ConnectedProps } from "react-redux";
import { actions } from "../actions";
import { ReviewStackScreenProps } from "../navigators/ReviewStack";

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & ReviewStackScreenProps<"Review">;

export const _ReviewScreen: React.FC<Props> = ({ likedJobs, likeJob }) => {
  const renderLikedJobs = useCallback(() => {
    return likedJobs.map((job) => {
      const {
        company,
        jobtitle,
        formattedRelativeTime,
        url,
        longitude,
        latitude,
      } = job;

      const initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02,
      };
      return (
        <Card key={job.jobkey}>
          <Card.Title>{jobtitle}</Card.Title>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === "android"}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              onPress={() => {
                Linking.openURL(url);
              }}
            />
          </View>
        </Card>
      );
    });
  }, [likedJobs]);

  return <ScrollView>{renderLikedJobs()}</ScrollView>;
  // return <ScrollView></ScrollView>;
};

// @ts-ignore
const mapStateToProps = ({ likeJob }) => {
  return { likedJobs: likeJob };
};

const connector = connect(mapStateToProps, actions);
export const ReviewScreen = connector(_ReviewScreen);

const styles = StyleSheet.create({
  detailWrapper: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  italics: {
    fontStyle: "italic",
  },
});
