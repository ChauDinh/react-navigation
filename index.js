import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "./components/Home";
import Detail from "./components/Detail";
import Final from "./components/Final";

import { HomeScreen, DetailScreen, FinalScreen } from "./screens";

const App = StackNavigator({
  HomeScreen: {
    screen: Home
  },
  DetailScreen: {
    screen: Detail
  },
  FinalScreen: {
    screen: Final
  }
});
AppRegistry.registerComponent("myapprn", () => App);
