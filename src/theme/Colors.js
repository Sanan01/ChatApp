/**
 * @memberof Colors
 * @returns {JSX.Element}
 * @author Syed Amir Ali
 * @description Render Theme Colors when in Dark Mode
 * */

const darkMode = {
  background: "#222222",
  primaryText: "#dddddd",
};

const darkModeTextInput = {
  placeholderColor: "#3C1D53",
  borderColor: "#ECE1F4",
  textColor: "#000000",
  backgroundColor: "#dddddd",
};

const darkModeButtonStyle = {
  backgroundColor: "#000000",
  primaryText: "#FAF8FC",
};

/****************************************************************/

/**
 * @memberof Colors
 * @returns {JSX.Element}
 * @author Syed Amir Ali
 * @description Render Theme Colors when in Light Mode
 * */

const lightMode = {
  background: "#EBEBEB",
  primaryText: "#4D4D4D",
  textColor: "#020708",
};

const lightModeTextInput = {
  placeholderColor: "#999999",
  borderColor: "#E2E2E2",
  textColor: "#000000",
  backgroundColor: "#ffffff",
  errorColor: "#FF0000",
};

const lightModeButtonStyle = {
  backgroundColor: "#2A378F",
  primaryText: "#E2E2E2",
};

export default {
  background: "#ffffff",
  PrimaryBackground: "#222222",
  TextPrimary: "#dddddd",
  TextSecondary: "#000000",
  blue: "#2A378F",
  gray: "#999999",
  darkMode,
  lightMode,
  lightText: "#828282",
  tabFonts: "#2A378F",
  lightModeTextInput,
  darkModeTextInput,
  lightModeButtonStyle,
  darkModeButtonStyle,
  keywordBackground: "#C0C0C0",
  lineColor: "#E6E6E6",
  logout: "#F5E8EA",
  logoutText: "#FF4732",
  opacColor: "#D9D9D9",
  borderColorNotifications: "#DADADA",
  white: "#FFFFFF",
  primaryButtonColor: "#2A378F",
  transparent: "transparent",
  buttonColor: "#A9C6E6",
  buttonTextColor: "#0F0E2B",
  backgroundColor: "#0C0B26",
  textInputContainer: "#1B1B39",
  textInput: "#121033",
  textColorSmallFields: "#0C0C28",
};
