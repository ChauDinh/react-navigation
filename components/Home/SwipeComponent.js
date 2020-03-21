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

    color: "#19191B"
  },
  sub: {
    fontSize: 18,
    fontWeight: "300",
    color: "#222",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 16
  },
  image: {
    width: "100%",
    height: 250
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    color: "#9c9c9c"
  }
});
