import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const CustomCheckbox = (onChange) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      // onChange(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
      <View style={styles.checkbox}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
