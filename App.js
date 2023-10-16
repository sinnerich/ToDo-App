import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./Drawer";
import LogInScreen from "./authen/LogIn";
import RegisterScreen from "./authen/Register";
import StackNavigator from "./StackNavigator";

export default function App() {
  return <NavigationContainer>
    <StackNavigator />
    </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
