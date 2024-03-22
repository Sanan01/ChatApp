import {
  makeRequestActions,
  USER_PROFILE,
  AUTH_IDENTIFIER_LOGOUT
} from "@ActionTypes";
import { authActions } from "@ducks/autherization";
import { createReducer } from "@reduxjs/toolkit";
import { DataHandler } from "@utils";

export const [PROFILE, requestProfile, successProfile, failureProfile] =
  makeRequestActions("PROFILE");

const initalState = { data: {} };

export default createReducer(initalState, (builder) => {
  builder.addCase(PROFILE.SUCCESS, (state, action) => {
    const { data, identifier } = action.payload;

    console.log("PROFILE SUCCESS: ", data);

    switch (identifier) {
      case USER_PROFILE:
        state.data = data;
        break;

      default:
        break;
    }
  })
    .addCase(authActions.logout(), (state, action) => {
      switch (action.type) {
        case AUTH_IDENTIFIER_LOGOUT:
          DataHandler.clearAuthToken();
          state.data = {};
          break;

        default:
          break;
      }
    });
});

export const profileListSelector = (storeState) => {
  return storeState.profile.data;
};

export const userAddressSelector = (storeState) => {
  return storeState.profile.data?.addresses;
};

const userAddressDataSelector = (id) => {
  return (store) => store.profile.data?.addresses.find((address) => address.id === id);
}

export const ProfileSelector = {
  userAddressDataSelector
}
