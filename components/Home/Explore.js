import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { ProfileScreen } from "../../screens";

export default class Explore extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      backgroundColor: "#fff"
    };
    let headerTintColor = "#000";
    let headerBackTitle = "Back";
    let headerTitle = "Explore";
    let headerRight = (
      <Image
        source={require("../../icons/search.png")}
        style={{ width: 26, height: 26, margin: 20 }}
      />
    );

    return {
      headerStyle,
      headerTintColor,
      headerBackTitle,
      headerTitle,
      headerRight
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello from Explore!</Text>
        <Button onPress={() => navigation.navigate(ProfileScreen)}>
          Profile
        </Button>
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
