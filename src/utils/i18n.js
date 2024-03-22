import { I18nManager } from "react-native";
import i18n from "i18n-js";

import en from "../translations/en.json";
import es from "../translations/es.json";

i18n.fallbacks = true;
i18n.translations = { en, es };

// The method we'll use instead of a regular string
export function strings(name, replace = undefined, params = {}) {
  let stringValue = i18n.t(name, params);
  if (replace) {
    stringValue = stringValue.replace(`{${replace.key}}`, replace.value);
    if (replace.key2)
      stringValue = stringValue.replace(`{${replace.key2}}`, replace.value2);
  }
  return stringValue;
}

export function setLanguage(languageTag = "en") {
  i18n.locale = languageTag;
}

export function forceRTL(isRTL = false) {
  I18nManager.forceRTL(isRTL);
}

export function getLocale() {
  return i18n.locale;
}

export default i18n;
