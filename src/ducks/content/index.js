import {
  makeRequestActions,
  SLEEP_WAKEUP_TIME_WEEKLY,
  SLEEP_WAKEUP_TIME_MONTHLY,
  TIME_ASLEEP_REQUEST,
  THREE_WEEKS,
  TWO_WEEKS,
} from "@ActionTypes";
import { createReducer } from "@reduxjs/toolkit";

export const [
  CONTENT_MONTHLY,
  requestContentMonthly,
  successContentMonthly,
  failureContentMonthly,
] = makeRequestActions("CONTENT_MONTHLY");

export const [
  CONTENT_WEEKLY,
  requestContentWeekly,
  successContentWeekly,
  failureContentWeekly,
] = makeRequestActions("CONTENT_WEEKLY");

export const [
  TIME_ASLEEP,
  requestTimeSleep,
  successTimeSleep,
  failureTimeSleep,
] = makeRequestActions("TIME_ASLEEP");

const initalState = {
  data: {},
  monthly: {},
  weekly: {},
  twoWeeks: {},
  threeWeeks: {},
  timeAsleep: [],
};

export default createReducer(initalState, (builder) => {
  builder.addCase(CONTENT_MONTHLY.SUCCESS, (state, action) => {
    const { data, identifier } = action.payload;
    console.log("data inner content ONE", action);
    switch (identifier) {
      case SLEEP_WAKEUP_TIME_MONTHLY:
        console.log("data inner content TWO", data);
        state.monthly = data;
        break;
      default:
        break;
    }
  });
  builder.addCase(CONTENT_WEEKLY.SUCCESS, (state, action) => {
    const { data, identifier } = action.payload;
    console.log("data inner content ONE", action);
    switch (identifier) {
      case SLEEP_WAKEUP_TIME_WEEKLY:
        console.log("data in reducer ONE", data);
        console.log("data in identifier ONE", identifier);
        state.weekly = data;
        break;
      case THREE_WEEKS:
        console.log("data in reducer TWO", data);
        console.log("data in identifier TWO", identifier);
        state.threeWeeks = data;
        break;

      case TWO_WEEKS:
        console.log("data in reducer THREE", data);
        console.log("data in identifier THREE", identifier);

        state.twoWeeks = data;
        break;

      default:
        break;
    }
  });
  builder.addCase(TIME_ASLEEP.SUCCESS, (state, action) => {
    const { data, identifier } = action.payload;
    console.log("data inner content ONE", action);
    switch (identifier) {
      case TIME_ASLEEP_REQUEST:
        console.log("data inner content THREE", data);
        // state.timeAsleep = [
        //   {
        //     id: "string",
        //     contributors: {
        //       deep_sleep: 0,
        //       efficiency: 0,
        //       latency: 0,
        //       rem_sleep: 0,
        //       restfulness: 0,
        //       timing: 0,
        //       total_sleep: 0,
        //     },
        //     day: "2019-08-24",
        //     score: 0,
        //     timestamp: "2019-08-24T14:15:22Z",
        //   },
        // ];
        state.timeAsleep = data;
        break;

      default:
        break;
    }
  });
});

export const contentSelectorMonthly = (storeState) => {
  return storeState.content?.monthly;
};
export const contentSelectorWeekly = (storeState) => {
  return storeState.content?.weekly;
};

export const contentSelectorThreeWeeks = (storeState) => {
  return storeState.content?.threeWeeks;
};

export const contentSelectorTwoWeeks = (storeState) => {
  return storeState.content?.twoWeeks;
};

export const contentSelectorTimeAsleep = (storeState) => {
  return storeState.content?.timeAsleep;
};
