import React from "react";
import { Text, FlatList } from "react-native";

import styles from "./styles";

const KeywordComponent = ({ SpecialWords }) => {
  /**
   * @memberof KeywordComponent
   * @function renderItem
   * @author Sanan Baig
   * @description Renders keywords in the description of Videos
   * */

  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <FlatList
      data={SpecialWords}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal={false}
      numColumns={4}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default KeywordComponent;
