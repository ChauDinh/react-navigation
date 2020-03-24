import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  MaskedViewIOS
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerStyle = {
      backgroundColor: "#fff"
    };
    let headerTintColor = "#000";
    let headerTitle = params.name;
    let headerRight = (
      <Image
        source={require("../../icons/menu.png")}
        style={{
          height: 20,
          width: 20,
          margin: 10,
          transform: [{ rotate: "90deg" }]
        }}
      />
    );

    return { headerStyle, headerTintColor, headerTitle, headerRight };
  };
  render() {
    const dataFromExploreScreen = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image
          source={dataFromExploreScreen.avatar}
          style={{ width: "100%", height: 420, borderRadius: 20 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Text style={styles.name}>
            {dataFromExploreScreen.name},{" "}
            {Math.floor(2020 - dataFromExploreScreen.age)}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 50,
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              shadowColor: "rgb(200, 200, 200)",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              marginTop: 5
            }}
          >
            <Image
              source={require("../../icons/matches.png")}
              style={{ width: 26, height: 26, marginTop: 8, marginRight: 8 }}
            />
            <Text style={{ fontSize: 16 }}>69</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.location}>
          <Text style={{ color: "#00e500" }}>🏡</Text> Ho Chi Minh City, Vietnam
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  name: {
    fontSize: 30,
    fontWeight: "900",
    marginTop: 8
  },
  location: {
    fontWeight: "100",
    fontSize: 16,
    marginTop: 8
  }
});
