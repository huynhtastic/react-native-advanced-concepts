import { NavigationProp, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { ReviewScreen, SettingsScreen } from "../screens";

export type Params = {
  Review: undefined;
  Settings: undefined;
};

type Routes = keyof Params;
export type ReviewStackNavProp<Route extends Routes = Routes> = NavigationProp<
  Params,
  Route
>;
type ReviewStackRouteProp<Route extends Routes = Routes> = RouteProp<
  Params,
  Route
>;
export interface ReviewStackScreenProps<Route extends Routes = Routes> {
  navigation: ReviewStackNavProp<Route>;
  route: ReviewStackRouteProp<Route>;
}

const Stack = createNativeStackNavigator<Params>();

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
