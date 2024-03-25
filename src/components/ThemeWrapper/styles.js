import { StyleSheet } from "react-native";

import { Fonts, Colors, Metrics } from "@theme";

export default StyleSheet.create({
  containerLight: {
    flex: 1,
  },
  containerDark: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkMode.background,
    padding: Metrics.ratio(16),
  },
});
