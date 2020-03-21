import React from "react";
import { Text, View, ScrollView } from "react-native";

import HorizontalFlatList from "../HorizontalFlatList";
import Status from "../Status";
import { statusData } from "../../data/statusData";

export default class News extends React.Component {
  render() {
    return (
      <ScrollView>
        <HorizontalFlatList />
        {statusData.map((item, index) => {
          return item.uri !== "" ? <Status key={item.id} item={item} /> : null;
        })}
      </ScrollView>
    );
  }
}
