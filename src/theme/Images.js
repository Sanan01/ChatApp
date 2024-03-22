import React from "react";
import Logo from "../assets/svgs/logo.svg";
import User from "../assets/svgs/user.svg";
import Envelope from "../assets/svgs/envelope.svg";
import Lock from "../assets/svgs/lock.svg";
import EyeClose from "../assets/svgs/eyeclose.svg";
import EyeOpen from "../assets/svgs/eyeopen.svg";
import Bell from "../assets/svgs/bell.svg";
import Search from "../assets/svgs/search.svg";
import Man from "../assets/svgs/man.svg";
import Back from "../assets/svgs/back.svg";
import ArrowLeft from "../assets/svgs/arrowleft.svg";
import Magnifier from "../assets/svgs/magnifier.svg";
import Filter from "../assets/svgs/filter.svg";
import Pain from "../assets/svgs/pain.svg";
import Pajn from "../assets/svgs/pajn.svg";
import Location from "../assets/svgs/locationdot.svg";
import Call from "../assets/svgs/Phone.svg";
import Fax from "../assets/svgs/Fax.svg";
import Email from "../assets/svgs/envelope.svg";
import Globe from "../assets/svgs/Globe.svg";
import Message from "../assets/svgs/sms.svg";
import Edit from "../assets/svgs/edit.svg";
import Tick from "../assets/svgs/tick.svg";
import Out from "../assets/svgs/out.svg";
import Calender from "../assets/svgs/calender.svg";
import Glass from "../assets/svgs/glass.svg";
import Exercises from "../assets/svgs/active/exercises.svg";
import Clinic from "../assets/svgs/active/clinic.svg";
import Contact from "../assets/svgs/active/contact.svg";
import Profile from "../assets/svgs/active/profile.svg";
import ClearBlack from "../assets/svgs/active/clear.svg";
import Clear from "../assets/svgs/clear.svg";
import LogoSvg from "../assets/svgs/logosvg.svg";
import RedButton from "../assets/svgs/redbutton.svg";
import GreenButton from "../assets/svgs/greenbutton.svg";

import Exe from "../assets/svgs/inActive/exercises.svg";
import Cli from "../assets/svgs/inActive/clinic.svg";
import Con from "../assets/svgs/inActive/contact.svg";
import Pro from "../assets/svgs/inActive/profile.svg";

// const testVideos = {
//   one: require("../assets/video/testVideo.mp4"),
// };

const testPictures = {
  one: require("../assets/treatment/crack.png"),
  two: require("../assets/treatment/Rectangle.png"),
};

const profile = {
  dp: require("../assets/profile/dp.png"),
};

const tabbar = {
  Exercises: require("../assets/icons/tabs/medical.png"),
  Contact: require("../assets/icons/tabs/Phone.png"),
  Profile: require("../assets/icons/tabs/User.png"),
  Clinic: require("../assets/icons/tabs/house.png"),
};

const thumbnails = {
  back: require("../assets/thumbnails/back.png"),
  pain: require("../assets/thumbnails/pain.png"),
};

// icons
const icons = {
  back: require("../assets/icons/back/back.png"),
};

// svg icons
const svgs = {
  logo: <Logo />,
  user: <User />,
  envelope: <Envelope />,
  lock: <Lock />,
  eyeclose: <EyeClose />,
  eyeopen: <EyeOpen />,
  bell: <Bell />,
  search: <Search />,
  man: <Man />,
  magnifier: <Magnifier />,
  filter: <Filter />,
  arrowleft: <ArrowLeft />,
  back: <Back />,
  pain: <Pain />,
  pajn: <Pajn />,
  locationdot: <Location />,
  phone: <Call />,
  fax: <Fax />,
  sms: <Message />,
  globe: <Globe />,
  email: <Email />,
  edit: <Edit />,
  tick: <Tick />,
  out: <Out />,
  calender: <Calender />,
  glass: <Glass />,
  clear: <Clear />,
  clearblack: <ClearBlack />,
  logoSvg: <LogoSvg />,
  redbutton: <RedButton />,
  greenbutton: <GreenButton />,
};

const tabBarIconsActive = {
  Exercises: <Exercises />,
  Clinic: <Clinic />,
  Contact: <Contact />,
  Profile: <Profile />,
};

const tabBarIconsInActive = {
  Exercises: <Exe />,
  Clinic: <Cli />,
  Contact: <Con />,
  Profile: <Pro />,
};

const buttons = {};

// images
const images = {};

const categories = {};

const emptyImages = {
  // home: require("../assets/images/emptyImages/home.png"),
};

const dummyImages = {};

export default {
  tabbar,
  icons,
  buttons,
  images,
  dummyImages,
  categories,
  emptyImages,
  svgs,
  thumbnails,
  // testVideos,
  testPictures,
  profile,
  tabBarIconsActive,
  tabBarIconsInActive,
};
