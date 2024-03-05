import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { getTokens, saveToken } from "./utils/manageToken"; // Import correct functions

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log(email, password);
      const login = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      saveToken(login?.data?.accessToken, login?.data?.refreshToken);
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error("Login failed:", error?.message);
    }
  };

  const handleSeeToken = async () => {
    const { accessToken, refreshToken } = await getTokens();
    console.log("Access Token get:", accessToken);
    console.log("Refresh Token get:", refreshToken);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Login Form</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
            width: 300,
          }}
          required={true}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none" // prevent auto-capitalization
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
            width: 300,
          }}
          required={true}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          width: 300,
          alignItems: "center",
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Login <AntDesign name="login" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSeeToken}>
        <Text>Token</Text>
      </TouchableOpacity>
    </View>
  );
}
