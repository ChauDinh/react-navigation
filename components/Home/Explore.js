import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

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
          source={{ uri: this.props.item.avatar }}
          style={{
            width: "100%",
            height: 180
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../../icons/matches.png")}
              style={{ width: 20, height: 20, marginTop: 10 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center"
            }}
          >
            {this.props.item.name}
          </Text>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image
              source={require("../../icons/info.png")}
              style={{ width: 20, height: 20, marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Explore extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      backgroundColor: "#fff"
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
                onPress={() => navigation.navigate(ProfileScreen)}
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
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 50,
    color: "#0C1B3D"
  }
});
