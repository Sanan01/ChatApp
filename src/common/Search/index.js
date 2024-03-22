import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors, Images } from "@theme";

const SearchBar = ({ onSearch, search, setSearch, setCurrentPage }) => {
  console.log("search ONE", search);
  console.log("onSearch ONE", onSearch);
  const [searchQuery, setSearchQuery] = useState(`${search}`);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    onSearch("");
    setSearch("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const RenderSearchBar = () => {
    return (
      <View style={styles.search}>
        {Images.svgs.glass}
        <TextInput
          style={styles.placeholderStyles}
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search"
          onEndEditing={handleSearch}
          placeholderTextColor={Colors.lightModeTextInput.borderColor}
        />
        {searchQuery !== "" && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            {Images.svgs.clear}
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return <>{RenderSearchBar()}</>;
};

export default SearchBar;
