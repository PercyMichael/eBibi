import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Categories";
import Home from "../screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "#6200EE",
        tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="microsoft-xbox-controller-menu"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="certificate" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     options={{
    //       headerShown: false,
    //       title: "My home",
    //       headerStyle: {
    //         backgroundColor: "#6200EE",
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       },
    //     }}
    //     name="Home"
    //     component={Home}
    //   />
    //   <Stack.Screen name="Categories" component={Categories} />
    // </Stack.Navigator>
  );
};

export default Navigation;
