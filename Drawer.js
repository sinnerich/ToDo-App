import { createDrawerNavigator } from "@react-navigation/drawer";
import DoneTodos from "./screens/DoneTodos";
import DeletedTodos from "./screens/DeletedTodos";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function MyDrawer({ route }) {
  console.log("drawer", route);
  return (
    <Drawer.Navigator
      initialRouteName="MainScreen"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={() => props.navigation.navigate("Register")}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen initialParams={{user:route.params.user}} name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="DoneTodos" component={DoneTodos} />
      <Drawer.Screen name="DeletedTodos" component={DeletedTodos} />
    </Drawer.Navigator>
  );
}
