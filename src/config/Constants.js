import { Colors } from "@theme";

export const IMAGE_COMPRESS_MAX_WIDTH = 720;
export const IMAGE_COMPRESS_MAX_HEIGHT = 480;

// new
export const PROFILE_DATE_FORMAT = "MMM YYYY";

// old
export const DATE_FORMAT = "MMM DD, YYYY";
export const DATE_FORMAT2 = "DD MMM, YYYY";
export const DISPLAY_DATE_FORMAT = "DD MMM YYYY";
export const DISPLAY_DATE_FORMAT_ORDER = "D MMMM YYYY";
export const DISPLAY_DATE_ORDER_FORMAT = "DD MMM";
export const YEAR_FORMAT = "YYYY";

export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const REQUEST_METHOD = {
  POST: "post",
  FILE: "FILE",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

export const VIEW_TYPE = {
  LIST: "list",
  GRID: "grid",
};

export const TOKEN_TYPE = {
  NO_TOKEN: "no_token",
  MAGENTO: "magento",
  SHOPIFY: "shopify",
  CUSTOMER: "customer",
};

export const VIDEO_IDENTIFIER = {
  SEARCHED: "searched",
};

export const PRODUCT_IDENTIFIER = {
  SEARCHED: "searched",
  WISH_LIST: "wish_list",
  TOP_SELLER: "top_seller",
  MOST_SEARCHED: "most_search",
  DEALS: "deals",
  MOBILE_PHONES: "mobile_phones",
  TABLETS: "tablets",
  NEW_ARRIVALS: "new_arrivals",
  ELECTRONICS: "electronics",
  BUNDLE: "bundle",
  PRODUCTS: "product",
  SIMILAR_PRODUCTS: "similar_products",
  GAMING: "games",
  ROUTER: "router",
  WATCH: "watch",
  CPU: "cpu",
  PRINTER: "printer",
  SEARCH: "search",
  WISHLIST: "wish_list",
  ADD_WISH_LIST: "add_wish_list",
  GET_AUTH_QUOTE: "get_auth_quote",
  AUTH_ADD_CART: "auth_add_cart",
  AUTH_GET_CART: "auth_get_cart",
  AUTH_DELETE_CART: "auth_delete_cart",
  AUTH_GET_CART_COUNT: "auth_get_cart_count",
  AUTH_UPDATE_CART: "auth_update_cart",
  PLACE_ORDER: "place_order",
  PAYMENT_METHOD: "payment_method",
  GET_FILTER: "get_filter",
  EDITOR_PICK: "editor_pick",
  TRENDING: "trending",
  BEST_SELLER: "best_seller",
  BEDROOM: "bedroom",
  DINING_ROOM: "dining_room",
  HOME_OFFICE: "home_office",
  LIVING_ROOM: "living_room",
};

export const NOT_IN_PRODUCT_DETAIL_ATTR = [
  "thumbnail",
  "thumbnail_label",
  "small_image_label",
  "image_label",
  "small_image",
  "category_ids",
  "image",
  "special_price",
  "description",
  "Default",
];

export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfTKsjcmsiZu3y0DJbuxGINdh74m3OUs911UGWYdH7YJ9PA7A/viewform";

export const GOOGLE_API_KEY = "AIzaSyD7r3nAwnqIrwUGiRfUzOkiOGiUGk3SWbE";
export const HEADER_ENCRYPTION_KEY =
  "695ddccd984217fe8d79858dc485b67d66489145afa78e8b27c1451b27cc7a2b";

export const BUTTON_TYPE = {
  PRIMARY: 1,
  SECONDARY: 2,
  GREY: 3,
  RED: 4,
};

// custom, facebook, gmail
export const USER_AUTH_TYPE = {
  CUSTOM: "App",
  FACEBOOK: "facebook",
  GMAIL: "google",
  APPLE: "apple",
};

// Notification Type
export const NOTIFICATION_TYPE = {
  SINGLE: "single",
  HOME: "home",
};

export const PICKER_TYPE = {
  // FOR CAMERA
  CAMERA: "CAMERA",
  CAMERA_WITH_CROPPING: "CAMERA_WITH_CROPPING",
  CAMERA_BINARY_DATA: "CAMERA_BINARY_DATA",
  CAMERA_WITH_CROPPING_BINARY_DATA: "CAMERA_WITH_CROPPING_BINARY_DATA",

  // FOR GALLERY
  GALLERY: "GALLERY",
  GALLERY_WITH_CROPPING: "GALLERY_WITH_CROPPING",
  GALLERY_BINARY_DATA: "GALLERY_BINARY_DATA",
  GALLERY_WITH_CROPPING_BINARY_DATA: "GALLERY_WITH_CROPPING_BINARY_DATA",

  // FOR MULTI PICK
  MULTI_PICK: "MULTI_PICK",
  MULTI_PICK_BINARY_DATA: "MULTI_PICK_BINARY_DATA",
};

export const USER_TYPE = {
  CONSUMER: "consumer",
  CONTRIBUTOR: "contributor",
};

export const INPUT_TPE = {
  PRIMARY: 1,
  SECONDARY: 2,
};
export const ORDER_STATUS = {
  Complete: "Complete",
  Cancelled: "Cancelled",
  Pending: "Pending",
};

export const CART_AMOUNT_TYPE = {
  REGULAR: 1,
  BOLD: 2,
  MEDIUM: 3,
};

export const STATUS_COLORS = {
  [ORDER_STATUS.Pending]: "blue",
  [ORDER_STATUS.Complete]: Colors.green,
  [ORDER_STATUS.Cancelled]: Colors.red,
};
