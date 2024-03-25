// @flow
import React from "react";
import { StatusBar, View, useColorScheme } from "react-native";

import _ from "lodash";
import PropTypes from "prop-types";
import { Colors } from "@theme";
import { LIGHT_MODE } from "@Constants";

import styles from "./styles";

const ThemeWrapper = (props) => {
  const statusBarColor = Colors.lightMode.background;
  const { style, color, size, type, textAlign, children, lineHeight, ...rest } =
    props;

  const theme = useColorScheme();

  return (
    <View
      style={[
        theme == LIGHT_MODE ? styles.containerLight : styles.containerDark,
        style,
      ]}
    >
      <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
      {children}
    </View>
  );
};

ThemeWrapper.propTypes = {
  ...View.propTypes,
  children: PropTypes.node.isRequired,
};

ThemeWrapper.defaultProps = {
  ...View.defaultProps,
};

export default ThemeWrapper;
