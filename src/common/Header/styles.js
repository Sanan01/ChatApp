import { Colors, Fonts, Metrics } from "@theme";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.ratio(10),
    backgroundColor: Colors.lightMode.background,
    // position: "absolute",
  },
  profile: {
    paddingLeft: Metrics.ratio(16),
  },
  textContainer: {
    paddingLeft: Metrics.ratio(10),
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: Metrics.ratio(16),
  },
  greeting: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.regular,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
    backgroundColor: Colors.background,
    borderRadius: Metrics.ratio(20),
  },
  searchButton: {
    paddingRight: Metrics.ratio(10),
  },
  username: {
    fontSize: Metrics.ratio(16),
    fontWeight: "bold",
    fontFamily: Fonts.type.bold,
  },
  treatmentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(16),
    height: Metrics.ratio(64),
    backgroundColor: Colors.lightMode.background,
  },
  treatmentText: {
    paddingLeft: Metrics.ratio(16),
    fontSize: Metrics.ratio(20),
    fontFamily: Fonts.type.bold,
  },
  picAndGreetingStyles: {
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
  },
  switchButtonStyles: {
    flex: 1,
    justifyContent: "flex-end",
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Metrics.ratio(20),
    backgroundColor: Colors.lightMode.background,
  },
  text_back: {
    alignItems: "center",
    flexDirection: "row",
  },
  pfpStyle: {
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
    borderRadius: Metrics.ratio(20),
  },
  textInput: {
    height: Metrics.ratio(50),
    width: Metrics.ratio(520),
    backgroundColor: "white",
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.regular,
    color: Colors.lightMode.text,
    borderRadius: Metrics.ratio(20),
  },
  modalStyles: {
    position: "absolute",
    // paddingTop: Metrics.ratio(20),
    // borderColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  countTextStyle: {
    fontSize: Metrics.ratio(10),
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Fonts.type.bold,
    color: Colors.TextSecondary,
  },
  counterStyle: {
    position: "absolute",
    height: 50,
    width: 50,
    borderRadius: 20,
  },
});
