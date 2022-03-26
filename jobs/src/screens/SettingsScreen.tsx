import React from "react";
import { Text, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "react-native-elements";
import { actions } from "../actions";
import { ReviewStackScreenProps } from "../navigators/ReviewStack";

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & ReviewStackScreenProps<"Settings">;

export const _SettingsScreen: React.FC<Props> = ({ clearLikedJobs }) => {
  return (
    <View>
      <Button
        title="Reset Liked Jobs"
        icon={{ name: "delete-forever" }}
        onPress={clearLikedJobs}
      />
    </View>
  );
};

const connector = connect(null, actions);
export const SettingsScreen = connector(_SettingsScreen);
