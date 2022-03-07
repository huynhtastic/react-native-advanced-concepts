import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { WelcomeTabs } from "./src/navigators/WelcomeTabs";
import { ReviewScreen, SettingsScreen } from "./src/screens";

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

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <WelcomeTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}
