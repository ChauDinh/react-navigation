import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { DetailScreen, FinalScreen } from "../screens";

export default class Home extends React.Component {
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
        "https://instagram.fsgn2-3.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/78818087_503115820584646_4431330612608307786_n.jpg?_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=02cVRFNHZx0AX9fnziz&oh=4784be6ea86621d1c65ddae2c8659dbf&oe=5EA49A1B"
    };

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
          onPress={() =>
            navigation.navigate(DetailScreen, mockDataSendToDetailScreen)
          }
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
          onPress={() =>
            navigation.navigate(FinalScreen, mockDataSendToFinalScreen)
          }
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
