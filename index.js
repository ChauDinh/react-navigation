import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import Chat from "./components/Chat/Chat";
import Me from "./components/Me/Me";
import Explore from "./components/Home/Explore";
import Profile from "./components/Profile/Profile";
import {
  HomeScreen,
  ExploreScreen,
  MatchesScreen,
  ProfileScreen,
  ChatScreen,
  MeScreen,
  AccountScreen
} from "./screens";

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

export const ChatStack = createStackNavigator({
  ChatScreen: {
    screen: Chat
  }
});

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
