import React from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import Categories from "./Categories";
import { ProfileScreen } from "../../screens";
import { mockDataForMatches } from "../../data/matchesFlatlistData";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
    };
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });
    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    };
    this.loveOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });
    this.noOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp"
    });
  }
  static navigationOptions = ({ navigation }) => {
    let headerStyle = {
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomWidth: 0,
      backgroundColor: "#2CB9B0"
    };
    let headerLeft = (
      <Text style={{ fontSize: 30, fontWeight: "900", color: "#fff" }}>
        Matches
      </Text>
    );

    return { headerStyle, headerLeft };
  };

  renderUSer = () => {
    return mockDataForMatches
      .map((item, idx) => {
        if (idx < this.state.currentIndex) {
          return null;
        } else if (idx === this.state.currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id}
              style={[
                this.rotateAndTranslate,
                {
                  // height: SCREEN_HEIGHT - 200,
                  // width: SCREEN_WIDTH - 30,
                  height: SCREEN_HEIGHT / 1.5,
                  width: SCREEN_WIDTH,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                  flex: 1,
                  position: "absolute",
                  backgroundColor: "#fff",
                  shadowColor: "rgb(200, 200, 200)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2
                }
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.loveOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 20,
                  left: 24,
                  zIndex: 1000,
                  borderRadius: 10
                }}
              >
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 16,
                    paddingLeft: 16,
                    backgroundColor: "#38EF7D",
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 24, fontWeight: "800" }}
                  >
                    LOVE
                  </Text>
                </View>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.noOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 20,
                  right: 24,
                  zIndex: 1000
                }}
              >
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 16,
                    paddingLeft: 16,
                    backgroundColor: "#f5426f",
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 24,
                      fontWeight: "800"
                    }}
                  >
                    NO
                  </Text>
                </View>
              </Animated.View>

              <Image
                source={item.uri}
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: 10
                }}
              />
              <Animated.View
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: 18,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "transparent"
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 230,
                    borderRadius: 50,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginRight: 5,
                    marginTop: 10,
                    backgroundColor: "#2CB9B0"
                  }}
                  onPress={() =>
                    this.props.navigation.navigate(ProfileScreen, {
                      name: item.name,
                      age: 2020 - item.year,
                      avatar: item.uri
                    })
                  }
                >
                  <Text
                    style={{
                      textAlign: "center",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "#fff",
                      fontSize: 23,
                      fontWeight: "700"
                    }}
                  >
                    Profile
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={item.id}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT / 1.5,
                  width: SCREEN_WIDTH,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 10,
                  paddingTop: 10,
                  position: "absolute",
                  shadowColor: "rgb(200, 200, 200)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2
                }
              ]}
            >
              <Image
                source={item.uri}
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: 10
                }}
              />
              <Animated.View
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: 18,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "transparent"
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 230,
                    borderRadius: 50,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginRight: 5,
                    marginTop: 10,
                    backgroundColor: "#2CB9B0"
                  }}
                  onPress={() =>
                    this.props.navigation.navigate(ProfileScreen, {
                      name: item.name,
                      age: 2020 - item.year,
                      avatar: item.uri
                    })
                  }
                >
                  <Text
                    style={{
                      textAlign: "center",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "#fff",
                      fontSize: 23,
                      fontWeight: "700"
                    }}
                  >
                    Profile
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Categories />
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          {this.renderUSer()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 36,
    fontWeight: "900",
    color: "#2CB9B0",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 15
  }
});
