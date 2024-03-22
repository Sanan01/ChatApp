import React, { useEffect, useState } from "react";
import { View, Platform, Text, TouchableOpacity } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Colors, Images } from "@theme";

import styles from "./styles";

const DatePickerCustom = ({ value, onChange, minDate }) => {
  const [open, setOpen] = useState(false);
  const defaultDate = value ? new Date(value) : new Date();
  const [val, setVal] = useState(defaultDate);
  const [androidDateText, setAndroidDateText] = useState(value);

  const onChangeDate = (event, date) => {
    setOpen(false);
    console.log(date);
    setVal(date);
    setAndroidDateText(date);
    onChange(date);
  };

  let boxStyle = { ...styles.inputBox };
  if (androidDateText) {
    boxStyle.color = "#828282";
  }

  const onPressOpenDateSheet = () => {
    return (
      <DateTimePicker
        mode={"date"}
        is24Hour={false}
        onChange={onChangeDate}
        minimumDate={minDate}
        value={val}
        placeholderText={"DD/MM/YYYY"}
        textColor={Colors.background}
      />
    );
  };

  const renderDateText = () => {
    return (
      <Text style={styles.dateText}>
        {androidDateText ? moment(androidDateText).format("DD/MM/YYYY") : null}
      </Text>
    );
  };

  const renderCalenderImage = () => {
    return <View style={{ paddingLeft: 5 }}>{Images.svgs.calender}</View>;
  };

  return (
    <TouchableOpacity onPress={() => setOpen(true)} style={boxStyle}>
      {Platform.OS === "android" && renderDateText()}
      {Platform.OS === "android" && open ? onPressOpenDateSheet() : null}
      {Platform.OS === "ios" && onPressOpenDateSheet()}
      {renderCalenderImage()}
    </TouchableOpacity>
  );
};

export default DatePickerCustom;
