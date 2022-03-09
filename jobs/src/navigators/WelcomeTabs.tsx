import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { AuthScreen, WelcomeScreen } from "../screens";
import { MainTabs, MainTabsNavProp } from "./MainTabs";

export type Params = {
  Auth: undefined;
  Welcome: undefined;
  Main: undefined;
};

type Routes = keyof Params;
type WelcomeTabsNavProp<Route extends Routes = Routes> =
  CompositeNavigationProp<
    BottomTabNavigationProp<Params, Route>,
    MainTabsNavProp
  >;
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
