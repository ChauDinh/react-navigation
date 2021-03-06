import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Girl extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      backgroundColor: "#fff"
    };
    let headerTintColor = "#000";

    return { headerStyle, headerTintColor };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Girl</Text>
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
