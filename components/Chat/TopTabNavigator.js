import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";

import News from "./News";
import Messages from "./Messages";

const routeConfigs = {
  News: {
    screen: News
  },
  Messages: {
    screen: Messages
  }
};

const tabNavigationConfigs = {
  initialRouteName: "News",
  order: ["News", "Messages"],
  animationEnabled: false,
  tabBarPosition: "top",
  tabBarOptions: {
    style: {
      backgroundColor: "#fff"
    },
    labelStyle: {
      color: "#2CB9B0",
      fontWeight: "700"
    },
    indicatorStyle: {
      height: 3,
      backgroundColor: "#2CB9B0"
    }
  }
};

export const TopTabNavigator = createMaterialTopTabNavigator(
  routeConfigs,
  tabNavigationConfigs
);
