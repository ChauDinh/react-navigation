import React from "react";
import { AppRegistry, Image, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import Me from "./components/Me/Me";
import Explore from "./components/Home/Explore";
import Profile from "./components/Profile/Profile";
import News from "./components/Chat/News";
import Messages from "./components/Chat/Messages";

import {
  HomeScreen,
  ExploreScreen,
  MatchesScreen,
  ProfileScreen,
  ChatScreen,
  MeScreen,
  AccountScreen
} from "./screens";

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
      backgroundColor: "#2CB9B0"
    },
    labelStyle: {
      color: "#fff",
      fontWeight: "700"
    },
    indicatorStyle: {
      height: 5,
      backgroundColor: "#fff"
    }
  }
};

export const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: Home
  },
  ExploreScreen: {
    screen: Explore
  },
  ProfileScreen: {
    screen: Profile
  }
});

export const MatchesStack = createStackNavigator({
  MatchesScreen: {
    screen: Matches
  },
  ProfileScreen: {
    screen: Profile
  }
});

const ChatTopNavigator = createMaterialTopTabNavigator(
  routeConfigs,
  tabNavigationConfigs
);

export const ChatStack = createStackNavigator(
  {
    ChatTopNavigator: ChatTopNavigator
  },
  {
    navigationOptions: {
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0,
        backgroundColor: "#2CB9B0"
      },
      headerLeft: (
        <Text style={{ fontSize: 30, fontWeight: "900", color: "#fff" }}>
          All Chat
        </Text>
      )
    }
  }
);

export const MeStack = createStackNavigator({
  MeScreen: {
    screen: Me
  }
});

const App = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("./icons/home-inverted.png")}
              style={{
                width: 30,
                height: 30,
                marginTop: 10
              }}
            />
          ) : (
            <Image
              source={require("./icons/house.png")}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          );
        }
      })
    },
    Matches: {
      screen: MatchesStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("./icons/matches-inverted.png")}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          ) : (
            <Image
              source={require("./icons/matches.png")}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          );
        }
      })
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("./icons/chat-inverted.png")}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          ) : (
            <Image
              source={require("./icons/chat.png")}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          );
        }
      })
    },
    Me: {
      screen: MeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("./icons/me-inverted.png")}
              style={{
                width: 30,
                height: 30,
                marginTop: 10
              }}
            />
          ) : (
            <Image
              source={require("./icons/me.png")}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          );
        }
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      showLabel: false,
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
        shadowColor: "rgb(200, 200, 200)",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        paddingBottom: 10
      }
    },
    // Tab navigator animation
    // animationEnabled: true,
    swipeEnalbled: true
  }
);
AppRegistry.registerComponent("myapprn", () => App);
