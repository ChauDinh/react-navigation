import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { ExploreScreen } from "../../screens";
import SwipeComponent from "./SwipeComponent";
import Button from "../Button";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = (
      <Image source={require("../../icons/title.png")} style={styles.logo} />
    );
    let headerStyle = {
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 1 },
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
      <Swiper>
        <View style={styles.container}>
          <SwipeComponent
            slogan="A Journey..."
            swipeImageUrl={require("../../images/swipe-image-01.png")}
          />
          <Button onPress={() => navigation.navigate(ExploreScreen)} />
        </View>
        <View style={styles.container}>
          <SwipeComponent
            slogan="Feelings..."
            swipeImageUrl={require("../../images/swipe-image-02.png")}
          />
          <Button onPress={() => navigation.navigate(ExploreScreen)} />
        </View>
        <View style={styles.container}>
          <SwipeComponent
            slogan="Together..."
            swipeImageUrl={require("../../images/swipe-image-03.png")}
          />
          <Button onPress={() => navigation.navigate(ExploreScreen)} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 110
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 50,
    fontWeight: "600"
  },
  image: {
    width: "100%",
    // height: 200,
    borderRadius: 10,
    shadowColor: "rgb(200, 200, 200)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  }
});
