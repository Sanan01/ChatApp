import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "@theme";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.ratio(16),
    alignItems: "center",
    justifyContent: "center",
  },
  containerSvgStyle: {
    // paddingTop: Metrics.ratio(50),
    alignItems: "center",
  },
  forgotPasswordTextStyle: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.regular,
    color: Colors.lightMode.textColor,
    paddingLeft: Metrics.ratio(10),
  },
  authTitleTextStyle: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.regular,
    color: Colors.lightMode.primaryText,
    paddingBottom: Metrics.ratio(50),
    paddingTop: Metrics.ratio(20),
    textAlign: "center",
  },
  authTitleDescTextStyle: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.regular,
    color: Colors.lightMode.primaryText,
    textAlign: "center",
    paddingVertical: Metrics.ratio(15),
  },
  authTitleDescInnerTextStyle: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.bold,
    color: Colors.lightMode.primaryText,
  },
  fpStyling: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: Metrics.ratio(16),
  },
  rememberTextStyle: {
    fontSize: Metrics.ratio(14),
    paddingLeft: Metrics.ratio(10),
    fontFamily: Fonts.type.regular,
    color: Colors.lightModeTextInput.placeholderColor,
  },
  buttonStyles: {
    borderRadius: Metrics.ratio(16),
    // marginTop: "55%",
    width: "100%",
  },
});
