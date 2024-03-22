import {
  makeRequestActions,
  AUTH_IDENTIFIER_LOGOUT,
  ONBOARDING_IDENTIFIER,
  BANNER_IDENTIFIER,
  SHOP_BY_ROOM_IDENTIFIER,
  FEATURED_INSPIRATION_IDENTIFIER,
} from '@ActionTypes';
import {USER} from '@ducks/auth';
import {createReducer} from '@reduxjs/toolkit';

export const [IMAGE, requestImage, successImage, failureImage] =
  makeRequestActions('IMAGE');

const initalState = {
  onBoardingData: [],
  bannerData: [],
  shopByRoom: [],
  featuredInspiration: [],
};

export default createReducer(initalState, builder => {
  builder
    .addCase(IMAGE.SUCCESS, (state, action) => {
      const {data, identifier} = action.payload;

      switch (identifier) {
        case ONBOARDING_IDENTIFIER:
          state.onBoardingData = data;
          break;
        case BANNER_IDENTIFIER:
          state.bannerData = data;
          break;
        case SHOP_BY_ROOM_IDENTIFIER:
          state.shopByRoom = data;
          break;
        case FEATURED_INSPIRATION_IDENTIFIER:
          state.featuredInspiration = data;
          break;

        default:
          break;
      }
    })
    .addCase(USER.SUCCESS, (state, action) => {
      const identifier = action.payload.identifier;
      if (identifier === AUTH_IDENTIFIER_LOGOUT) state.data = {};
    });
});

export const onBoardingListSelector = storeState => {
  return storeState.image.onBoardingData;
};

export const bannerListSelector = storeState => {
  return storeState.image.bannerData;
};

export const shopByRoomListSelector = storeState => {
  return storeState.image.shopByRoom;
};

export const featuredInspirationListSelector = storeState => {
  return storeState.image.featuredInspiration;
};
