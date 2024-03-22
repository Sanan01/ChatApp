import _ from "lodash";
import { REQUEST_METHOD } from "@Constants";
import { API_NOTIFICATIONS, API_NOTIFICATION_COUNT } from "@WebService";
import { requestNotifications, requestNotificationCount } from "@ducks/notifications";
import { DataHandler } from "@utils";

class NotificationUtil {
  getNotificationRequest(
    requestData,
    identifier,
    currentPage,
    reset,
    callback = undefined
  ) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      identifier,
      currentPage,
      reset,
      callback,
      url: API_NOTIFICATIONS,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestNotifications(payload));
  }

  getNotificationCountRequest(
    requestData,
    identifier,
    callback = undefined
  ) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      requestData,
      identifier,
      callback,
      url: API_NOTIFICATION_COUNT,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestNotificationCount(payload));
  }
}

export default new NotificationUtil();
