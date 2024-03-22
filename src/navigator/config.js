import * as React from "react";
import { View, Text, Image } from "react-native";
import { TransitionPresets } from "@react-navigation/stack";

import { NavigationService } from "@utils";
import { AppStyles, Images } from "@theme";

export const screenOptions = ({ route, navigation }) => {
  return {
    headerBackTitleVisible: false,
    headerStyle: AppStyles.headerStyle,
    headerTitleAlign: "center",
    headerLeftContainerStyle: AppStyles.headerLeftContainerStyle,
    headerRightContainerStyle: AppStyles.headerRightContainerStyle,
    headerBackImage: () => <Image source={Images.icons.back} />,
    headerTitleStyle: AppStyles.headerTitleStyle,
    ...TransitionPresets.SlideFromRightIOS,
  };
};
