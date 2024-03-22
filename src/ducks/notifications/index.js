import { makeRequestActions, GET_NOTIFICATIONS, GET_NOTIFICATION_COUNT } from "@ActionTypes";
import { createReducer } from "@reduxjs/toolkit";

export const [
  NOTIFICATIONS,
  requestNotifications,
  successNotifications,
  failureNotifications,
] = makeRequestActions("NOTIFICATIONS");

export const [
  NOTIFICATIONS_COUNT,
  requestNotificationCount,
  successNotificationCount,
  failureNotificationCount,
] = makeRequestActions("NOTIFICATIONS_COUNT");

const initalState = { data: [], notificationCount: 0 };

export default createReducer(initalState, (builder) => {
  builder
    .addCase(NOTIFICATIONS.SUCCESS, (state, action) => {
      const { data, identifier } = action.payload;

      switch (identifier) {
        case GET_NOTIFICATIONS:
          state.data = data;
          break;

        default:
          break;
      }
    })
    .addCase(NOTIFICATIONS.FAILURE, (state, action) => {
      console.log("FALIED CONTACT");
    }).addCase(NOTIFICATIONS_COUNT.SUCCESS, (state, action) => {
      const { data, identifier } = action.payload;
      console.log("NOTIFICATION COUNT", data);

      switch (identifier) {
        case GET_NOTIFICATION_COUNT:
          state.notificationCount = data;
          break;

        default:
          break;
      }
    })
});

export const notificationListSelector = (storeState) => {
  return storeState.notification.data;
};

export const notificationCountSelector = (storeState) => {
  return storeState.notification.notificationCount;
};
