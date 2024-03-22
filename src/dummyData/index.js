import { Images } from "@theme";
import call from "react-native-phone-call";
import SendSMS from "react-native-sms";
import { openComposer } from "react-native-email-link";

export const infoData = [
  {
    id: 1,
    svg: Images.svgs.locationdot,
    text: "",
  },
  {
    id: 2,
    svg: Images.svgs.phone,
    text: "",
  },
  {
    id: 3,
    svg: Images.svgs.fax,
    text: "",
  },
  {
    id: 4,
    svg: Images.svgs.email,
    text: "",
  },
  {
    id: 5,
    svg: Images.svgs.globe,
    text: "",
  },
];

/**
 * @memberof Contact
 * @function openDialer
 * @author Sanan Baig
 * @description opens up phone dialer to call any number
 * */

const openDialer = (phoneNumber) => {
  const phoneNumberFormatted = phoneNumber.phone.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  const args = {
    number: phoneNumberFormatted, // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
    skipCanOpen: true, // Skip the canOpenURL check
  };

  call(args).catch(console.error);
};

/**
 * @memberof Contact
 * @function openMessage
 * @author Sanan Baig
 * @description opens up phone messages to text any number
 * */

const openMessage = (phoneNumber) => {
  const phoneNumberFormatted = phoneNumber.phone.replace(/[^0-9]/g, "");
  SendSMS.send(
    {
      body: "",
      recipients: [phoneNumberFormatted],
      successTypes: ["sent", "queued"],
      allowAndroidSendWithoutReadPermission: true,
    },
    (completed, cancelled, error) => {
      console.log(
        "SMS Callback: completed: " +
          completed +
          " cancelled: " +
          cancelled +
          "error: " +
          error
      );
    }
  );
};

/**
 * @memberof Contact
 * @function openEmail
 * @author Sanan Baig
 * @description opens up gmail to mail any number
 * */

const openEmail = (email) => {
  openComposer({
    to: email.email,
    subject: "",
    body: "",
  });
};

const openFax = () => {};

export const buttonData = [
  {
    icon: Images.svgs.phone,
    label: "Call",
    action: (phoneNumber) => openDialer(phoneNumber),
    params: "3023165858",
  },
  {
    icon: Images.svgs.sms,
    label: "Message",
    action: (phoneNumber) => openMessage(phoneNumber),
    params: { phoneNumber: "3023165858", message: "" },
  },
  {
    icon: Images.svgs.email,
    label: "Email",
    action: (email) => openEmail(email),
    params: {
      email: "info@middletownchiropractic.com",
      subject: "",
      body: "",
    },
  },
];

