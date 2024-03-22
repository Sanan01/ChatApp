// @flow
import _ from "lodash";
import { Util } from "../utils";
import { REQUEST_METHOD } from "@Constants";
import {
  API_MAGENTO_AUTH,
  API_LOGIN,
  API_SIGNUP,
  API_OTP_VERIFY,
  API_FORGOT_PASSWORD,
  API_RESET_PASSWORD,
  API_RESEND_OTP,
  API_CHANGE_PASSWORD,
  API_UPDATE_PROFILE,
  API_LOGOUT,
} from "@WebService";
import { requestUser, requestAuth } from "../ducks/auth"; // new
import { authActions } from "../ducks/autherization";
import { DataHandler } from "../utils";

class UserUtil {
  authMagento(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_MAGENTO_AUTH,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestAuth(payload));
  }

  loginRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_LOGIN(requestData.access_token),
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  registerEmailRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_SIGNUP,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  registerRequest(payload, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 1 };
    const requestData = {
      payload,
      callback,
      identifier,
      url: API_SIGNUP,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(requestData));
  }
  resendOtpRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 1 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_RESEND_OTP,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  otpVerifyRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_OTP_VERIFY,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  forgotPasswordRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_FORGOT_PASSWORD,
      methodType: REQUEST_METHOD.PUT,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  resetPasswordRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_RESET_PASSWORD,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  // logoutRequest(identifier, callback = undefined) {
  //   DataHandler.getStore().dispatch(authActions.logout(callback));
  // }

  sleepRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      identifier,
      callback,
      url: API_LOGOUT(requestData.start, requestData.end),
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  updateProfileRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 1 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_UPDATE_PROFILE,
      methodType: REQUEST_METHOD.POST,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  changePasswordRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 1 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_CHANGE_PASSWORD,
      methodType: REQUEST_METHOD.PATCH,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestUser(payload));
  }

  getId(user) {
    return (
      !Util.isEmpty(user) &&
      (user?.userID ?? user?.following ?? user?.followerId ?? "NO_ID")
    );
  }
  getName(user) {
    return (
      !Util.isEmpty(user) &&
      (user?.name ?? user?.followingName ?? user?.followerName ?? "No name")
    );
  }
  getUserName(user) {
    return !Util.isEmpty(user) && user.username ? user.username : ""; // for guest like `Guest_9vmsjvn5rvp`
  }
  getEmail(user) {
    return !Util.isEmpty(user) && user.email ? user.email : "";
  }
  getCountryCode(user) {
    return !Util.isEmpty(user) && user.countryCode ? user.countryCode : "";
  }
  getNumber(user) {
    return !Util.isEmpty(user) && user.number ? user.number : "";
  }
  getDate(user) {
    return user?.date ?? "";
  }
  getCreatedTime(user) {
    return user?.createdTime ?? "";
  }
  getDOB(user) {
    return !Util.isEmpty(user) && user.dob ? user.dob : "";
  }
  getType(user) {
    return !Util.isEmpty(user) && user.type ? user.type : ""; // (Registere / Guest)
  }
  isVerified(user) {
    return !Util.isEmpty(user) && user.verified !== undefined
      ? user.verified
      : false;
  }
  getAccessToken(user) {
    return !Util.isEmpty(user) && !Util.isEmpty(user.accessToken)
      ? user.accessToken
      : "";
  }

  // get freinds, followers, following
  getUserFollowers(user) {
    return user?.ffcount?.followers ?? 0;
  }
  getUserFollowing(user) {
    return user?.ffcount?.followings ?? 0;
  }
  getUserFriends(user) {
    return user?.ffcount?.friends ?? 0;
  }

  // get coin data
  getUserCoins(user) {
    return user?.coin?.count ?? 0;
  }
  getUserCoinsType(user) {
    return user?.coin?.type ?? "";
  }
  getUserCoinsSender(user) {
    return user?.coin?.sender ?? "";
  }
}

export default new UserUtil();
