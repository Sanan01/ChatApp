import { takeLatest, put, call } from "redux-saga/effects";
import { successProfile, failureProfile, PROFILE } from ".";
import { callRequest as CallReq } from "../../utils/ApiSauce";

function callRequest(url, payload, methodType, tokenType, errorSuccessNotification) {
  return CallReq(url, payload, methodType, tokenType, errorSuccessNotification);
}

function* contactWatcherRequest(action) {
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
    const response = yield call(
      callRequest,
      url,
      requestData,
      methodType,
      tokenType,
      errorSuccessNotification
    );

    console.log("response for profile", response);
    if (response) {
      const resData = { data: response ?? {}, identifier };
      yield put(successProfile(resData));

      callback?.(response);
    } else {
      console.log("error", response);
    }
  } catch (err) {
    console.log("error saga", err);
    const errorData = { err, identifier };
    yield put(failureProfile(errorData));

    failureCallback?.(err);
  }
}

export default function* root() {
  yield takeLatest(PROFILE.REQUEST, contactWatcherRequest);
}
