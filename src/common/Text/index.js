// @flow
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Text as TextRN, StyleSheet } from "react-native";
import { Fonts, Colors } from "@theme";

const Text = (props) => {
  const { style, color, size, type, textAlign, children, lineHeight, ...rest } =
    props;

  const textStyle = StyleSheet.flatten([
    {
      textAlign,
      fontFamily: Fonts.type[type],
      // fontSize: size in Fonts.size ? Fonts.size[size] : size,
      color: Colors[color] || color,
      backgroundColor: Colors.transparent,
      lineHeight,
    },
    style,
  ]);

  return (
    <TextRN style={textStyle} {...rest}>
      {children}
    </TextRN>
  );
};

Text.propTypes = {
  ...TextRN.propTypes,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(_.keys(Fonts.type)),
  textAlign: PropTypes.oneOf(["auto", "left", "right", "center", "justify"]),
};

Text.defaultProps = {
  ...TextRN.defaultProps,
  size: "size_13",
  type: "regular",
  color: "black",
  textAlign: "left",
};

export default Text;
