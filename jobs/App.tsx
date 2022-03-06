import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthScreen } from "./screens/AuthScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";

const Tab = createBottomTabNavigator<{ Auth: undefined; Welcome: undefined }>();

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Auth" component={AuthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
