import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text className="text-red-500">This is Home </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

export default HomeScreen;
