// @flow
import React from "react";
import { View, useColorScheme } from "react-native";

import _ from "lodash";
import PropTypes from "prop-types";

import styles from "./styles";

const ViewWrapper = (props) => {
  const { style, color, size, type, textAlign, children, lineHeight, ...rest } =
    props;

  const theme = useColorScheme();

  return (
    <View
      style={theme == "light" ? styles.containerLight : styles.containerDark}
    >
      {children}
    </View>
  );
};

ViewWrapper.propTypes = {
  ...View.propTypes,
  children: PropTypes.node.isRequired,
};

ViewWrapper.defaultProps = {
  ...View.defaultProps,
};

export default ViewWrapper;
