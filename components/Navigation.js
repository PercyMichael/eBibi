import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="/" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
