import { strings } from "@i18n";

// staging
// export const BASE_URL = "https://furnish-staging.codevative.com/index.php/rest/V1/";
// export const IMAGE_BASE_URL = "https://furnish-staging.codevative.com/media/catalog/product/";
// export const BASE_URL = "https://ecom.codevative.com/index.php/rest/V1/";
// export const IMAGE_BASE_URL = "https://ecom.codevative.com/media/catalog/product/";

export const BASE_URL = "https://api.ouraring.com/";
export const IMAGE_BASE_URL = "https://furnish.om/media/catalog/product/";

export const API_USER_TOKEN_KEY = "Authorization";
export const API_SHOPIFY_TOKEN_KEY = "X-Shopify-Access-Token";
export const API_ENCRYPTION_KEY = "authKey";

// REQUEST TYPES
export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
};

export const LIMIT = 10;
export const API_TIMEOUT = 60000;
export const API = "/";
export const USER = "/user/";

export const API_LOG = true;

// Authentication
const AUTH_BASE_URL = "/auth";
export const API_MAGENTO_AUTH = "integration/admin/token?apptype=app";
export const API_LOGIN = (token) => `/v2/usercollection/personal_info`;
export const API_SIGNUP = "customers";
export const API_PROFILE = "customers/me?apptype=app";
export const API_GET_CATEGORIES = "wp-json/v1/categories";
export const API_GET_COLORS = "products/attributes/color/options";
export const API_COUNTRY_LIST = "directory/countries";
export const API_OTP_VERIFY = `${AUTH_BASE_URL}/verify-otp`;
// export const API_FORGOT_PASSWORD = `${AUTH_BASE_URL}/forgot-password`;
export const API_FORGOT_PASSWORD = `customers/password?apptype=app`;
export const API_RESET_PASSWORD = `wp-json/v1/reset_password`;
export const API_RESEND_OTP = `${AUTH_BASE_URL}/send-otp`;
export const API_GUEST_LOGIN = `${AUTH_BASE_URL}/guest-login`;
export const SLEEP_TIME = (start, end) =>
  `/v2/usercollection/sleep?start_date=${start}&end_date=${end}`;
export const API_TIME_ASLEEP = "v2/usercollection/daily_sleep";
export const API_UPDATE_PROFILE = `${AUTH_BASE_URL}/update-profile`;
export const API_CHANGE_PASSWORD = `${AUTH_BASE_URL}/change-password`;
export const API_CONTACT_US = `${AUTH_BASE_URL}/query`;

// Products
export const API_PRODUCT = (id) =>
  `products?searchCriteria[filter_groups][0][filters][0][value]=${id}&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCritsearchCriteria[pageSize]eria[sortOrders][0][direction]=DESC&searchCriteria[pageSize]=10&searchCriteria[currentPage]=1&apptype=app`;
export const API_PRODUCT_FILTER = (id, identifier) =>
  `products?searchCriteria[filter_groups][0][filters][0][value]=${id}&searchCriteria[filter_groups][0][filters][0][field]=${identifier}&searchCritsearchCriteria[pageSize]eria[sortOrders][0][direction]=DESC&searchCriteria[pageSize]=5&searchCriteria[currentPage]=1&apptype=app`;
export const API_PRODUCT_DETAIL = (id) => `products/${id}?apptype=app`;
// export const API_PRODUCTLIST = (id, currentPage) => `admin/api/2022-10/customers.json?ids=${id}`;
export const API_PRODUCTLIST = (id, currentPage) =>
  `admin/api/2023-01/collections/${id}/products.json`;
export const API_SEARCH = (search, currentPage) =>
  `products?searchCriteria[currentPage]=${currentPage}&searchCriteria[pageSize]=8&searchCriteria[filter_groups][0][filters][1][condition_type]=like&searchCriteria[filter_groups][0][filters][1][field]=name&searchCriteria[filter_groups][0][filters][1][value]=%25${search}%25&apptype=app`;

export const API_SEARCH_COLOR = (color, currentPage) =>
  `products?searchCriteria[filterGroups][1][filters][0][field]=color&searchCriteria[filterGroups][1][filters][0][value]=${color}&searchCriteria[filterGroups][1][filters][0][conditionType]=in&searchCriteria[pageSize]=10&searchCriteria[currentPage]=${currentPage}`;
// Cart
export const API_GET_LOGIN_QUOTE = `carts/mine?apptype=app`;
export const API_GET_LOGIN_QUOTE_GUEST = `guest-carts?apptype=app`;
export const API_AUTH_ADD_CART = `carts/mine/items?apptype=app`;
export const API_GUEST_ADD_CART = (quoteId) =>
  `guest-carts/${quoteId}/items?apptype=app`;
