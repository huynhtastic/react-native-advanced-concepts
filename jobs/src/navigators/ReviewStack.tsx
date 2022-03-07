import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { ReviewScreen, SettingsScreen } from "../screens";

const Stack = createNativeStackNavigator<{
  Review: undefined;
  Settings: undefined;
}>();

export const ReviewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={({ navigation }) => ({
          title: "Review Jobs",
          headerRight: () => {
            return (
              <Button
                titleProps={{
                  style: {
                    color: "rgba(0,122,225,1)",
                  },
                }}
                buttonStyle={{
                  backgroundColor: "rgba(0,0,0,0)",
                }}
                title="Settings"
                onPress={() => {
                  navigation.navigate("Settings");
                }}
              />
            );
          },
        })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
