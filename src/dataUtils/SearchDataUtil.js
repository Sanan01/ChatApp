import _ from "lodash";
import { DataHandler } from "@utils";
import { successSearchData } from "@ducks/search";

class SearchDataUtil {
  getSearchDataRequest(data, identifier) {
    const errorSuccessNotification = { showErrorMsg: 1, showSuccessMsg: 0 };
    const payload = {
      data,
      identifier,
      errorSuccessNotification,
    };
    console.log("payload: ", payload);
    DataHandler.getStore().dispatch(successSearchData(payload));
  }
}

export default new SearchDataUtil();
