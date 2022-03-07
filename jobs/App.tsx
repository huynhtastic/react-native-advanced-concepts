import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthScreen } from "./screens/AuthScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { MapScreen } from "./screens/MapScreen";
import { DeckScreen } from "./screens/DeckScreen";
import { ReviewScreen } from "./screens/ReviewScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator<{
  Auth: undefined;
  Welcome: undefined;
  Main: undefined;
}>();

const MainTab = createBottomTabNavigator<{
  Map: undefined;
  Deck: undefined;
  ReviewStack: undefined;
}>();

const Stack = createNativeStackNavigator<{
  Review: undefined;
  Settings: undefined;
}>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          title: "Review Jobs",
          headerRight: () => {
            return <Text>Go Right</Text>;
          },
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Deck" component={DeckScreen} />
      <MainTab.Screen name="ReviewStack" component={StackNavigator} />
    </MainTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Auth" component={AuthScreen} />
        <Tab.Screen name="Main" component={MainTabNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
