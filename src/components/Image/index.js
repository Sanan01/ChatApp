// @flow
import React from "react";
import { Image as ImageView } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default class Image extends React.PureComponent {
  static propTypes = {
    isTransform: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  static defaultProps = {
    style: {},
    isTransform: true,
  };

  render() {
    const { style, isTransform, ...rest } = this.props;
    const imageStyle = isTransform ? styles.imageStyle : {};

    return <ImageView style={[imageStyle, style]} {...rest} />;
  }
}
