import { StyleSheet } from "react-native";
import { Metrics } from "@theme";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkbox: {
    width: Metrics.ratio(24),
    height: Metrics.ratio(24),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  checkmark: {
    color: "#2A378F", // Change this to your desired checkmark color
  },
});
