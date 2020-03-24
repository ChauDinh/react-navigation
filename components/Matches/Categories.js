import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import { mockLocationData } from "../../data/matchesFlatlistData";

export default class Categories extends React.Component {
  render() {
    return (
      <View style={styles.flatList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={mockLocationData}
          renderItem={({ item, idx }) => {
            return (
              <TouchableOpacity style={styles.card}>
                <Text style={{ color: "#000", fontWeight: "700" }}>
                  <Image
                    source={require("../../icons/placeholder.png")}
                    style={{ width: 13, height: 13 }}
                  />{" "}
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, idx) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    height: 53,
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#2CB9B0"
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 40,
    height: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
