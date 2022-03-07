import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WelcomeTabs } from "./src/navigators/WelcomeTabs";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <WelcomeTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}
