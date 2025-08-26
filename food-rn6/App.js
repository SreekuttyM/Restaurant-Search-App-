import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import SearchScreen from "./src/screens/SearchScreen";
import ResultShownScreen from "./src/screens/ResultsShownScreen";
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultShownScreen" component={ResultShownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
