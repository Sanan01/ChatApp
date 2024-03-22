import { Colors, Metrics, Fonts } from "@theme";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.background,
    padding: Metrics.ratio(27),
    borderRadius: Metrics.ratio(20),
    alignItems: "center",
  },
  heading: {
    fontSize: Metrics.ratio(22),
    // fontWeight: "bold",
    paddingTop: Metrics.ratio(40),
    fontFamily: Fonts.type.bold,
  },
  description: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.regular,
    textAlign: "center",
    paddingBottom: Metrics.ratio(40),
    padding: Metrics.ratio(10),
    color: Colors.lightText,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(120),
    width: Metrics.ratio(120),
    borderRadius: Metrics.ratio(60),
    backgroundColor: Colors.blue,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(55),
    width: Metrics.ratio(280),
    backgroundColor: Colors.blue,
    borderRadius: Metrics.ratio(16),
  },
  buttonText: {
    fontSize: Metrics.ratio(16),
    // fontWeight: "bold",
    fontFamily: Fonts.type.semiBold,
    color: Colors.background,
  },
});
