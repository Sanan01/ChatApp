import { fork } from "redux-saga/effects";
import auth from "./auth/saga";
import profile from "./profile/saga";
import content from "./content/saga";
import image from "./image/saga";
import notifications from "./notifications/saga";

export default function* root() {
  yield fork(auth);
  yield fork(profile);
  yield fork(image);
  yield fork(notifications);
  yield fork(content);
}
