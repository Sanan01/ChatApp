import { takeLatest, put, call } from "redux-saga/effects";
import {
  successUser,
  failureUser,
  USER,
  AUTH,
  successAuth,
  failureAuth,
} from "./";
import { DataHandler, Util } from "@utils";
import { AUTH_MAGENTO } from "@ActionTypes";

import {
  callRequest as CallReq,
  callRequestFileUpload,
} from "../../utils/ApiSauce";

function callRequest(
  url,
  payload,
  methodType,
  tokenType,
  errorSuccessNotification
) {
  return CallReq(url, payload, methodType, tokenType, errorSuccessNotification);
}

function* authWatcherRequest(action) {
  const {
    requestData,
    callback,
    identifier,
    url,
    methodType,
    tokenType,
    errorSuccessNotification,
    failureCallback,
  } = action.payload;
  try {
    const newPayload = { ...requestData };

    if (!Util.isEmpty(requestData?.uri)) {
      const response = yield call(callRequestFileUpload, requestData.uri);
      delete newPayload.uri;
      newPayload.avatar = response?.data?.profile;
    }

    const response = yield call(
      callRequest,
      url,
      newPayload,
      methodType,
      tokenType,
      errorSuccessNotification
    );

    if (response) {
      // const authToken = response?.data?.Authorization;
      // DataHandler.setAuthToken(response);
      const resData = { magentoToken: response ?? {}, identifier };
      yield put(successAuth(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureAuth(errorData));

    failureCallback?.(err);
  }
}

// USER SAGA

function* userWatcherRequest(action) {
  const {
    requestData,
    callback,
    identifier,
    url,
    methodType,
    errorSuccessNotification,
    failureCallback,
  } = action.payload;
  console.log("saga inner One");
  try {
    const newPayload = { ...requestData };

    console.log("saga inner Two");

    if (!Util.isEmpty(requestData?.uri)) {
      const response = yield call(callRequestFileUpload, requestData.uri);
      delete newPayload.uri;
      newPayload.avatar = response?.data?.profile;
    }

    console.log("callRequest saga", callRequest);
    console.log("url saga", url);
    console.log("newPayload saga", newPayload);
    console.log("methodType saga", methodType);
    console.log("errorSuccessNotification saga", errorSuccessNotification);

    const response = yield call(
      callRequest,
      url,
      newPayload,
      methodType,
      errorSuccessNotification
    );
    console.log("saga response checking", response);

    if (response) {
      const resData = {
        data: response ?? {},
        token: newPayload?.access_token,
        identifier,
      };
      yield put(successUser(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureUser(errorData));

    failureCallback?.(err);
  }
}

export default function* root() {
  yield takeLatest(AUTH.REQUEST, authWatcherRequest);
  yield takeLatest(USER.REQUEST, userWatcherRequest);
}
