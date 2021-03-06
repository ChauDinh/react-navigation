import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.text}>Explore</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    marginTop: 30,
    width: 230,
    borderRadius: 50,
    backgroundColor: "#2CB9B0"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700"
  }
});
