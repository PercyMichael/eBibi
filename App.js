import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
