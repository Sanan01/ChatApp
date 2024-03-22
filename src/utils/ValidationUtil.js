import * as yup from "yup";
import { strings } from "@i18n";

const displayMsg = (label, type) => {
  const _type = type ?? "required";
  return strings(`validation.${_type}`, { key: "label", value: label });
};

const Regex = {
  lowerCase: /^(?=.*[a-z])/,
  upperCase: /^(?=.*[A-Z])/,
  numeric: /^(?=.*[0-9])/,
  special: /^(?=.*[!@#$%^&*])/,
  regexForUsername: /^[a-zA-Z0-9_]{3,15}$/,
  phoneNumber:
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
  alphabetsAndSpaces: /^[a-zA-Z\s]*$/,
};

// ============validation object=====
export const Validation = {
  required: (title, type = "required", valueType = "string") =>
    yup[valueType]().nullable(true).required(displayMsg(title, type)),

  notRequired: () => yup.string().notRequired(),

  length: (_title, _length) =>
    yup
      .string()
      .required(displayMsg(_title))
      .test(
        "len",
        `Must be ${_length} characters`,
        (val) => val.length >= _length
      ),

  name: () =>
    yup
      .string()
      .required(displayMsg("Name"))
      .min(3, displayMsg(undefined, "name_min"))
      .max(30, displayMsg(undefined, "name"))
      .matches(
        Regex.alphabetsAndSpaces,
        displayMsg("", "alphabets_and_spaces_only")
      ),

  mobile_number: () =>
    yup
      .string()
      .required(displayMsg("Mobile Number"))
      .matches(Regex.mobileNumber, displayMsg("", "invalid_number")),

  username: () =>
    yup
      .string()
      .required(displayMsg("User Name"))
      .min(3, displayMsg(undefined, "name_min"))
      .max(30, displayMsg(undefined, "name"))
      .matches(Regex.regexForUsername, displayMsg("", "invalid_username")),

  email: () =>
    yup
      .string()
      .required(displayMsg("Email"))
      .email(displayMsg("email address.", "valid")),

  zipCode: () =>
    yup
      .string()
      .required(displayMsg("ZipCode"))
      .min(5, displayMsg(undefined, "zip_code_min"))
      .max(6, displayMsg(undefined, "zip_code")),

  password: (title) =>
    yup
      .string()
      .required(displayMsg(title))
      .matches(/^(?=.{8,})/, "must be eight characters or longer")
      .matches(Regex.lowerCase, displayMsg("lowerCase", "character"))
      .matches(Regex.upperCase, displayMsg("upperCase", "character"))
      .matches(Regex.numeric, displayMsg("numeric", "character"))
      .matches(Regex.special, displayMsg("special", "character")),

  currentPassword: (title) => yup.string().required(displayMsg(title)),

  passwordMatch: (ref) =>
    yup
      .string()
      .required(displayMsg("Confirm Password"))
      .oneOf([yup.ref(ref), null], displayMsg("", "confirm_password")),

  numberAndlength: (_title, _length) =>
    yup
      .string()
      .required(displayMsg(_title))
      .test(
        "len",
        `Must be ${_length} characters`,
        (val) => val.length === _length
      )
      .matches(Regex.phoneNumber, displayMsg("", "invalid_number")),

  cardExpire: (_title, _length) =>
    yup
      .string()
      .required(displayMsg(_title))
      .test("len", `${_title} must be valid`, (val) => {
        if (val && val?.split("/").length === 2 && val?.split("/")[0] > 0) {
          const expireArray = val?.split("/");
          const month = expireArray[0];
          const year = expireArray[1];
          var d1 = new Date(`20${year}`, month);
          var today = new Date();
          return d1 >= today;
        }
        return false;
      }),
};

// x=================x

const ValidationSchema = {
  // new
  login: yup.object().shape({
    email: Validation.email("Primay Email"),
    // email: Validation.name(),
    password: Validation.required("Password"),
  }),
  token: yup.object().shape({
    token: Validation.required("Token"),
  }),

  email: yup.object().shape({
    email: Validation.email("Primay Email"),
  }),

  review: yup.object().shape({
    title: Validation.required("Title Required"),
    detail: Validation.required("Detail Required"),
  }),

  zipCode: yup.object().shape({
    zip_code: Validation.zipCode("Zip Code"),
  }),

  mobileNumber: yup.object().shape({
    number: Validation.numberAndlength("Phone", 10),
  }),

  editProfile: yup.object().shape({
    first_name: Validation.required("your full name"),
    email: Validation.email("Email"),
  }),

  signup: yup.object().shape({
    first_name: Validation.required("First Name"),
    last_name: Validation.required("Last Name"),
    email: Validation.email("Primay Email"),
    password: Validation.password("Password"),
  }),

  addAddress: yup.object().shape({
    first_name: Validation.required("First Name"),
    last_name: Validation.required("Last Name"),
    email: Validation.email("Primay Email"),
    street: Validation.required("Street Address"),
    area: Validation.required("Area"),
    mobile_number: Validation.mobile_number(),
    // number: Validation.numberAndlength("Phone", 10),
    //   /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\]?[0-9]{3}[-\\s\\]?[0-9]{4,6}$/im
    // .matches(
    //   /^[a-zA-Z0-9\s]+$/,
    //   'Only alphabets and numbers are allowed for this field ',
    // ),
  }),

  report: yup.object().shape({
    message: Validation.required("Message"),
  }),

  contactUs: yup.object().shape({
    subject: Validation.required("Subject"),
    message: Validation.required("Message"),
  }),

  forgot: yup.object().shape({
    email: Validation.email(),
  }),
  password: yup.object().shape({
    password: Validation.password("Password"),
    confirm_password: Validation.passwordMatch("password"),
  }),
  forgotPassword: yup.object().shape({
    // current_password: Validation.password("Current Password"),
    new_password: Validation.password("New Password"),
    confirm_password: Validation.passwordMatch("new_password"), // current_password
  }),
  changePassword: yup.object().shape({
    current_password: Validation.currentPassword("Old Password"),
    new_password: Validation.password("New Password"),
    confirm_password: Validation.passwordMatch("new_password"), // current_password
  }),
  resetPassword: yup.object().shape({
    new_password: Validation.password("New Password"),
    confirm_password: Validation.passwordMatch("new_password"), // current_password
  }),

  // old

  profile: yup.object().shape({
    first_name: Validation.required("First Name"),
    last_name: Validation.required("Last Name"),
    email: Validation.email(),
    phone: Validation.numberAndlength("Phone", 10),
    // location: Validation.required("Location"),
  }),

  signupSocial: yup.object().shape({
    first_name: Validation.required("First Name"),
    last_name: Validation.required("Last Name"),
    email: Validation.email(),
  }),

  changePass: yup.object().shape({
    current_password: Validation.required("Old Password"),
    new_password: Validation.password("New Password"),
    confirm_password: Validation.passwordMatch("new_password"),
  }),

  address: yup.object().shape({
    address: Validation.required("Address"),
    country: Validation.required("Country", "required_select", "object"), //Validation.required('Country'),
    zip_code: Validation.length("Zip Code", 5),
    state: Validation.required("State", "required_select", "object"), //Validation.required('State'),
    city: Validation.required("City", "required_select", "object"), // Validation.required('City'),
    default_address: Validation.notRequired(),
  }),

  reviewDetails: yup.object().shape({
    first_name: Validation.required("First Name"),
    last_name: Validation.required("Last Name"),
    phone: Validation.numberAndlength("Phone", 10),
  }),

  setPrice: yup.object().shape({
    price: Validation.required("Price"),
  }),

  confirmLocation: yup.object().shape({
    location: Validation.required("location"),
  }),

  otp: yup.object().shape({
    otp: Validation.length("Code", 4),
  }),

  // addAddress: yup.object().shape({
  //   firstName: Validation.required("First Name"),
  //   lastName: Validation.required("Last Name"),
  //   country: Validation.required("Country Name"),
  //   address: Validation.required("Address"),
  //   city: Validation.required("City"),
  //   province: Validation.required("Province"),
  //   postalCode: Validation.length("Postal Code", 5),
  //   phone: Validation.numberAndlength("Phone", 10),
  //   email: Validation.email(),
  // }),

  categorySpecs: yup.object().shape({
    make: Validation.required("Make"),
  }),

  report_ad: yup.object().shape({
    type: Validation.required(
      strings("app.problem_type"),
      "required_select",
      "object"
    ),
    description: Validation.required(strings("app.description")),
  }),

  // review: yup.object().shape({
  //   description: Validation.required(strings("app.description")),
  // }),

  // creditCardInput: yup.object().shape({
  //   card_number: Validation.required('Card Number'),
  //   name_on_card: Validation.required('Name on Card'),
  //   card_expiry: Validation.required('Card Expiry'),
  //   ccv: Validation.required('CCV'),
  // }),
  creditCardInput: yup.object().shape({
    // card_number: Validation.required('Card Number'),
    // card_number: Validation.cardNumber("Card Number"),
    name_on_card: Validation.required("Name on Card").matches(
      Regex.alphabetsAndSpaces,
      displayMsg("", "alphabets_and_spaces_only")
    ),
    card_expiry: Validation.cardExpire("Card Expiry"),
    ccv: Validation.length("CCV", 3),
  }),

  socialSecurityNumber: yup.object().shape({
    ssn_number: Validation.required("SSN number"),
  }),

  drivingLicenseNumber: yup.object().shape({
    driving_license_number: Validation.required("driving license number"),
  }),

  vehicleDetails: yup.object().shape({
    vehicle_type: Validation.required(
      "vehicle type",
      "required_select",
      "object"
    ),
    vehicle_color: Validation.required(
      "vehicle color",
      "required_select",
      "object"
    ),
  }),

  vehicleDocuments: yup.object().shape({
    reg_number: Validation.required("registration number"),
    vehicle_insurance_number: Validation.required("vehicle insurance number"),
  }),
};

export default ValidationSchema;
