import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WelcomeTabs } from "./src/navigators/WelcomeTabs";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <WelcomeTabs />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
