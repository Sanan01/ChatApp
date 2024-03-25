import { Platform, Alert } from "react-native";

import _ from "lodash";
import moment from "moment";
import { showMessage as flashMessageShow } from "react-native-flash-message";
import call from "react-native-phone-call";
import SendSMS from "react-native-sms";
import { openComposer } from "react-native-email-link";

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
    .replace(/\D/g, "")
    .replace(/^0+/, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formatNumber;
}

/**
 * @memberof Contact
 * @function openDialer
 * @author Sanan Baig
 * @description opens up phone dialer to call any number
 * */

const openDialer = (phoneNumber) => {
  const phoneNumberFormatted = phoneNumber.phone.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  const args = {
    number: phoneNumberFormatted, // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
    skipCanOpen: true, // Skip the canOpenURL check
  };

  call(args).catch(console.error);
};

/**
 * @memberof Contact
 * @function openMessage
 * @author Sanan Baig
 * @description opens up phone messages to text any number
 * */

const openMessage = (phoneNumber) => {
  const phoneNumberFormatted = phoneNumber.phone.replace(/[^0-9]/g, "");
  SendSMS.send(
    {
      body: "",
      recipients: [phoneNumberFormatted],
      successTypes: ["sent", "queued"],
      allowAndroidSendWithoutReadPermission: true,
    },
    (completed, cancelled, error) => {
      console.log(
        "SMS Callback: completed: " +
          completed +
          " cancelled: " +
          cancelled +
          "error: " +
          error
      );
    }
  );
};

/**
 * @memberof Contact
 * @function openEmail
 * @author Sanan Baig
 * @description opens up gmail to mail any number
 * */

const openEmail = (email) => {
  openComposer({
    to: email.email,
    subject: "",
    body: "",
  });
};

export default {
  isPlatformAndroid,
  isPlatformIOS,
  getPlatform,
  isEmpty,
  compareDeep,
  formatPriceInput,
  showMessage,
  openDialer,
  openMessage,
  openEmail,
};
