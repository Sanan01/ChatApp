// @flow
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Platform } from "react-native";
import styles from "./styles";

let disableClick = false;
// const debounceTime = Platform.select({
//   ios: 200,
//   android: 700,
// });

export default class ButtonView extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
    ]),
    hitSlop: PropTypes.object,
    children: PropTypes.node.isRequired,
    isBackgroundBorderLess: PropTypes.bool,
    disableRipple: PropTypes.bool,
    enableClick: PropTypes.bool,
    onPress: PropTypes.func,
    useTouchable: PropTypes.bool,
    debounceTime: PropTypes.number,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    hitSlop: {},
    isBackgroundBorderLess: false,
    disableRipple: false,
    enableClick: false,
    useTouchable: false,
    disabled: false,
    debounceTime: Platform.select({ android: 700, ios: 200 }),
    onPress: undefined,
  };

  _onPress = () => {
    if (this.props.enableClick && this.props.onPress) {
      this.props.onPress();
    } else if (!disableClick) {
      disableClick = true;
      if (this.props.onPress) {
        this.props.onPress();
      }

      setTimeout(() => {
        disableClick = false;
      }, this.props.debounceTime);
    }
  };

  render() {
    const {
      style,
      children,
      isBackgroundBorderLess,
      disableRipple,
      useTouchable,
      disabled,
      hitSlop,
      ...rest
    } = this.props;

    /*
    if (Util.isPlatformAndroid() && useTouchable === false) {
      let background = TouchableNativeFeedback.SelectableBackground();
      if (isBackgroundBorderLess) {
        background = TouchableNativeFeedback.SelectableBackgroundBorderless();
      } else if (disableRipple) {
        background = TouchableNativeFeedback.Ripple("transparent");
      }
      return (
        <TouchableNativeFeedback
          background={background}
          {...rest}
          onPress={this._onPress}>
          <View style={style}>{this.props.children}</View>
        </TouchableNativeFeedback>
      );
    }
    */

    const opacity = this.props.disableRipple ? 1 : 0.5;
    const disableStyle = { opacity: disabled ? 0.5 : 1 };
    return (
      <TouchableOpacity
        style={[style, disableStyle]}
        {...rest}
        onPress={this._onPress}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        disabled={disabled}
        activeOpacity={opacity}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
