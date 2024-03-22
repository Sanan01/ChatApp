import { makeRequestActions } from "@ActionTypes";
import { createReducer } from "@reduxjs/toolkit";
import { GET_SEARCH_DATA } from "@ActionTypes";
import _ from "lodash";

export const [DATA, , successSearchData] = makeRequestActions("DATA");

const initialState = {
  data: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(DATA.SUCCESS, (state, action) => {
    console.log("Inside Search Reducer 1");
    const { data, identifier } = action.payload;
    switch (identifier) {
      case GET_SEARCH_DATA:
        state.data = data;
        break;
      default:
        break;
    }
  });
});
const getSearchData = () => {
  return (store) => store.search?.data;
};

export const VideosSelector = {
  getSearchData,
};
