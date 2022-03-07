import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeckScreen, MapScreen } from "../screens";
const Tab = createBottomTabNavigator<{
  Map: undefined;
  Deck: undefined;
  ReviewStack: undefined;
}>();

export const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Deck" component={DeckScreen} />
      <Tab.Screen name="ReviewStack" component={StackNavigator} />
    </Tab.Navigator>
  );
};
