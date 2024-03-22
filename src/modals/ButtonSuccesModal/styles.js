import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "@theme";

export default styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: Metrics.ratio(27),
    borderRadius: Metrics.ratio(20),
  },
  heading: {
    fontSize: Metrics.ratio(22),
    // fontWeight: "bold",
    paddingTop: Metrics.ratio(40),
    fontFamily: Fonts.type.bold,
  },
  description: {
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(14),
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
  yesButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(55),
    width: Metrics.ratio(280),
    backgroundColor: Colors.blue,
    borderRadius: Metrics.ratio(16),
  },
  noButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(55),
    width: Metrics.ratio(280),
    backgroundColor: Colors.lightModeTextInput.borderColor,
    borderRadius: Metrics.ratio(16),
    marginTop: Metrics.ratio(16),
  },
  yesButtonText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.semiBold,
    // fontWeight: "bold",
    color: Colors.background,
  },
  noButtonText: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Metrics.ratio(16),
    // fontWeight: "bold",
    color: Colors.blue,
  },
  modal : {
    alignSelf: "center"
  }
});
