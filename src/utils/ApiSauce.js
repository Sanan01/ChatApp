import { create } from "apisauce";
import { eventChannel, END } from "redux-saga";
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  API_USER_TOKEN_KEY,
  API_UPLOAD_IMAGE,
} from "@WebService";
import { Util, DataHandler } from "@utils";
import { REQUEST_METHOD, TOKEN_TYPE } from "@Constants";
import { strings } from "@i18n";
import { getAuthorizationToken } from "../ducks/auth";
import { UserUtil } from "../dataUtils";

const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

export async function callRequest(
  route,
  payload,
  type,
  errorSuccessNotification,
  headers = { "Content-Type": "application/json" }
) {
  const token = payload.access_token;
  const userObjToken = getAuthorizationToken(DataHandler.getStore());
  headers[API_USER_TOKEN_KEY] = `Bearer ${userObjToken || token}`;

  const headerObject = { headers };
  const multipartHeader = { ...headers, "Content-Type": "multipart/form-data" };

  try {
    let response;
    switch (type) {
      case REQUEST_METHOD.GET:
        response = await api.get(route, payload, headerObject);
        break;
      case REQUEST_METHOD.POST:
      case REQUEST_METHOD.FILE:
      case REQUEST_METHOD.DELETE:
      case REQUEST_METHOD.PUT:
      case REQUEST_METHOD.PATCH:
        response = await api[type.toLowerCase()](
          route,
          payload,
          type === REQUEST_METHOD.FILE
            ? { headers: multipartHeader }
            : headerObject
        );
        break;
      default:
        response = await api.get(route, payload, headerObject);
    }

    logResponse(route, headerObject, response, payload);
    return handleResponse(response, errorSuccessNotification);
  } catch (error) {
    console.log("Error:", error);
    return Promise.reject(error);
  }
}

function logResponse(route, headerObject, response, payload) {
  console.log("url==>>", route);
  console.log("headers==>>", headerObject);
  console.log("baseURL==>>", BASE_URL);
  console.log("response ==>>", response);
  console.log("payload ==>>", payload);
}

function showServerError(message, errorSuccessNotification) {
  if (
    errorSuccessNotification?.showErrorMsg === 1 &&
    !Util.isEmpty(message) &&
    message !== strings("api_error_messages.server_not_respoding")
  ) {
    Util.showMessage(message);
  }
}

function showServerSuccessMsg(response, errorSuccessNotification) {
  if (
    errorSuccessNotification?.showSuccessMsg === 1 &&
    !Util.isEmpty(response.data.message)
  ) {
    Util.showMessage(response.data.message, "success");
  }
}

export function handleResponse(response, errorSuccessNotification) {
  return new Promise((resolve, reject) => {
    const isNetWorkError = response.problem === "NETWORK_ERROR";
    const isTimeoutError = response.problem === "TIMEOUT_ERROR";
    const isKickUser =
      response.status === 403 ||
      (response.data &&
        response.data.message === "Invalid token or unknown source!");
    const isResponseValid = response.ok && response.data;

    if (isResponseValid) {
      showServerSuccessMsg(response, errorSuccessNotification);
      resolve(response.data);
    } else if (isTimeoutError) {
      const message = strings("api_error_messages.time_out_error");
      showServerError(message, errorSuccessNotification);
      reject({ message, statusCode: response.status });
    } else if (isNetWorkError) {
      const message = strings("api_error_messages.network_not_available");
      showServerError(message, errorSuccessNotification);
      reject({ message, statusCode: response.status });
    } else if (isKickUser) {
      const message = strings("api_error_messages.kick_user");
      showServerError(message, errorSuccessNotification);
      reject({ message, statusCode: response.status });
      setTimeout(() => UserUtil.logoutRequest(), 300);
    } else {
      let message =
        response.data.message && _.isString(response.data.message)
          ? response.data.message
          : strings("api_error_messages.something_went_wrong");
      showServerError(message, errorSuccessNotification);
      reject({ message, statusCode: response.status });
    }
  });
}

export async function callRequestFileUpload(uri) {
  const headers = { "Content-Type": "application/json" };
  const userObjToken = getAuthorizationToken(DataHandler.getStore());
  headers[API_USER_TOKEN_KEY] = `${userObjToken || ""}`;

  const multipartHeader = { ...headers, "Content-Type": "multipart/form-data" };

  try {
    const payload = new FormData();
    const photo = { uri, type: "image/jpeg", name: "image.jpg" };
    payload.append("image", photo);
    const response = await api.post(API_UPLOAD_IMAGE, payload, {
      headers: multipartHeader,
    });

    if (__DEV__ && API_LOG) {
      console.log("url:", API_UPLOAD_IMAGE);
      console.log("response:", response);
      console.log("payload:", payload);
      console.log("headers:", headers);
    }

    return handleResponse(response);
  } catch (error) {
    console.log("Error:", error);
    return Promise.reject(error);
  }
}
