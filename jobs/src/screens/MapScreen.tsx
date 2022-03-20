import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import MapView, { Region } from "react-native-maps";
import { connect, ConnectedProps } from "react-redux";

import { actions } from "../actions";
import { MainTabsScreenProps } from "../navigators/MainTabs";

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & MainTabsScreenProps<"Map">;

export const _MapScreen: React.FC<Props> = ({ fetchJobs, navigation }) => {
  const [region, setRegion] = useState<Region>({
    longitude: -122,
    latitude: 37,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09,
  });

  const onBtnPress = () => {
    fetchJobs(region, () => {
      navigation.navigate("Deck");
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={region}
        style={{ flex: 1 }}
        onRegionChangeComplete={setRegion}
      />
      <View style={styles.btnContainer}>
        <Button
          title="Search This Area"
          icon={{ name: "search" }}
          onPress={onBtnPress}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({ region }: { region: Region }) => {
  return { region };
};

const connector = connect(mapStateToProps, actions);
export const MapScreen = connector(_MapScreen);

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
