import React, {
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
} from "react";
import { View, Pressable } from "react-native";
import Modal from "react-native-modal";
import moment from "moment";

import { Colors } from "@theme";
import { Text } from "@common";
import { strings } from "@i18n";
import { DatePickerCustom } from "@components";

import styles from "./styles";

const FilterModal = forwardRef((props, ref) => {
  const defaultDate = new Date();
  const minimumDate = new Date();
  const minimumDateTwo = new Date(2020, 4, 25);

  const defaultDateCb = moment(defaultDate).format("YYYY-MM-DD");
  const minimumDateCb = moment(minimumDate).format("YYYY-MM-DD");

  const [isModalVisible, setModalVisible] = useState(false);
  const [params, setParams] = useState([]);
  const [onPress, setOnPress] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);
  const [startDateCb, setStartDateCb] = useState(defaultDateCb);
  const [endDateCb, setEndDateCb] = useState(minimumDateCb);

  const hide = () => {
    setModalVisible(false);
  };

  const close = useCallback(() => setModalVisible(false), []);

  let callback = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      show: (categoriesData, onDonePress) => {
        setParams(categoriesData);
        setTimeout(() => {
          setModalVisible(true);
        }, 0);
        setOnPress(() => onDonePress);
      },
      setCallback: (cb) => {
        callback.current = cb;
      },
      close,
    }),
    [close]
  );

  const onModalDropPress = () => {
    hide();
  };

  const onSaveFilter = () => {
    hide();
    // if (selectedCategories.length !== 0) {
      setTimeout(() => {
        onPress(selectedCategories, startDateCb, endDateCb);
      }, 300);
    // }
  };

  const onPressClearFilter = () => {
    setSelectedCategories([]);
    setStartDate(defaultDate);
    setStartDateCb(defaultDateCb);
    setEndDate(defaultDate);
    setEndDateCb(minimumDateCb);
    hide();
    setTimeout(() => {
      onPress(selectedCategories, null, null);
    }, 300);
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat.ID !== category.ID)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const onChangeStartDate = (startDate) => {
    const formattedDate = moment(startDate).format('YYYY-MM-DD');
    setStartDateCb(formattedDate);
    setStartDate(startDate);
  };
  const onChangeEndDate = (endDate) => {
    const formattedDate = moment(endDate).format('YYYY-MM-DD');
    setEndDateCb(formattedDate);
    setEndDate(endDate);
  };

  const RenderDash = () => {
    return <View style={styles.dash}></View>;
  };

  const RenderHeading = () => {
    return <Text style={styles.heading}>{strings("app.filter")}</Text>;
  };

  const RenderCategoriesHeading = () => {
    return <Text style={styles.catHeading}>{strings("app.categories")}</Text>;
  };

  const RenderCategories = () => {
    return (
      <View style={styles.container}>
        {params?.map((category) => {
          const isSelected = selectedCategories.some(
            (selectedCategory) => selectedCategory.ID === category.ID
          );
          return (
            <Pressable
              key={category.ID}
              onPress={() => toggleCategory(category)}
              style={[
                styles.categoryButton,
                {
                  backgroundColor: isSelected ? Colors.blue : Colors.background,
                },
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  {
                    color: isSelected ? Colors.background : Colors.lightText,
                  },
                ]}
              >
                {category.category_title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  const RenderCategoriesSection = () => {
    return (
      <View style={styles.catContainer}>
        {RenderCategoriesHeading()}
        {RenderCategories()}
      </View>
    );
  };

  const RenderStartDate = () => {
    return (
      <View style={styles.dateStyle}>
        <Text style={styles.dateText}>Start Date</Text>
        <DatePickerCustom
          value={startDate}
          onChange={onChangeStartDate}
          minDate={minimumDateTwo}
        />
      </View>
    );
  };

  const RenderEndDate = () => {
    return (
      <View style={styles.dateStyle}>
        <Text style={styles.dateText}>End Date</Text>
        <DatePickerCustom
          value={endDate}
          onChange={onChangeEndDate}
          minDate={startDate}
      
        />
      </View>
    );
  };

  const RenderDates = () => {
    return (
      <View style={styles.dateContainer}>
        {RenderStartDate()}
        {RenderEndDate()}
      </View>
    );
  };

  const RenderButtons = () => {
    return (
      <View style={styles.buttons}>
        <Pressable onPress={onPressClearFilter} style={styles.noButtonStyle}>
          <Text style={styles.noButtonText}>{strings("app.clear_filter")}</Text>
        </Pressable>
        <Pressable onPress={onSaveFilter} style={styles.yesButtonStyle}>
          <Text style={styles.yesButtonText}>{strings("app.save_filter")}</Text>
        </Pressable>
      </View>
    );
  };

  const RenderModal = () => {
    return (
      <View style={styles.modalContent}>
        {RenderDash()}
        {RenderHeading()}
        {RenderDates()}
        {RenderCategoriesSection()}
        {RenderButtons()}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      backdropColor={Colors.transparent}
      isVisible={isModalVisible}
      onBackButtonPress={onModalDropPress}
      onBackdropPress={onModalDropPress}
      statusBarTranslucent={true}
      style={styles.modal}
    >
      {RenderModal()}
    </Modal>
  );
});

export default FilterModal;
