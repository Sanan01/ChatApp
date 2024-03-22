import { DataHandler } from "@utils";
import {
  makeRequestActions,
  AUTH_MAGENTO,
  AUTH_IDENTIFIER_LOGIN,
  AUTH_IDENTIFIER_REGISTER,
  AUTH_IDENTIFIER_LOGOUT,
  USER_IDENTIFIER_UPDATE_PROFILE,
  SLEEP_WAKEUP_TIME,
} from "@ActionTypes";
import { authActions } from "@ducks/autherization";
import { createReducer } from "@reduxjs/toolkit";
import { Util } from "@utils";

// action creators
export const [USER, requestUser, successUser, failureUser] =
  makeRequestActions("USER");

export const [AUTH, requestAuth, successAuth, failureAuth] =
  makeRequestActions("AUTH");

// init state
const initalState = { data: {}, magentoToken: "", guestLogin: true, token: "" };

// init reducer
export default createReducer(initalState, (builder) => {
  builder.addCase(AUTH.SUCCESS, (state, action) => {
    const { identifier, magentoToken } = action.payload;

    switch (identifier) {
      case AUTH_MAGENTO:
        state.magentoToken = magentoToken; // magento token
        break;
      default:
        break;
    }
  });

  // auth
  builder
    .addCase(USER.SUCCESS, (state, action) => {
      const { data, token, identifier } = action.payload;
      console.log("data inner auth ONE", action);
      console.log("data inner auth TWO", state);
      switch (identifier) {
        case AUTH_IDENTIFIER_LOGIN:
          // case AUTH_IDENTIFIER_REGISTER:
          DataHandler.clearAuthToken();
          DataHandler.setAuthToken(data);
          state.data = data; // replace data in reducer with data from api
          state.token = token;
          break;

        case USER_IDENTIFIER_UPDATE_PROFILE:
          state.data = { ...state.data, ...data }; // merge data in reducer with data from api
          state.guestLogin = data ? false : true;
          break;

        case SLEEP_WAKEUP_TIME:
        // state.data = { ...state.data, ...data }; // merge data in reducer with data from api
        // state.guestLogin = data ? false : true;
        // break;

        default:
          break;
      }
    })
    .addCase(authActions.logout(), (state, action) => {
      switch (action.type) {
        case AUTH_IDENTIFIER_LOGOUT:
          DataHandler.clearAuthToken();
          state.data = {};
          state.guestLogin = true; // guest login
          break;

        default:
          break;
      }
    });
});

// selectors
// with identifier
const defaultObj = {};
export const getData = (state) => state.auth?.data?.data ?? defaultObj;

// export const getUserToken = (store) =>
//   store.getState().auth.data?.verified !== undefined &&
//     store.getState().auth.data?.verified
//     ? store.getState().auth.data?.accessToken
//     : undefined;

export const getUserToken = (state) => state.auth?.token ?? null;

export const getMagentoAuthorizationToken = (store) =>
  store.getState().auth.magentoToken;

export const getAuthorizationToken = (store) => store.getState().auth.token;

// export const getGuestLogin = (store) => store.getState().auth.guestLogin;

export const getGuestLogin = (storeState) => {
  return storeState.auth.guestLogin;
};
