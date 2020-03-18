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
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      shadowColor: "rgb(200, 200, 200)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2
    };
    let headerTitle = (
      <Image
        source={require("../../icons/title.png")}
        style={styles.logo}
      ></Image>
    );

    return { headerStyle, headerTitle };
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
                  height: Math.floor(SCREEN_HEIGHT - 160),
                  width: SCREEN_WIDTH - 30,
                  position: "absolute"
                }
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.loveOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 20,
                  left: 10,
                  zIndex: 1000
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "800",
                    padding: 10,
                    backgroundColor: "green"
                  }}
                >
                  LOVE
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.noOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 20,
                  right: 10,
                  zIndex: 1000
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "800",
                    padding: 10,
                    backgroundColor: "red"
                  }}
                >
                  NO
                </Text>
              </Animated.View>

              <Image
                source={item.uri}
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 2,
                  shadowColor: "rgb(0, 0, 0)",
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: 0.2
                }}
              />
              <Animated.View
                style={{
                  position: "absolute",
                  bottom: 5,
                  left: 5,
                  right: 5,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                  backgroundColor: "transparent"
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 36,
                      fontWeight: "900",
                      paddingTop: 10,
                      color: "#fff"
                    }}
                  >
                    {item.name}, {2020 - item.year}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    Ho Chi Minh City, Vietnam
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate(ProfileScreen, {
                        name: item.name,
                        age: 2020 - item.year,
                        avatar: item.uri
                      })
                    }
                    style={{
                      padding: 10,
                      backgroundColor: "#eeb5ff",
                      color: "#333",
                      fontSize: 16,
                      fontWeight: "600",
                      marginTop: 10,
                      marginRight: 5
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
                  height: Math.floor(SCREEN_HEIGHT - 160),
                  width: SCREEN_WIDTH - 30,
                  position: "absolute"
                }
              ]}
            >
              <Image
                source={item.uri}
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 2,
                  shadowColor: "rgb(200, 200, 200)",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2
                }}
              />
              <Animated.View
                style={{
                  position: "absolute",
                  bottom: 5,
                  left: 5,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                  backgroundColor: "transparent"
                }}
              >
                <Text
                  style={{
                    fontSize: 36,
                    fontWeight: "900",
                    paddingTop: 10,
                    color: "#fff"
                  }}
                >
                  {item.name}, {2020 - item.year}
                </Text>
                <Text style={{ color: "#fff" }}>Ho Chi Minh City, Vietnam</Text>
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
        <View style={{ flex: 1 }}>{this.renderUSer()}</View>
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
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20
  },
  logo: {
    height: 40,
    width: 110
  },
  text: {
    fontSize: 36,
    fontWeight: "900",
    color: "#0C1B3D",
    marginBottom: 10
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  }
});
