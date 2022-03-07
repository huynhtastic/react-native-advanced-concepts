import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AuthScreen, WelcomeScreen } from "../screens";

export type Params = {
  Auth: undefined;
  Welcome: undefined;
  Main: undefined;
};

type Routes = keyof Params;

export type WelcomeTabsScreenProps<Route extends Routes = Routes> =
  BottomTabScreenProps<Params, Route>;

const Tab = createBottomTabNavigator<Params>();

export const WelcomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Auth" component={AuthScreen} />
      {/* <Tab.Screen name="Main" component={MainTabNavigator} /> */}
    </Tab.Navigator>
  );
};
