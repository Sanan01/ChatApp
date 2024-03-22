import { Platform, StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "@theme";

export default StyleSheet.create({
  errorText: {
    fontFamily: Fonts.type.UbuntuMonoBold,
    fontSize: Metrics.ratio(15),
    color: Colors.lightModeTextInput.errorColor,
    marginTop: Metrics.ratio(2),
    flex: 1,
  },
  authModalStyle: {
    marginHorizontal: Metrics.ratio(20),
  },
  errorLabelView: {
    flexDirection: "row",
    marginRight: Metrics.ratio(5),
    alignItems: "center",
    marginTop: Platform.select({
      ios: Metrics.ratio(11),
      android: Metrics.ratio(3),
    }),
  },
  iconStyle: {
    marginRight: Metrics.ratio(5),
  },
});
