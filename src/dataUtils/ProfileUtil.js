import _ from "lodash";
import { REQUEST_METHOD, TOKEN_TYPE } from "@Constants";
import { API_PROFILE, API_CHANGE_PASSWORD } from "@WebService";
import { requestProfile } from "@ducks/profile";
import { DataHandler } from "@utils";

class ProfileUtil {
  getProfileRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_PROFILE,
      methodType: REQUEST_METHOD.GET,
      tokenType: TOKEN_TYPE.CUSTOMER,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestProfile(payload));
  }

  updateProfileRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_PROFILE,
      methodType: REQUEST_METHOD.PUT,
      tokenType: TOKEN_TYPE.CUSTOMER,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestProfile(payload));
  }

  updateChangePasswordRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_CHANGE_PASSWORD,
      methodType: REQUEST_METHOD.PUT,
      tokenType: TOKEN_TYPE.CUSTOMER,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestProfile(payload));
  }
}

export default new ProfileUtil();
