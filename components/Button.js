import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <LinearGradient
          colors={["#38EF7D", "#2CB9B0"]}
          style={{
            flex: 1,
            zIndex: 100,
            justifyContent: "center",
            borderRadius: 50
          }}
        >
          <Text style={styles.text}>Explore</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    marginTop: 30,
    width: 230,
    height: 80,
    borderRadius: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700"
  }
});
