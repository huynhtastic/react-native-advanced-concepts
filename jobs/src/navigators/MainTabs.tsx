import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { DeckScreen, MapScreen } from "../screens";
import { ReviewStack } from "./ReviewStack";

type Params = {
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
export interface WelcomeTabsScreenProps<Route extends Routes = Routes> {
  navigation: MainTabsNavProp<Route>;
  route: MainTabsRouteProp<Route>;
}

const Tab = createBottomTabNavigator<Params>();

export const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Deck" component={DeckScreen} />
      <Tab.Screen name="ReviewStack" component={ReviewStack} />
    </Tab.Navigator>
  );
};
