// @flow
import { StyleSheet } from "react-native";
import { Metrics } from "@theme";

export default StyleSheet.create({
  container: {
    top: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  loadingMessage: {
    marginBottom: Metrics.baseMargin,
  },
  modal: {
    margin: 0,
  },
  loaderStyle: {
    borderRadius: 50,
    height: 75,
    width: 75,
  },
  loaderImgStyle: {
    position: "absolute",
    height: 45,
    width: 45,
    borderRadius: 30,
  },
});
