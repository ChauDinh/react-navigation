import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HorizontalFlatList from "../HorizontalFlatList";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      // backgroundColor: "#fff",
      // borderBottomWidth: 0,
      // shadowColor: "rgb(200, 200, 200)",
      // shadowOffset: { width: 0, height: 1 },
      // shadowOpacity: 0.2
      display: "none"
    };

    return { headerStyle };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Messages</Text>
        <HorizontalFlatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 20
  },
  text: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: "700",
    color: "#0C1B3D"
  }
});
