import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images } from "@theme";

import {} from "../Substacks";

import styles from "./styles";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused
                  ? Images.tabBarIconsActive[route.name]
                  : Images.tabBarIconsInActive[route.name]}
              </>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={
                  focused
                    ? styles.tabBarTextStyleActive
                    : styles.tabBarTextStyleInActive
                }
              >
                {route.name}
              </Text>
            );
          },
          tabBarStyle: styles.tabBarStyle,
          tabBarHideOnKeyboard: true,
        })}
      ></Tab.Navigator>
    </View>
  );
}

export default BottomTabs;
