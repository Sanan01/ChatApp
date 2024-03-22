import React, { useEffect, useState, useRef } from "react";
import { StatusBar, SafeAreaView } from "react-native";

import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";

import { AppStyles } from "@theme";
import { DataHandler, NetworkInfo } from "@utils";
import { ButtonSuccesModal, FilterModal, RequestModal } from "@modals";

import { networkActions } from "./ducks/network";
import configureStore from "./store";
import AppNavigator from "./navigator";

const App = () => {
  const [store, setStore] = useState(null);
  const buttonModalsRef = useRef(null);
  const filterModalsRef = useRef(null);
  const requestModalsRef = useRef(null);

  useEffect(() => {
    const onStoreConfigure = (store) => {
      DataHandler.setStore(store);
      NetworkInfo.networkInfoListener(
        store.dispatch,
        networkActions.networkInfoListener
      );
      setStore(store);
      SplashScreen.hide();
    };

    configureStore(onStoreConfigure);

    return () => {
      NetworkInfo.removeNetworkInfoListener(
        DataHandler.getStore(),
        networkActions.networkInfoListener
      );
    };
  }, []);

  DataHandler.setButtonSuccesModalRef(buttonModalsRef);
  DataHandler.setFilterModalRef(filterModalsRef);
  DataHandler.setRequestModalRef(requestModalsRef);

  return (
    <SafeAreaView style={AppStyles.flex}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {store && (
        <Provider store={store}>
          <AppNavigator />
          <FlashMessage
            position="top"
            hideStatusBar={false}
            statusBarHeight={StatusBar.currentHeight}
          />
          <ButtonSuccesModal ref={buttonModalsRef} />
          <FilterModal ref={filterModalsRef} />
          <RequestModal ref={requestModalsRef} />
        </Provider>
      )}
    </SafeAreaView>
  );
};

export default App;
