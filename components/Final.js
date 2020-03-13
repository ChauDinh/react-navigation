import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { HomeScreen } from "../screens";

export default class Final extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerTitle = "Final";
    let headerRight = (
      <Button
        containerStyle={{
          margin: 5,
          padding: 5,
          borderRadius: 4,
          backgroundColor: "#147efb"
        }}
        style={{ fontSize: 15, color: "white" }}
        onPress={() => params.onSave()}
      >
        Add Girl
      </Button>
    );
    return { headerTitle, headerRight };
  };
  _onSave() {
    this.props.navigation.setParams({ isSaving: true });

    let intervalId = setInterval(() => {
      console.log("Begin chatting...");
      this.props.navigation.setParams({ isSaving: false });
      clearInterval(intervalId);
    }, 3000);
  }
  componentDidMount() {
    this.props.navigation.setParams({
      onSave: this._onSave.bind(this),
      isSaving: false
    });
  }
  render() {
    const { navigation } = this.props;
    const paramsFromHomeScreen = this.props.navigation.state.params;
    const mainView =
      navigation.state.params && navigation.state.params.isSaving === true ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <Image
            source={{ uri: paramsFromHomeScreen.avatar }}
            style={{ width: 400, height: 400 }}
          />
          <Text style={styles.text}>Name: {paramsFromHomeScreen.name}</Text>

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
    return mainView;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#000",
    marginTop: 20
  },
  button: {
    fontSize: 18,
    color: "white"
  }
});
