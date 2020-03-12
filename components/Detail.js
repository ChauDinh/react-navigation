import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { HomeScreen } from "../screens";

export default class Detail extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Detail Screen</Text>
        <Button
          containerStyle={{
            padding: 10,
            margin: 20,
            width: 200,
            height: 45,
            borderRadius: 10,
            backgroundColor: "darkgreen"
          }}
          style={styles.button}
          onPress={() => navigation.navigate(HomeScreen)}
        >
          Go to Home
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumseagreen",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white"
  },
  button: {
    fontSize: 18,
    color: "white"
  }
});
