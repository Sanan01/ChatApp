import _ from 'lodash';
import {REQUEST_METHOD} from '@Constants';
import {API_DASHBOARD_BANNER, API_FEATURED_INSPIRATION, API_ON_BOARDING, API_SHOP_BY_ROOM} from '@WebService';
import {DataHandler} from '@utils';
import {requestImage} from '@ducks/image';

class ImageUtils {
  getOnBoardingRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = {showErrorMsg: 1, showSuccessMsg: 0};
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_ON_BOARDING,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestImage(payload));
  }

  getBannerRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = {showErrorMsg: 1, showSuccessMsg: 0};
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_DASHBOARD_BANNER,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestImage(payload));
  }

  getShopByRoomRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = {showErrorMsg: 1, showSuccessMsg: 0};
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_SHOP_BY_ROOM,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestImage(payload));
  }

  getFeaturedInspirationRequest(requestData, identifier, callback = undefined) {
    const errorSuccessNotification = {showErrorMsg: 1, showSuccessMsg: 0};
    const payload = {
      requestData,
      callback,
      identifier,
      url: API_FEATURED_INSPIRATION,
      methodType: REQUEST_METHOD.GET,
      errorSuccessNotification,
    };
    DataHandler.getStore().dispatch(requestImage(payload));
  }
}

export default new ImageUtils();
