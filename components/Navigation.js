import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default Navigation;
