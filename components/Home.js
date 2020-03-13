import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Button from "react-native-button";

import { DetailScreen, FinalScreen } from "../screens";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerTitle = "Home";
    let headerBackTitle = "Back";
    let headerRight = (
      <Button
        containerStyle={{
          margin: 5,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 5,
          backgroundColor: "#147efb"
        }}
        style={{ fontSize: 15, color: "white" }}
        onPress={() => {
          params.onSave();
        }}
      >
        Girls
      </Button>
    );
    return { headerTitle, headerRight, headerBackTitle };
  };
  _onSave() {
    this.props.navigation.setParams({ isSaving: true });
    // Do some tasks
    let intervalId = setInterval(() => {
      console.log("I've finished some tasks in 3 seconds");
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

    /**
     * Mock Data
     */

    const mockDataSendToDetailScreen = {
      name: "Võ Lê Yến Trân",
      avatar:
        "https://instagram.fsgn2-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/88203630_1926414187502639_2441702684124980121_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DmY2APD9FvgAX_uczWR&oh=a478059047e31252959b956eee5c7158&oe=5EA64389"
    };

    const mockDataSendToFinalScreen = {
      name: "Võ Lê Yến Trân",
      avatar:
        "https://instagram.fsgn2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/70961773_487753308731877_6998093249824137026_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=t9Jzce_ERsoAX8F4PhZ&oh=45cff48dbd44d60648171cf6da4ecf59&oe=5EA4C6F1"
    };

    // Create a view that have indicator
    const mainView =
      navigation.state.params && navigation.state.params.isSaving === true ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <Button
            containerStyle={{
              padding: 15,
              margin: 20,
              width: 200,
              borderRadius: 50,
              backgroundColor: "#147efb"
            }}
            style={styles.button}
            onPress={() =>
              navigation.navigate(DetailScreen, mockDataSendToDetailScreen)
            }
          >
            Go to Detail
          </Button>
          <Button
            containerStyle={{
              padding: 15,
              margin: 20,
              width: 200,
              borderRadius: 50,
              backgroundColor: "#147efb"
            }}
            style={styles.button}
            onPress={() =>
              navigation.navigate(FinalScreen, mockDataSendToFinalScreen)
            }
          >
            Go to Final
          </Button>
        </View>
      );

    return mainView;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white"
  },
  button: {
    fontSize: 18,
    backgroundColor: "#147efb",
    color: "#fff"
  }
});
