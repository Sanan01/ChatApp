import { StyleSheet } from "react-native";

import { Colors, Fonts, Metrics } from "@theme";

export default StyleSheet.create({
  button: {
    borderRadius: Metrics.ratio(4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: Metrics.ratio(50),
  },
  shadowButton: {
    borderRadius: Metrics.ratio(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: Metrics.ratio(50),
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 15,
    },
    shadowRadius: 15,
    shadowOpacity: 1,

    elevation: 6,
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Metrics.ratio(16),
    textAlign: "center",
  },
  icon: {
    marginRight: Metrics.ratio(20),
  },
  buttonBottomStyle: {
    marginHorizontal: Metrics.ratio(20),
    marginBottom: Metrics.BOTTOM_SPACING,
  },
});
