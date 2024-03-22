import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { enableBatching } from "redux-batched-actions";
import createSensitiveStorage from "redux-persist-sensitive-storage";

import { whiteList } from "../config/ReduxStorage";
import RootReducer from "../ducks/RootReducer";
import RootSaga from "../ducks/RootSaga";

// check if chrome debugger is on
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default function configureStore(onComplete) {
  // init logger
  const logger = createLogger({
    predicate: () => isDebuggingInChrome,
    collapsed: true,
    duration: true,
    diff: true,
  });

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const storage = createSensitiveStorage({
    keychainService: "myKeychain",
    sharedPreferencesName: "mySharedPrefs",
  });

  // init persist config - set which reducers to save
  const persistConfig = {
    key: "root",
    storage,
    whitelist: whiteList,
    stateReconciler: autoMergeLevel2,
  };

  // init redux persist reducer
  const persistedReducer = persistReducer(persistConfig, RootReducer);

  const store = createStore(
    enableBatching(persistedReducer),
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
  );

  // init store with redux persist
  persistStore(store, null, () => onComplete(store));

  // then run the saga
  sagaMiddleware.run(RootSaga);
}
