import { StyleSheet } from "react-native";

import { Fonts, Colors, Metrics } from "@theme";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: Metrics.ratio(50),
  },
  pickedDateContainer: {
    padding: Metrics.ratio(20),
    backgroundColor: Colors.background,
    borderRadius: Metrics.ratio(10),
  },
  pickedDate: {
    fontSize: Metrics.ratio(18),
    color: Colors.lightText,
  },
  btnContainer: {
    padding: Metrics.ratio(30),
  },
  datePicker: {
    width: Metrics.ratio(320),
    height: Metrics.ratio(260),
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputBox: {
    borderRadius: Metrics.ratio(16),
    borderWidth: Metrics.ratio(1),
    borderColor: "#E2E2E2",
    paddingHorizontal: Metrics.ratio(16),
    textAlignVertical: "center",
    color: "#828282",
    height: Metrics.ratio(48),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputActive: {
    color: Colors.lightText,
  },
  dateText: {
    fontFamily: Fonts.type.light,
    fontSize: Metrics.ratio(14),
    fontColor: Colors.lightText,
  },
});
