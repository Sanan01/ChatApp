import { StyleSheet } from "react-native";

import { Fonts, Colors, Metrics } from "@theme";

export default StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Metrics.ratio(16),
  },
  containerDark: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackground,
    padding: Metrics.ratio(16),
  },
});
