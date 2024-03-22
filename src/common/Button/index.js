import { Text, useColorScheme } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import { ButtonView, ImageViewHttp } from "@components";
import { BUTTON_TYPE, LIGHT_MODE } from "@Constants";
import { Colors } from "@theme";

import styles from "./styles";

const AppButton = ({
  title,
  textStyle,
  icon,
  iconStyle,
  onPress,
  type = BUTTON_TYPE.PRIMARY,
  style,
  disabled,
  isShadow,
  isBottom = false,
  ...props
}) => {
  const theme = useColorScheme();

  const BUTTON_THEME = {
    [BUTTON_TYPE.PRIMARY]: {
      buttonColor:
        theme == LIGHT_MODE
          ? Colors.lightModeButtonStyle.backgroundColor
          : Colors.darkModeButtonStyle.backgroundColor,
      textColor:
        theme == LIGHT_MODE
          ? Colors.lightModeButtonStyle.primaryText
          : Colors.darkModeButtonStyle.primaryText,
    },
    [BUTTON_TYPE.SECONDARY]: {
      buttonColor: Colors.white,
      textColor: Colors.clearBlue,
    },
    [BUTTON_TYPE.RED]: {
      buttonColor: Colors.logout,
      textColor: Colors.logoutText,
    },
  };

  const renderTitle = () => {
    const colorStyle = { color: BUTTON_THEME[type].textColor };
    return <Text style={[styles.title, colorStyle, textStyle]}>{title}</Text>;
  };
  const renderIcon = () => {
    return <ImageViewHttp source={icon} style={[styles.icon, iconStyle]} />;
  };

  const buttonColor = { backgroundColor: BUTTON_THEME[type].buttonColor };
  const shadowStyle = isShadow ? styles.shadowButton : styles.button;
  const bottomStyle = isBottom ? styles.buttonBottomStyle : {};
  return (
    <ButtonView
      style={[buttonColor, shadowStyle, bottomStyle, style]}
      disabled={disabled}
      onPress={onPress}
      {...props}
    >
      {icon && renderIcon()}
      {title && renderTitle()}
    </ButtonView>
  );
};

AppButton.PropTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  isShadow: PropTypes.bool,
  isBottom: PropTypes.bool,
};

export default React.memo(AppButton);
