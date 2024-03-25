import React, { memo } from "react";
import { View, Pressable } from "react-native";

import styles from "./styles";

const Header = (props) => {
  const { leftButton, rightButton, centerButton } = props;
  const RenderButton = (button) => {
    return <Pressable onPress={button.onPress}>{button.child}</Pressable>;
  };

  return (
    <View style={styles.container}>
      {leftButton && (
        <View style={styles.leftContainer}>{RenderButton(leftButton)}</View>
      )}
      {centerButton && (
        <View style={styles.centerContainer}>{RenderButton(centerButton)}</View>
      )}
      {rightButton && (
        <View style={styles.rightContainer}>{RenderButton(rightButton)}</View>
      )}
    </View>
  );
};

export default memo(Header);
