import { takeLatest, put, call } from "redux-saga/effects";
import { successNotifications, failureNotifications, NOTIFICATIONS, NOTIFICATIONS_COUNT, successNotificationCount, failureNotificationCount } from ".";
import { callRequest as CallReq } from "../../utils/ApiSauce";

function callRequest(url, payload, methodType, errorSuccessNotification) {
  return CallReq(url, payload, methodType, errorSuccessNotification);
}

function* notificationsWatcherRequest(action) {
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
    const response = yield call(
      callRequest,
      url,
      requestData,
      methodType,
      errorSuccessNotification
    );
    if (response) {
      const resData = { data: response?.result?.items ?? [], identifier };
      yield put(successNotifications(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureNotifications(errorData));

    failureCallback?.(err);
  }
}

function* notificationCountWatcherRequest(action) {
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
    const response = yield call(
      callRequest,
      url,
      requestData,
      methodType,
      errorSuccessNotification
    );
    if (response) {
      const resData = { data: response?.result?.items?.notification_count ?? 0, identifier };
      yield put(successNotificationCount(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureNotificationCount(errorData));

    failureCallback?.(err);
  }
}

export default function* root() {
  yield takeLatest(NOTIFICATIONS.REQUEST, notificationsWatcherRequest);
  yield takeLatest(NOTIFICATIONS_COUNT.REQUEST, notificationCountWatcherRequest);
}
