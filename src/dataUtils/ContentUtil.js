import _ from "lodash";
import { REQUEST_METHOD } from "@Constants";
import { SLEEP_TIME, API_TIME_ASLEEP } from "@WebService";
import {
  requestContentMonthly,
  requestContentWeekly,
  requestTimeSleep,
} from "@ducks/content";
import { DataHandler } from "@utils";

class ContentUtil {
  sleepRequestWeekly(requestData, identifier, callback = undefined) {
    console.log("sleepRequest for content", requestData);
    console.log("sleepRequest for identifier", identifier);
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      identifier,
      callback,
      url: SLEEP_TIME(requestData.start, requestData.end),
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestContentWeekly(payload));
  }
  sleepRequestMonthly(requestData, identifier, callback = undefined) {
    console.log("sleepRequest for content", requestData);
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      identifier,
      callback,
      url: SLEEP_TIME(requestData.start, requestData.end),
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestContentMonthly(payload));
  }
  sleepRequestTimeSleep(requestData, identifier, callback = undefined) {
    console.log("sleepRequest for content", requestData);
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      identifier,
      callback,
      url: API_TIME_ASLEEP,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestTimeSleep(payload));
  }
}

export default new ContentUtil();
