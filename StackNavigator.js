import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import DeletedTodos from "./screens/DeletedTodos";
import DoneTodos from "./screens/DoneTodos";
import RegisterScreen from "./authen/Register";
import MyDrawer from "./Drawer";
import LogInScreen from "./authen/LogIn";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={LogInScreen}></Stack.Screen>
        <Stack.Screen name="Drawer" component={MyDrawer}></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
