import React from "react";
import Account from "./Account";
import { StyleSheet, View } from "react-native";

export default class Me extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = "Account";
    let headerStyle = {
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2
    };

    return { headerTitle, headerStyle };
  };
  render() {
    return (
      <View style={styles.container}>
        <Account />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
