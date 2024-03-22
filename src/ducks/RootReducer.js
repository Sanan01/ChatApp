import { combineReducers } from "redux";
import network from "./network";
import auth from "./auth";
import autherization from "./autherization";
import profile from "./profile";
import image from "./image";
import notifications from "./notifications";
import search from "./search";
import content from "./content";

const appReducer = combineReducers({
  network,
  auth,
  autherization,
  profile,
  image,
  notifications,
  search,
  content,
});

export default appReducer;
