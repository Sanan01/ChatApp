let store;
let authMagentoToken;
let authToken;
let modelOpenRef;
let buttonModalsRef;
let filterModalsRef;
let requestModalsRef;

function setStore(value) {
  store = value;
}

function getStore() {
  return store;
}

function getMagentoAuthToken() {
  return authMagentoToken;
}

function modelOpen(model) {
  modelOpenRef = model;
}

function getModelOpen() {
  return modelOpenRef;
}

function setButtonSuccesModalRef(ref) {
  buttonModalsRef = ref;
}

function getButtonSuccesModalRef() {
  return buttonModalsRef;
}

function setFilterModalRef(ref) {
  filterModalsRef = ref;
}

function getFilterModalRef() {
  return filterModalsRef;
}

function setRequestModalRef(ref) {
  requestModalsRef = ref;
}

function getRequestModalRef() {
  return requestModalsRef;
}

function setAuthToken(token) {
  authToken = token;
}

function getAuthToken() {
  return authToken;
}

function clearAuthToken() {
  authToken = null;
}

export default {
  setStore,
  getStore,
  getMagentoAuthToken,
  setAuthToken,
  getAuthToken,
  clearAuthToken,
  modelOpen,
  getModelOpen,
  setButtonSuccesModalRef,
  getButtonSuccesModalRef,
  setFilterModalRef,
  getFilterModalRef,
  setRequestModalRef,
  getRequestModalRef,
};