export const API_DELETE_AUTH_CART = (itemId) =>
  `carts/mine/items/${itemId}?apptype=app`;
export const API_AUTH_GET_CART_COUNT = `carts/mine/totals?apptype=app`;
export const API_GUEST_REMOVE_CART = (quoteId, item) =>
  `guest-carts/${quoteId}/items/${item}?apptype=app`;
export const API_GUEST_GET_CART_COUNT = (quoteId) =>
  `guest-carts/${quoteId}/totals?apptype=app`;
export const API_CUSTOMER_ORDER_PLACE = `carts/mine/shipping-information`;
export const API_CUSTOMER_ORDER_PLACE_PAYMENT = `thawani/carts/mine/payment-information`;
export const API_GUEST_ORDER_PLACE_PAYMENT = (quoteId) =>
  `thawani/guest-carts/${quoteId}/payment-information`;
export const API_GUEST_ORDER_PLACE = (quoteId) =>
  `guest-carts/${quoteId}/shipping-information`;
export const API_CUSTOMER_PAYMENT_TYPE = `carts/mine/order`;
export const API_GUEST_PAYMENT_TYPE = (quoteId) =>
  `guest-carts/${quoteId}/order`;

// Wishlist
export const API_ADD_WISHLIST = (sku) => `wishlist/add/${sku}`;
export const API_GET_WISHLIST = "wishlist/items";

// ADDRESS
export const API_ADDRESS = "customers/me/shippingAddress";
export const API_UPDATE_ADDRESS = (id) => `${AUTH_BASE_URL}/address/${id}`;
export const API_DELETE_ADDRESS = (id) => `${AUTH_BASE_URL}/address/${id}`;
export const API_GUEST_SHIPPING = (id) =>
  `guest-carts/${id}/shipping-information`;

// User
const USER_BASE_URL = "user/api/v1";
export const API_CHANGE_MOBILE_NUMBER = `${API_UPDATE_PROFILE}/number`;
export const API_CHANGE_MOBILE_NUMBER_OTP = `${API_CHANGE_MOBILE_NUMBER}/otpverify`;
export const API_ABOUS_US = `${AUTH_BASE_URL}/content/about-us`;

// Content
export const PRIVACY_POLICY_URL =
  "http://gforwardgrocapp.cubestagearea.xyz/api/auth/content/privacy-policy";
export const API_DASHBOARD_BANNER = "https://media.furnish.om/get-banners";
export const API_ON_BOARDING = "https://media.furnish.om/get-onboarding-images";
export const API_SHOP_BY_ROOM =
  "https://media.furnish.om/get-onboarding-screens";
export const API_FEATURED_INSPIRATION =
  "https://media.furnish.om/get-onboarding-screens";

export const ABOUT_US =
  "http://gforwardgrocapp.cubestagearea.xyz/api/auth/content/about-us";

// Videos
export const API_VIDEO_LIST = (currentPage) =>
  `http://3.130.97.36:8313/wp-json/v1/videos?page=${currentPage}`;

// Videos
export const API_TREATMENT_DETAILS = (id) =>
  `http://3.130.97.36:8313/wp-json/v1/video`;

// Search
export const API_SEARCH_VIDEO_LIST = (text) =>
  `http://3.130.97.36:8313/wp-json/v1/videos?search=${text}`;

// Filter
export const API_FILTER_VIDEO_LIST = (ids) =>
  `http://3.130.97.36:8313/wp-json/v1/videos?category_id=${ids}`;

// export const API_FILTER_VIDEO_LIST = (ids,text) =>
// `http://3.130.97.36:8313/wp-json/v1/videos?category_id=${ids}&start_date=${text.startDate}&end_date=${text.endDate}`;

// Clinic
export const API_CLINIC = `http://3.130.97.36:8313/wp-json/v1/clinic_info`;
// Contact
export const API_CONTACT = `http://3.130.97.36:8313/wp-json/v1/clinic_contact`;
// Profile
export const API_PROFILE_INFO = "http://3.130.97.36:8313/wp-json/v1/profile";
export const API_PROFILE_INFO_UPDATE =
  "http://3.130.97.36:8313/wp-json/v1/update_profile";
// Notifications
export const API_NOTIFICATIONS =
  "http://3.130.97.36:8313/wp-json/v1/my_notification";

export const API_NOTIFICATION_COUNT =
  "http://3.130.97.36:8313/wp-json/v1/notification_count";

// Upload any Image
export const API_UPLOAD_IMAGE = "wp-json/v1/upload_image";
