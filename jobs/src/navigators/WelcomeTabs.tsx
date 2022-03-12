import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { AuthScreen, WelcomeScreen } from "../screens";
import {
  MainTabs,
  MainTabsNavProp,
  Params as MainTabsParams,
} from "./MainTabs";

export type Params = {
  Auth: undefined;
  Welcome: undefined;
  Main: NavigatorScreenParams<MainTabsParams>;
};

type Routes = keyof Params;
type WelcomeTabsNavProp<Route extends Routes = Routes> =
  BottomTabNavigationProp<Params, Route>;
type WelcomeTabsRouteProp<Route extends Routes = Routes> = RouteProp<
  Params,
  Route
>;
export interface WelcomeTabsScreenProps<Route extends Routes = Routes> {
  navigation: WelcomeTabsNavProp<Route>;
  route: WelcomeTabsRouteProp<Route>;
}

const Tab = createBottomTabNavigator<Params>();

export const WelcomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Auth" component={AuthScreen} />
      <Tab.Screen name="Main" component={MainTabs} />
    </Tab.Navigator>
  );
};
