import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.title}>
            <Text style={styles.titleText}>Estação Espacial Online</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ISSLocation")}
            style={styles.routeButton}
          >
            <Text style={styles.routeText}>Rastrear EEI</Text>
            <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Meteors")}
            style={styles.routeButton}
          >
            <Text style={styles.routeText}>Meteoros</Text>
            <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(0,0,0,0.25)" },
  title: {
    flex: 0.15,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  routeButton: {
    flex: 0.25,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 60,
    paddingLeft: 25,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",

    width: "100%",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },

  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    right: -30,
    top: -90,
  },

  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15,
  },

  bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
});
