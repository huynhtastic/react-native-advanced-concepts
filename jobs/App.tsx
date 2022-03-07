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
import { Button } from "react-native-elements";

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
        options={({ navigation }) => ({
          title: "Review Jobs",
          headerRight: () => {
            return (
              <Button
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

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={{ header: undefined }}>
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Deck" component={DeckScreen} />
      <MainTab.Screen name="ReviewStack" component={StackNavigator} />
    </MainTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ header: undefined }}>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Auth" component={AuthScreen} />
        <Tab.Screen name="Main" component={MainTabNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
