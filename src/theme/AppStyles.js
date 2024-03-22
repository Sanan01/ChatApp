import { StyleSheet, StatusBar, Platform } from "react-native";


export default StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 30,
      },
      headerStyle: {
        backgroundColor: "#fff",
        elevation: 0,
        shadowOffset: { height: 0 },
      },
      headerRightContainerStyle: {},
      headerLeftContainerStyle: {},
      headerTitleStyle: {
        // fontFamily: Fonts.type.medium,
        // fontSize: Fonts.size.size_20,
        fontSize: 20,
      },
  });