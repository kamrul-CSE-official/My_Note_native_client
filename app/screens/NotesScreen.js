import React from "react";
import { Button, Text, View } from "react-native";

const NotesScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text>This is Notes</Text>
      <Button
        onPress={() => props.navigation.navigate("Note Details")}
        title="Details"
      />
    </View>
  );
};

export default NotesScreen;
