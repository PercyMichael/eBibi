import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation";
import { StatusBar } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    secondary: "#6200EE",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
