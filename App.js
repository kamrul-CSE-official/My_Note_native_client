import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Navigation from "./src/components/Share/Navigation";
import LoginAndSignUp from "./src/pages/LoginAndSighUp/LoginAndSignUp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginAndSignUp} />
        <Stack.Screen name="Home" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
