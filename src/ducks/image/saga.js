import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import {successImage, failureImage, IMAGE} from '.';
import {callRequest as CallReq} from '../../utils/ApiSauce';

function callRequest(url, payload, methodType, errorSuccessNotification) {
  return CallReq(url, payload, methodType, errorSuccessNotification);
}

function* imageWatcherRequest(action) {
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
      errorSuccessNotification,
    );
    if (response) {
      const resData = {data: response?.urls ?? {}, identifier};
      yield put(successImage(resData));

      callback?.(response);
    } else {
      console.log('error', response);
    }
  } catch (err) {
    console.log('error saga', err);
    const errorData = {err, identifier};
    yield put(failureImage(errorData));

    failureCallback?.(err);
  }
}

export default function* root() {
  yield takeEvery(IMAGE.REQUEST, imageWatcherRequest);
}