export const picsData = [
  {
    id: 1,
    image: Images.testPictures.two,
  },
  {
    id: 2,
    image: Images.testPictures.two,
  },
  {
    id: 3,
    image: Images.testPictures.two,
  },
  {
    id: 4,
    image: Images.testPictures.two,
  },
  {
    id: 5,
    image: Images.testPictures.two,
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const videosData = [
  {
    id: "1",
    title: "Chiropractic Protects Your Spine As You Age, Study Suggests",
    date: "April 28, 2016",
    description:
      "Chiropractors use their hands to examine and treat problems of the bones, muscles and joints...",
    // vid: Images.testVideos.one,
    pic: Images.thumbnails.back,
    pics: [
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
    ],
    keywords: ["Protects", "Chiropractic", "Suggests", "Tennis/Golfers Elbow"],
  },
  {
    id: "2",
    title: "How a Chiropractic Adjustment Works",
    date: "April 28, 2016",
    description:
      "Chiropractors use their hands to examine and treat problems of the bones, muscles and joints...",
    // vid: Images.testVideos.one,
    pic: Images.thumbnails.pain,
    pics: [
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
    ],
    keywords: ["Protects", "Chiropractic", "Suggests"],
  },
  {
    id: "3",
    title: "How a Chiropractic Adjustment Works",
    date: "April 28, 2016",
    description:
      "Chiropractors use their hands to examine and treat problems of the bones, muscles and joints...",
    // vid: Images.testVideos.one,
    pic: Images.thumbnails.back,
    pics: [
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
    ],
    keywords: ["Protects", "Chiropractic", "Suggests"],
  },
  {
    id: "4",
    title: "How a Chiropractic Adjustment Works",
    date: "April 28, 2016",
    description:
      "Chiropractors use their hands to examine and treat problems of the bones, muscles and joints...",
    // vid: Images.testVideos.one,
    pic: Images.thumbnails.pain,
    pics: [
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
    ],
    keywords: ["Protects", "Chiropractic", "Suggests"],
  },
  {
    id: "5",
    title: "How a Chiropractic Adjustment Works",
    date: "April 28, 2016",
    description:
      "Chiropractors use their hands to examine and treat problems of the bones, muscles and joints...",
    // vid: Images.testVideos.one,
    pic: Images.thumbnails.back,
    pics: [
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
      Images.testPictures.one,
    ],
    keywords: ["Protects", "Chiropractic", "Suggests"],
  },
];

export const notificationsData = [
  {
    title: "Today",
    data: [
      {
        time: "10:00am",
        title: "A new video for back pain has been assigned.",
        command: "Tap to View",
      },
      {
        time: "10:00am",
        title: "A new video for back pain has been assigned.",
        command: "Tap to View",
      },
      {
        time: "10:00am",
        title: "A new video for back pain has been assigned.",
        command: "Tap to View",
      },
      {
        time: "10:00am",
        title: "A new video for back pain has been assigned.",
        command: "Tap to View",
      },
      {
        time: "10:00am",
        title: "A new video for back pain has been assigned.",
        command: "Tap to View",
      },
      {
        time: "10:00am",
        title: "A new video for back pain has been assigned.",
        command: "Tap to View",
      },
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
      {
        time: "09:30am",
        title: "A new video for Neck Stretches has been assigned.",
        command: "Tap to View",
      },
    ],
  },
];

export const categoriesData = ["Shoulder Pain", "Back Pain", "Lower Back Pain"];

const createDummyData = () => {
  const dummyObject = {};
  for (let i = 1; i <= 30; i++) {
    const currentDate = `2024-01-${i.toString().padStart(2, "0")}`;
    dummyObject[currentDate] = {
      createdDate: currentDate,
      reactionTime: Math.floor(Math.random() * 10000) + 1, // Generating a random reaction time for demonstration
    };
  }
  return dummyObject;
};

export const dummyData = [
  { "2024-12-17": { createdDate: "2024-12-17", reactionTime: 623 } },
  { "2024-12-10": { createdDate: "2024-12-10", reactionTime: 556 } },
  {
    "2024-01-03": {
      createdDate: "2024-01-03",
      reactionTime: 2534.66,
    },
  },
  { "2024-01-05": { createdDate: "2024-01-05", reactionTime: 580 } },
];
console.log("dummyData", dummyData);

export const reactionTimeData = [
  {
    "2024-01-24": {
      createdDate: "2024-01-24",
      reactionTime: 877.0434529474035,
    },
  },
  {
    "2024-01-11": {
      createdDate: "2024-01-11",
      reactionTime: 981.7351572922752,
    },
  },
  {
    "2024-01-20": {
      createdDate: "2024-01-20",
      reactionTime: 870.9781378005695,
    },
  },
  {
    "2024-01-04": {
      createdDate: "2024-01-04",
      reactionTime: 90.35733559183835,
    },
  },
  {
    "2024-01-13": {
      createdDate: "2024-01-13",
      reactionTime: 545.4525130080964,
    },
  },
  {
    "2024-01-07": {
      createdDate: "2024-01-07",
      reactionTime: 249.32614686588136,
    },
  },
  {
    "2024-01-14": {
      createdDate: "2024-01-14",
      reactionTime: 601.5711958115942,
    },
  },
  {
    "2024-01-20": {
      createdDate: "2024-01-20",
      reactionTime: 789.0492361534497,
    },
  },
  {
    "2024-01-07": {
      createdDate: "2024-01-07",
      reactionTime: 789.1220332859837,
    },
  },
  {
    "2024-01-31": {
      createdDate: "2024-01-31",
      reactionTime: 271.67849232322357,
    },
  },
  {
    "2024-01-19": {
      createdDate: "2024-01-19",
      reactionTime: 321.01212468075164,
    },
  },
  {
    "2024-01-18": {
      createdDate: "2024-01-18",
      reactionTime: 638.8955392361614,
    },
  },
  {
    "2024-01-06": {
      createdDate: "2024-01-06",
      reactionTime: 173.97984518468425,
    },
  },
  {
    "2024-01-20": {
      createdDate: "2024-01-20",
      reactionTime: 494.9655857236304,
    },
  },
  {
    "2024-01-21": {
      createdDate: "2024-01-21",
      reactionTime: 438.90203811484497,
    },
  },
  {
    "2024-01-08": {
      createdDate: "2024-01-08",
      reactionTime: 457.6072193218566,
    },
  },
  {
    "2024-01-27": {
      createdDate: "2024-01-27",
      reactionTime: 259.23447599698267,
    },
  },
  {
    "2024-01-04": {
      createdDate: "2024-01-04",
      reactionTime: 64.89757389853987,
    },
  },
  {
    "2024-01-13": {
      createdDate: "2024-01-13",
      reactionTime: 322.6784499762217,
    },
  },
  {
    "2024-01-27": {
      createdDate: "2024-01-27",
      reactionTime: 674.0607445745104,
    },
  },
  {
    "2024-01-31": {
      createdDate: "2024-01-31",
      reactionTime: 176.32623934857799,
    },
  },
  {
    "2024-01-15": {
      createdDate: "2024-01-15",
      reactionTime: 737.1775384594212,
    },
  },
  {
    "2024-01-22": {
      createdDate: "2024-01-22",
      reactionTime: 219.658422662779,
    },
  },
  {
    "2024-01-23": {
      createdDate: "2024-01-23",
      reactionTime: 325.16784155179965,
    },
  },
  {
    "2024-01-18": {
      createdDate: "2024-01-18",
      reactionTime: 473.682089923413,
    },
  },
  {
    "2024-01-10": {
      createdDate: "2024-01-10",
      reactionTime: 964.9605823002934,
    },
  },
  {
    "2024-01-06": {
      createdDate: "2024-01-06",
      reactionTime: 385.48484940584837,
    },
  },
  {
    "2024-01-15": {
      createdDate: "2024-01-15",
      reactionTime: 171.65539708778005,
    },
  },
  {
    "2024-01-12": {
      createdDate: "2024-01-12",
      reactionTime: 109.0196376070821,
    },
  },
  {
    "2024-01-30": {
      createdDate: "2024-01-30",
      reactionTime: 997.4641220162121,
    },
  },
];

export const generateSampleDataLatestAtTop = () => {
  // Function to get a random reaction time
  const getRandomReactionTime = () => {
    return Math.random() * 1000; // Generating a random number between 0 and 1000
  };

  // Get today's date
  let today = new Date();

  // Get the date one month ago
  let oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  // Array to store the generated data
  let data = [];

  // Loop through dates from one month ago to today
  for (
    let date = new Date(today);
    date >= oneMonthAgo;
    date.setDate(date.getDate() - 1)
  ) {
    let formattedDate = date.toISOString().split("T")[0]; // Format date to YYYY-MM-DD
    let reactionTime = getRandomReactionTime(); // Get a random reaction time

    // Create an object for the current date and reaction time
    let entry = {};
    entry[formattedDate] = {
      createdDate: formattedDate,
      reactionTime: reactionTime,
    };

    // Push the entry object to the data array
    data.push(entry);
  }

  return data;
};
