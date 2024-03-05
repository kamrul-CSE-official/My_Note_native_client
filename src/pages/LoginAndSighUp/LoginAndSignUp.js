import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Login from "./Login";
import SignUp from "./SignUp";

const Tab = createBottomTabNavigator();

const LoginAndSignUp = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="login" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignUp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sign-in" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoginAndSignUp;
