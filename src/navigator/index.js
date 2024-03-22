import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { DataHandler, NavigationService, Util } from "@utils";
import { Login } from "@screens";

import { screenOptions } from "./config";
import BottomTabs from "./BottomTabs";
import { getUserToken, getAuthorizationToken } from "../ducks/auth"; // orig
import { get } from "lodash";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const currentTime = new Date().getTime();

  /**
   * Get user from redux selector and check if user is logged in or not
   * @return {ReactElement}
   * @memberof navigator
   * @author Syed Amir Ali
   * */

  const userObjToken = useSelector((state) => getUserToken(state));
  console.log(userObjToken, "checking userObj Token");

  /**
   * Auth Stacks
   * @return {ReactElement}
   * @memberof navigator
   * @author Syed Amir Ali
   * */

  const renderAuthStack = () => {
    return (
      <Stack.Navigator {...{ screenOptions }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "", headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  /**
   * Main Stacks
   * @return {ReactElement}
   * @memberof navigator
   * @author Syed Amir Ali
   * */

  const renderMainStack = () => {
    return (
      <Stack.Navigator {...{ screenOptions }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "", headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const renderContent = () => {
    if (!Util.isEmpty(userObjToken)) {
      return renderMainStack;
    } else {
      return renderAuthStack;
    }
  };

  const Content = renderContent();

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Content />
    </NavigationContainer>
  );
}

export default AppNavigator;
