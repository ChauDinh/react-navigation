import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { ProfileScreen, HomeScreen } from "../../screens";
import { exploreFlatlistData } from "../../data/exploreFlatlistData";

class FlatlistItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1 / 2,
          backgroundColor: "#FFF",
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 10,
          paddingLeft: 0,
          paddingRight: 0,
          shadowColor: "rgb(200, 200, 200)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          height: 220,
          borderRadius: 10
        }}
        onPress={this.props.onPress}
      >
        <Image
          source={this.props.item.avatar}
          style={{
            width: "100%",
            height: 220,
            borderRadius: 10
          }}
        />
        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            position: "absolute",
            backgroundColor: "transparent",
            bottom: 0
          }}
        >
          <LinearGradient
            colors={[
              "rgba(200, 200, 200, 0)",
              "rgba(200,200,200,0.2609418767507002)",
              "rgba(0, 0, 0, 0.6)"
            ]}
            style={styles.linearGradient}
          >
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: "700",
                textAlign: "left",
                color: "#fff"
              }}
            >
              <Text style={{ color: "#2CB9B0", fontSize: 10 }}>●</Text>{" "}
              {this.props.item.name}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      backgroundColor: "#2CB9B0",
      borderBottomWidth: 0,
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      paddingLeft: 15
    };
    let headerTintColor = "#fff";
    let headerBackTitle = "Back";
    let headerLeft = (
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate(HomeScreen)}>
          <Image
            source={require("../../icons/back.png")}
            style={{ width: 16, height: 16, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: "900", color: "#fff" }}>
          Explore
        </Text>
      </View>
    );

    return {
      headerStyle,
      headerTintColor,
      headerBackTitle,
      headerLeft
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#2CB9B0",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 5,
            paddingBottom: 10
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderWidth: 0,
              backgroundColor: "#fff",
              borderRadius: 14.7868,
              paddingLeft: 10
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Enter girl's name"
            autoCompleteType={false}
          />
        </View>
        <FlatList
          numColumns={2}
          data={exploreFlatlistData}
          renderItem={({ item, index }) => {
            return (
              <FlatlistItem
                item={item}
                index={index}
                onPress={() =>
                  navigation.navigate(ProfileScreen, {
                    name: item.name,
                    age: item.date,
                    avatar: item.avatar
                    // images: item.images
                  })
                }
              />
            );
          }}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  slogan: {
    fontSize: 46.69,
    fontWeight: "900",
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 50,
    color: "#2CB9B0"
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    padding: 5,
    borderRadius: 10
  }
});
