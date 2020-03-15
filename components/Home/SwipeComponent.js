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
        <Image source={this.props.swipeImageUrl} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
    marginTop: 40
  },
  text: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 50
  },
  image: {
    width: "100%",
    height: 350
  }
});
