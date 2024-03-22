import { StyleSheet } from "react-native";
import { Colors, Metrics } from "@theme";

export default styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    height: Metrics.ratio(50),
    width:
      Platform.OS === "android"
        ? Metrics.screenWidth * 0.78
        : Metrics.screenWidth * 0.8,
    borderColor: Colors.lightModeTextInput.borderColor,
    borderWidth: Metrics.ratio(1),
    borderRadius: Metrics.ratio(16),
    paddingHorizontal: Metrics.ratio(20),
    backgroundColor: Colors.lightModeTextInput.backgroundColor,
  },
  placeholderStyles: {
    flex: 1,
    padding: 10,
    color: Colors.darkModeButtonStyle.backgroundColor,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingRight: Metrics.ratio(55),
  },
  textInputStyles: {
    flexDirection: "row",
    borderRadius: Metrics.ratio(10),
    backgroundColor: "white",
    alignItems: "center",
  },
  pictureStyles: {
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
    borderRadius: Metrics.ratio(20),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
});
