import { createAction } from "@reduxjs/toolkit";

export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const CANCEL = "CANCEL";
export const RESET = "RESET";
createAction;

export const defaultTypes = [REQUEST, SUCCESS, FAILURE, CANCEL, RESET];
export const requestTypes = [REQUEST, SUCCESS, FAILURE];

export const makeRequestActions = (base, types = defaultTypes) => {
  const reqType = { type: base }; // reqType = { type : "USER" }
  types.forEach((type) => {
    reqType[type] = `${base}_${type}`;
  });

  const requestActions = [reqType];

  requestTypes.forEach((item) => {
    requestActions.push(createAction(reqType[item]));
  });

  return requestActions;
};

export const makeAction = (base) => {
  const action = createAction(base); // UPDATE_COUNT
  return [base, action];
};

// auth
export const AUTH_MAGENTO = "auth_magento";
export const USER_ACTION = "USER";
export const AUTH_IDENTIFIER_LOGIN = "login";
export const AUTH_IDENTIFIER_EMAIL = "email";
export const AUTH_IDENTIFIER_REGISTER = "register";
export const GET_VIDEO_LIST = "videolist";
export const GET_SEARCH_VIDEO_LIST = "search_videolist";
export const GET_FILTER_VIDEO_LIST = "filter_videolist";
export const AUTH_EMAIL_RESET = "email_reset";
export const USER_PROFILE = "profile";
export const USER_PROFILE_UPDATE = "profile_update";
export const GET_FILTER = "get_filter";
export const GET_PAGINATION_VIDEO_LIST = "pagination_videolist";
export const GET_CATEGORIES_DATA = "get_all_categories";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_COLORS = "GET_COLORS";
export const PLACE_ORDER = "PLACE_ORDER_IDENTIFIER";
export const PAYMENT_METHOD = "PAYMENT_METHOD_IDENTIFIER";
// export const CHANGE_PASSWORD = 'change_password';
export const AUTH_IDENTIFIER_OTP_VERIFY = "OTP_VERIFY";
export const AUTH_IDENTIFIER_OTP_VERIFY_RESET_PASS = "OTP_VERIFY_RESET_PASS";
export const AUTH_IDENTIFIER_FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const AUTH_IDENTIFIER_RESEND_OTP = "resend_otp";
export const AUTH_IDENTIFIER_OTP_VERIFY_FORGOT_PASS =
  "OTP_VERIFY_FORGOT_PASSWORD";
export const AUTH_IDENTIFIER_RESET_PASSWORD = "RESET_PASSWORD";
export const AUTH_IDENTIFIER_LOGOUT = "LOGOUT";
export const SLEEP_WAKEUP_TIME_MONTHLY = "SLEEP_WAKEUP_TIME_MONTHLY";
export const SLEEP_WAKEUP_TIME_WEEKLY = "SLEEP_WAKEUP_TIME_WEEKLY";
export const THREE_WEEKS = "THREE_WEEKS";
export const TWO_WEEKS = "TWO_WEEKS";
export const TIME_ASLEEP_REQUEST = "TIME_ASLEEP";
export const AUTH_IDENTIFIER_RESEND_CODE = "RESEND_CODE";
export const AUTH_IDENTIFIER_VERIFY_PASSWORD = "VERIFY_PASSWORD";
export const CONTACT_US = "CONTACT_US";
export const USER_IDENTIFIER_UPDATE_PROFILE = "UPDATE_PROFILE";
export const USER_IDENTIFIER_CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const USER_IDENTIFIER_CHANGE_MOBILE_NUMBER = "CHANGE_MOBILE_NUMBER";
export const USER_IDENTIFIER_UPDATE_PROFILE_PHOTO = "UPDATE_PROFILE_PHOTO";
export const ADDRESS_IDENTIFIER_ADD_ADDRESS = "ADD_ADDRESS_IDENTIFIER";
export const ADDRESS_IDENTIFIER_GET_ADDRESSES = "GET_ADDRESSES_IDENTIFIER";
export const USER_IDENTIFIER_ABOUT_US = "ABOUT_US";
export const USER_IDENTIFIER_PRIVACY_POLICY = "PRIVACY_POLICY";
export const ADDRESS_IDENTIFIER_UPDATE_ADDRESS = "UPDATE_ADDRESS_IDENTIFIER";
export const ADDRESS_IDENTIFIER_DELETE_ADDRESS = "DELETE_ADDRESS_IDENTIFIER";
export const WISH_LIST_IDENTIFIER_ADD_WISH_LIST = "ADD_WISHLIST";
export const ONBOARDING_IDENTIFIER = "onboarding";
export const BANNER_IDENTIFIER = "banner";
export const SHOP_BY_ROOM_IDENTIFIER = "shop_by_room";
export const FEATURED_INSPIRATION_IDENTIFIER = "featured_inspiration";
export const GET_CLINIC_DETAILS = "clinic";
export const GET_CONTACT_DETAILS = "contact";
export const SAVE_REACTION = "save_reaction";
export const SAVE_LAST_TIME = "save_last_time";
export const GET_NOTIFICATIONS = "notifications";
export const GET_TREATMENT_DETAILS = "treatment_details";
export const GET_NOTIFICATION_COUNT = "notificationsCount";
export const GET_PROFILE_DETAILS = "profile";
export const POST_PROFILE_DETAILS = "profile_update";
export const GET_SEARCH_DATA = "get_search_data";
export const SET_SEARCH_DATA = "set_search_data";
export const SAVE_REACTION_INITIAL = "save_reaction_initial";

//cart
export const ADD_TO_CART = "ADD_TO_CART";

export const ProductIdentifier = {
  DEALS: "deals",
  DealsViewAll: "DealsViewAll",
  MOBILE_PHONES: "mobile_phones",
  TABLETS: "tablets",
  ELECTRONICS: "electronics",
  NEW_ARRIVALS: "new_arrivals",
  SEARCH: "search",
  WISHLIST: "wish_list",
  EDITOR_PICK: "editor_pick",
  TRENDING: "trending",
  BEST_SELLER: "best_seller",
  BEDROOM: "bedroom",
  DINING_ROOM: "dining_room",
  HOME_OFFICE: "home_office",
  LIVING_ROOM: "living_room",
};

export const ProductsIdentifier = {
  ProductsByCategory: (categoryName) => "ProductsByCategory_" + categoryName,
};
