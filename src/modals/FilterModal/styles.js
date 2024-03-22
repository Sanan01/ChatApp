import { StyleSheet, Dimensions } from "react-native";
import { Metrics, Colors, Fonts } from "@theme";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  modalContent: {
    backgroundColor: Colors.background,
    borderTopRightRadius: Metrics.ratio(20),
    borderTopLeftRadius: Metrics.ratio(20),
    alignItems: "center",
  },
  heading: {
    fontSize: Metrics.ratio(22),
    fontFamily: Fonts.type.bold,
    paddingTop: Metrics.ratio(24),
  },
  catHeading: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.semiBold,
    paddingBottom: Metrics.ratio(12),
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Metrics.ratio(30),
    borderColor: Colors.lightText,
    borderTopWidth: 1,
    borderColor: Colors.opacColor,
    marginHorizontal: 23,
  },
  yesButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(55),
    width: "50%",
    backgroundColor: Colors.blue,
    borderRadius: Metrics.ratio(16),
    marginHorizontal: Metrics.ratio(5),
  },
  noButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(55),
    width: "50%",
    backgroundColor: Colors.lightModeTextInput.borderColor,
    borderRadius: Metrics.ratio(16),
    marginHorizontal: Metrics.ratio(5),
  },
  yesButtonText: {
    fontSize: Metrics.ratio(18),
    fontFamily: Fonts.type.bold,
    color: Colors.background,
  },
  noButtonText: {
    fontSize: Metrics.ratio(18),
    fontFamily: Fonts.type.bold,
    color: Colors.lightText,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  categoryButton: {
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(14),
    borderRadius: Metrics.ratio(12),
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.lightModeTextInput.borderColor,
    marginHorizontal: Metrics.ratio(5),
    marginVertical: Metrics.ratio(2),
  },
  categoryText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.light,
  },
  dash: {
    marginTop: Metrics.ratio(16),
    height: Metrics.ratio(3),
    width: Metrics.ratio(37),
    backgroundColor: Colors.opacColor,
  },
  catContainer: {
    // flex: 1,
    width: "100%",
    paddingVertical: Metrics.ratio(25),
    // borderWidth: 1,
    paddingHorizontal: Metrics.ratio(10),
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Metrics.ratio(35),
    paddingHorizontal: Metrics.ratio(10),
    width: "100%",
  },
  dateText: {
    color: Colors.gray,
    fontFamily: Fonts.type.semiBold,
    paddingBottom: Metrics.ratio(10),
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  dateStyle: {
    flex: 1,
    paddingHorizontal: 2,
  },
});
