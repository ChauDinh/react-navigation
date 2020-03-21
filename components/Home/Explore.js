import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { ProfileScreen } from "../../screens";
import { exploreFlatlistData } from "../../data/exploreFlatlistData";

class FlatlistItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1 / 2,
          backgroundColor: "#FFF",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 10,
          paddingLeft: 0,
          paddingRight: 0,
          shadowColor: "rgb(200, 200, 200)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          height: 220
        }}
        onPress={this.props.onPress}
      >
        <Image
          source={this.props.item.avatar}
          style={{
            width: "100%",
            height: 220
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
              <Text style={{ color: "#00e500" }}>●</Text> {this.props.item.name}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Explore extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2
    };
    let headerTintColor = "#000";
    let headerBackTitle = "Back";
    let headerTitle = "Explore";
    let headerRight = (
      <Image
        source={require("../../icons/search.png")}
        style={{ width: 26, height: 26, margin: 20 }}
      />
    );

    return {
      headerStyle,
      headerTintColor,
      headerBackTitle,
      headerTitle,
      headerRight
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text style={styles.slogan}>Explore</Text>
            </View>
          }
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
    flex: 1,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  },
  slogan: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 50,
    color: "#2CB9B0"
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    padding: 5
  }
});
