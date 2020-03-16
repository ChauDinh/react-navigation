import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});