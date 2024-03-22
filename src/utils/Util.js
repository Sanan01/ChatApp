import { Platform, Alert } from "react-native";

import _ from "lodash";
import moment from "moment";
import { showMessage as flashMessageShow } from "react-native-flash-message";


function compareDeep(previous, next) {
    return !_.isEqual(previous, next);
  }
  
  function isPlatformAndroid() {
    return Platform.OS === "android";
  }
  
  function isPlatformIOS() {
    return Platform.OS === "ios";
  }
  
  function getPlatform() {
    return Platform.OS;
  }
  
  function isEmpty(data) {
    return _.isEmpty(data);
  }

  function showMessage(message, type = "danger", duration = 2000) {
    flashMessageShow({
      message,
      type,
      duration,
    });
  }

  function formatPriceInput(number) {
    let formatNumber = number
      .replace(/\D/g, '')
      .replace(/^0+/, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formatNumber;
  }

  export default {
    isPlatformAndroid,
    isPlatformIOS,
    getPlatform,
    isEmpty,
    compareDeep,
    formatPriceInput,
    showMessage
  };