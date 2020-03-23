import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

import HorizontalFlatList from "../HorizontalFlatList";
import Status from "../Status";
import { statusData } from "../../data/statusData";

export default class News extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HorizontalFlatList />
        {statusData.map((item, index) => {
          return item.uri !== "" ? <Status key={item.id} item={item} /> : null;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
