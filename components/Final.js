import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { HomeScreen } from "../screens";

export default class Final extends React.Component {
  render() {
    const { navigation } = this.props;
    const paramsFromHomeScreen = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Final Screen</Text>
        <Text style={styles.text}>Name: {paramsFromHomeScreen.name}</Text>
        <Image
          source={{ uri: paramsFromHomeScreen.avatar }}
          style={{ width: 400, height: 400 }}
        />
        <Button
          containerStyle={{
            padding: 10,
            margin: 20,
            width: 200,
            height: 45,
            borderRadius: 10,
            backgroundColor: "black"
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
    backgroundColor: "pink",
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
