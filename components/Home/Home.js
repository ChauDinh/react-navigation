import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

import { ExploreScreen } from "../../screens";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = (
      <Image source={require("../../icons/title.png")} style={styles.title} />
    );
    let headerStyle = {
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2
    };
    let headerRight = (
      <Image
        source={require("../../icons/send.png")}
        style={{ width: 26, height: 26, margin: 20 }}
      />
    );
    let headerLeft = (
      <Image
        source={require("../../icons/shutter.png")}
        style={{ width: 26, height: 26, margin: 20 }}
      />
    );
    let headerTintColor = "#000";
    let headerBackTitle = "Back";
    let footerStyle = {
      backgroundColor: "#fff"
    };
    return {
      headerTitle,
      headerStyle,
      headerTintColor,
      headerBackTitle,
      headerRight,
      headerLeft,
      footerStyle
    };
  };
  render() {
    let { navigation } = this.props;

    return (
      <View style={styles.container}>
        {/* <Text>Hello from Home!</Text>
        <Button
          onPress={() => {
            navigation.navigate(ExploreScreen);
          }}
        >
          Explore
        </Button> */}
        <Image
          source={{
            uri:
              "https://instagram.fpnh18-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/70961773_487753308731877_6998093249824137026_n.jpg?_nc_ht=instagram.fpnh18-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=t9Jzce_ERsoAX_pNN3h&oh=49807da2a9da56925875d0693ed8d09c&oe=5EA4C6F1"
          }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 36,
    width: 107
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20
  },
  image: {
    width: "100%",
    height: 360,
    borderRadius: 10,
    shadowColor: "rgb(200, 200, 200)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  }
});
