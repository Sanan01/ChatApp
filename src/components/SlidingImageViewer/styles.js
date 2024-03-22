import { StyleSheet, Dimensions, Platform } from "react-native";

import { Colors, Metrics } from "@theme";
import { Util } from "@utils";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default styles = StyleSheet.create({
  imageContainer: {
    height: Platform.OS === "ios" ? windowHeight / 3.9 : windowHeight / 3.6,
    width: windowWidth,
    backgroundColor: Colors.background,
    paddingTop: Metrics.ratio(20),
    alignItems: "center",
  },
  largeImageStyle: {
    borderRadius: Metrics.ratio(16),
    width: "90%",
    height: windowHeight / 4.3,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // bottom: Platform.OS === "ios" ? Metrics.ratio(70) : Metrics.ratio(30),
    bottom: Metrics.ratio(30),
    left: Metrics.ratio(0),
    right: Metrics.ratio(0),
  },
  dot: {
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
    borderRadius: Metrics.ratio(5),
    marginHorizontal: Metrics.ratio(2),
  },
  activeDot: {
    backgroundColor: Colors.background,
  },
  inactiveDot: {
    backgroundColor: Colors.opacColor,
    opacity: 0.5,
  },
});
