import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

// import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const imgHeight = Image.resolveAssetSource(this.props.item.uri).height;
    const ratio =
      SCREEN_WIDTH / Image.resolveAssetSource(this.props.item.uri).width;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={this.props.item.avatar}
              style={{
                width: 50,
                height: 50,
                marginRight: 10,
                borderRadius: 50 / 2
              }}
            />
            <Text style={{ fontSize: 16, fontWeight: "300" }}>
              {this.props.item.creator}{" "}
            </Text>
          </View>
          <Text style={{ color: "#545454" }}>
            {this.props.item.time.getMinutes()} mins ago
          </Text>
        </View>
        <Image
          source={this.props.item.uri}
          style={{ width: SCREEN_WIDTH, height: imgHeight * ratio }}
          resizeMethod="auto"
        />
        <View style={styles.description}>
          <Text style={{ color: "#333", fontSize: 16 }}>
            {this.props.item.tut}
          </Text>
        </View>
        <View style={styles.comment}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity>
              <Image
                source={require("../icons/matches.png")}
                style={{ width: 20, height: 20, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../icons/chat.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#545454", marginRight: 10 }}>
              2.69k Comments
            </Text>
            <Text style={{ color: "#545454" }}>2.7k Likes</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    shadowColor: "rgb(200, 200, 200)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    marginTop: 8
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  description: {
    padding: 20
  },
  comment: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between"
    // height: 50,
    // width: "100%"
  }
});
