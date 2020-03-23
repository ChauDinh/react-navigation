import React from "react";
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class Messages extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello from Messages!</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
});
