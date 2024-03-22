import React from "react";
import { Images } from "@theme";
import PropTypes from "prop-types";
import { Image, View, Text } from "react-native";

import styles from "./styles";

const InputError = ({ error, fromAuthModal, style }) => {
  const authStyle = fromAuthModal ? styles.authModalStyle : {};

  if (error) {
    return (
      <View style={[styles.errorLabelView, authStyle, style]}>
        <Image source={Images.icons.errorIcon} style={styles.iconStyle} />
        <Text style={[styles.errorText]}>{error?.message ?? ""}</Text>
      </View>
    );
  }
  return null;
};

InputError.propTypes = {
  error: PropTypes.object,
};
InputError.defaultProps = {
  error: undefined,
  fromAuthModal: false,
};
export default InputError;
