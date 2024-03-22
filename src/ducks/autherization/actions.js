import { LOGOUT } from "./types";

export function logout(cb) {
  return {
    cb,
    type: LOGOUT,
  };
}
