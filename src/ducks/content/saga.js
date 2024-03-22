import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { Util } from "@utils";

import {
  successContentMonthly,
  failureContentMonthly,
  CONTENT_MONTHLY,
  successContentWeekly,
  failureContentWeekly,
  CONTENT_WEEKLY,
  successTimeSleep,
  failureTimeSleep,
  TIME_ASLEEP,
} from "./";
import { callRequest as CallReq } from "../../utils/ApiSauce";

function callRequest(url, payload, methodType, errorSuccessNotification) {
  return CallReq(url, payload, methodType, errorSuccessNotification);
}

function* contentWatcherRequestMonthly(action) {
  const {
    requestData,
    callback,
    identifier,
    url,
    methodType,
    errorSuccessNotification,
    failureCallback,
  } = action.payload;

  try {
    const newPayload = { ...requestData };

    console.log("saga inner contentWatcherRequestMonthly", newPayload);

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
        identifier,
      };
      yield put(successContentMonthly(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureContentMonthly(errorData));

    failureCallback?.(err);
  }
}

function* contentWatcherRequestWeekly(action) {
  const {
    requestData,
    callback,
    identifier,
    url,
    methodType,
    errorSuccessNotification,
    failureCallback,
  } = action.payload;

  try {
    const newPayload = { ...requestData };

    console.log("saga inner contentWatcherRequestWeekly", newPayload);

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
        identifier,
      };
      yield put(successContentWeekly(resData, identifier));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureContentWeekly(errorData));

    failureCallback?.(err);
  }
}

function* contentWatcherRequestTimeSleep(action) {
  const {
    requestData,
    callback,
    identifier,
    url,
    methodType,
    errorSuccessNotification,
    failureCallback,
  } = action.payload;

  try {
    const newPayload = { ...requestData };

    console.log("saga inner contentWatcherRequestTimeSleep", newPayload);

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
        identifier,
      };
      yield put(successTimeSleep(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureTimeSleep(errorData));

    failureCallback?.(err);
  }
}

export default function* root() {
  yield takeLatest(CONTENT_MONTHLY.REQUEST, contentWatcherRequestMonthly);
  yield takeEvery(CONTENT_WEEKLY.REQUEST, contentWatcherRequestWeekly);
  yield takeLatest(TIME_ASLEEP.REQUEST, contentWatcherRequestTimeSleep);
}
