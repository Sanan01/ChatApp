import NetInfo from '@react-native-community/netinfo';
// import DataSync from './DataSync';

let unsubscribe;

class NetworkInfo {
  networkInfoListener(dispatch, networkInfoAction) {
    // let timer = null;

    NetInfo.fetch().then(state => {
      dispatch(networkInfoAction(state.isConnected));
      // DataSync.sync();
    });

    unsubscribe = NetInfo.addEventListener(state => {
      // clearTimeout(timer);
      // timer = setTimeout(() => {
      //   dispatch(networkInfoAction(state.isConnected));
      //   DataSync.sync();
      // }, 300);
      // dispatch(
      //   generalSaveAction(CONNECT_SOCKET_ON_NETWORK_CONNECTION, {
      //     isNetworkConnected
      //   })
      // );
    });
  }

  removeNetworkInfoListener(dispatch, networkInfoAction) {
    unsubscribe && unsubscribe();

    NetInfo.fetch().then(state => {
      dispatch(networkInfoAction(state.isConnected));
    });
  }
}

export default new NetworkInfo();
