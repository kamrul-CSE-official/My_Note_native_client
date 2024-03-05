import React from "react";
import { View, Text, Button } from "react-native";

const Home = (props) => {
  return (
    <View>
      <Text>
        This is home. Ipsum sanctus elitr lorem labore sea sadipscing accusam
        sadipscing. Accusam et ut dolor amet eirmod clita sanctus. Ipsum
        consetetur ipsum.
      </Text>
      <Button
        onPress={() => props.navigation.navigate("Login")}
        title="Login"
      />
    </View>
  );
};

export default Home;
