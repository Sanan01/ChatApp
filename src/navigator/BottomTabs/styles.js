import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts, Metrics } from "@theme";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  tabBarContainer: {
    flex: 1,
  },
  tabBarTextStyleActive: {
    fontSize: Metrics.ratio(14),
    color: Colors.tabFonts,
    fontFamily: Fonts.type.bold,
    paddingBottom: Metrics.ratio(13),
  },
  tabBarTextStyleInActive: {
    fontSize: Metrics.ratio(14),
    color: Colors.gray,
    paddingBottom: Metrics.ratio(13),
  },
  tabBarStyle: {
    height: height * 0.1,
    tabBarBackground: Colors.lightMode.background,
    // paddingTop: Metrics.ratio(15),
  },
});
