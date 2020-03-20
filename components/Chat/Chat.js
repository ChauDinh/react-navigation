import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import HorizontalFlatList from "../HorizontalFlatList";
import Status from "../Status";
import { statusData } from "../../data/statusData";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      display: "none"
    };

    return { headerStyle };
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Messages</Text>
          <HorizontalFlatList />
          {statusData.map((item, index) => {
            return <Status key={item.id} item={item} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 20
  },
  text: {
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "700",
    color: "#0C1B3D"
  }
});
