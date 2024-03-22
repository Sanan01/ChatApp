import { StyleSheet } from "react-native";

import { Fonts, Colors, Metrics } from "@theme";

export default styles = StyleSheet.create({
  text: {
    backgroundColor: Colors.lightModeTextInput.borderColor,
    color: "#5A5A5A",
    marginRight: Metrics.ratio(5),
    marginVertical: Metrics.ratio(5),
    paddingHorizontal: Metrics.ratio(5),
    paddingVertical: Metrics.ratio(2),
    borderRadius: Metrics.ratio(4),
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.light,
  },
});
