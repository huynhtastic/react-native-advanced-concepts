import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { DeckScreen, MapScreen } from "../screens";
import { ReviewStack } from "./ReviewStack";

export type Params = {
  Map: undefined;
  Deck: undefined;
  ReviewStack: undefined;
};

type Routes = keyof Params;
export type MainTabsNavProp<Route extends Routes = Routes> =
  BottomTabNavigationProp<Params, Route>;
type MainTabsRouteProp<Route extends Routes = Routes> = RouteProp<
  Params,
  Route
>;
export interface MainTabsScreenProps<Route extends Routes = Routes> {
  navigation: MainTabsNavProp<Route>;
  route: MainTabsRouteProp<Route>;
}

const Tab = createBottomTabNavigator<Params>();

export const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon tvParallaxProperties={{}} color={color} name="my-location" />
          ),
        }}
      />
      <Tab.Screen
        name="Deck"
        component={DeckScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon tvParallaxProperties={{}} color={color} name="description" />
          ),
        }}
      />
      <Tab.Screen
        name="ReviewStack"
        component={ReviewStack}
        options={{
          title: "Review Jobs",
          tabBarIcon: ({ color }) => (
            <Icon tvParallaxProperties={{}} color={color} name="favorite" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
