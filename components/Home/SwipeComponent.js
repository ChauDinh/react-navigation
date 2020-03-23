import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class SwipeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.swipeImageUrl} style={styles.image} />
        <Text style={styles.text}>{this.props.slogan}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
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
    fontSize: 20,
    fontWeight: "800",
    marginTop: 16,
    textAlign: "center",

    color: "#2CB9B0"
  },
  image: {
    width: "100%",
    height: 250
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    color: "#69807e"
  }
});
