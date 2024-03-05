import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import NotesScreen from "./screens/NotesScreen";
import NoteDetails from "./screens/NoteDetails";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={NotesScreen} />
      <Stack.Screen name="Note Details" component={NoteDetails} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notes" component={NotesStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
