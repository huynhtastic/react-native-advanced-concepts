import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Region } from "react-native-maps";

export const MapScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    longitude: -122,
    latitude: 37,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView region={region} style={{ flex: 1 }} />
    </View>
  );
};
