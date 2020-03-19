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
          marginRight: 4,
          shadowColor: "rgb(200, 200, 200)",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: -6,
            backgroundColor: "#fff",
            zIndex: 1000,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 10
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "700", color: "#545454" }}>
            {this.props.item.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={this.props.item.uri}
            style={{
              width: 90,
              height: "100%",
              resizeMode: "cover",
              borderRadius: 10
            }}
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
        <View style={{ height: 150 }}>
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
    marginTop: Platform.OS === "ios" ? 20 : 0
  }
});
