import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { DetailScreen, FinalScreen } from "../screens";

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button
          containerStyle={{
            padding: 10,
            margin: 20,
            width: 200,
            height: 45,
            borderRadius: 10,
            backgroundColor: "darkviolet"
          }}
          style={styles.button}
          onPress={() => navigation.navigate(DetailScreen)}
        >
          Go to Detail
        </Button>
        <Button
          containerStyle={{
            padding: 10,
            margin: 20,
            width: 200,
            height: 45,
            borderRadius: 10,
            backgroundColor: "darkviolet"
          }}
          style={styles.button}
          onPress={() => navigation.navigate(FinalScreen)}
        >
          Go to Final
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
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
