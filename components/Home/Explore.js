import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { GirlScreen } from "../../screens";

export default class Explore extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      backgroundColor: "#fff"
    };
    let headerTintColor = "#000";
    let headerBackTitle = "Back";

    return { headerStyle, headerTintColor, headerBackTitle };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello from Explore!</Text>
        <Button onPress={() => navigation.navigate(GirlScreen)}>Profile</Button>
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
