import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

import { TopTabNavigator } from "./TopTabNavigator";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      display: "none"
    };

    return { headerStyle };
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>Messages</Text>
          <TopTabNavigator />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
    height: "100%"
  },
  text: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: "700",
    color: "#2CB9B0"
  }
});
