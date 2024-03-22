import { LOGOUT } from "./types";

const initialState = { isGuest: false, data: {} };

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
};
