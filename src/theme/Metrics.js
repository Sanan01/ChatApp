import { Dimensions, Platform, StatusBar } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

const { width, height } = Dimensions.get("window");

const screenWidth = Math.min(width, height);
const screenHeight = Math.max(width, height);

const NAVBAR_HEIGHT = Platform.select({
  ios: isIphoneX() ? 70 : 44,
  android: 56,
});
const STATUSBAR_HEIGHT = Platform.select({
  ios: isIphoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
});
const BOTTOM_SPACE_IPHONE_X = isIphoneX() ? 34 : 0;
const BOTTOM_SPACING = isIphoneX() ? 34 : 20;
const SIDE_MENU_BOTTOM_SPACING = isIphoneX() ? 70 : 50;
const MESSAGE_BAR_HEIGHT = isIphoneX() ? 48 : 20;

const ratio = (size) => (screenHeight / 812) * size;

export default {
  MESSAGE_BAR_HEIGHT,
  BOTTOM_SPACING,
  SIDE_MENU_BOTTOM_SPACING,
  ratio,
  screenWidth,
  screenHeight,
  isIphoneX,
  isKitKatAbove: Platform.OS === "android" && Platform.Version >= 19,
  marginMinus: ratio(-10),
  extraSmallMargin: ratio(4),
  extraaSmallMargin: ratio(3),
  smallMargin: ratio(8),
  lineHeight: Platform.OS === "ios" ? ratio(18) : ratio(23),
  bigSmallMargin: ratio(12),
  baseMargin: ratio(16),
  mediumMargin: ratio(20),
  largeMargin: ratio(24),
  doubleBaseMargin: ratio(32),
  bottomSpaceIphoneX: BOTTOM_SPACE_IPHONE_X,
  statusBarHeightIos: STATUSBAR_HEIGHT,
  statusBarHeight: STATUSBAR_HEIGHT,
  navBarHeight: NAVBAR_HEIGHT + STATUSBAR_HEIGHT,
  navBarHeightWithoutStatus: NAVBAR_HEIGHT,
  navBarHeightWithoutStatus2: isIphoneX() ? 70 : 56,
  tabBarHeight: ratio(49),
  separatorHeight: ratio(1),
  imagesSwiperHeight: ratio(306),
  borderWidth: ratio(3),
  borderRadius: ratio(8),
  borderRadius2: ratio(4),
  backdropOpacity: 0.4,
  dayBorderRadius: ratio(18),
  marginHorizontalVerification: ratio(20),
  verificationSpace: ratio(15),
  images: {
    cart: ratio(90),
    user: ratio(36),
  },
  modalBorderRadius: ratio(15),
  buttonBorderRadius: ratio(7),
};
