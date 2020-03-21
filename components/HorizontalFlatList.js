import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  TouchableOpacity
} from "react-native";

import { horizontalFlatListData } from "../data/horizontalFlatListData";

class HorizontalFlatListItem extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          width: 90,
          borderRadius: 10,
          marginLeft: 4,
          marginRight: 4
        }}
      >
        <TouchableOpacity>
          <Image
            source={this.props.item.uri}
            style={{
              width: 90,
              height: 140,
              resizeMode: "cover",
              borderRadius: 5
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            backgroundColor: "transparent",
            zIndex: 1000,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5
          }}
        >
          <Image
            source={this.props.item.avatar}
            style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default class HorizontalFlatList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 160,
            padding: 10,
            shadowColor: "rgb(200, 200, 200)",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2
          }}
        >
          <FlatList
            style={{
              backgroundColor: "#fff"
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={horizontalFlatListData}
            renderItem={({ item, index }) => {
              return (
                <HorizontalFlatListItem
                  item={item}
                  index={index}
                  parentFlatList={this}
                ></HorizontalFlatListItem>
              );
            }}
            keyExtractor={(item, index) => item.id}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "ios" ? 20 : 0,
    marginBottom: 20,
    backgroundColor: "#fff"
  }
});
