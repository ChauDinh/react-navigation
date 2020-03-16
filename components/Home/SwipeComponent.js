import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class SwipeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.slogan}</Text>
        <Text style={styles.sub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Image source={this.props.swipeImageUrl} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    marginTop: 40
  },
  text: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 50,
    color: "#0C1B3D"
  },
  sub: {
    fontSize: 18,
    fontWeight: "300",
    color: "#555",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 16
  },
  image: {
    width: "100%",
    height: 250
  }
});
