import React, {
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
} from "react";
import { View, Pressable } from "react-native";

import Modal from "react-native-modal";

import { Images } from "@theme";
import { Text } from "@common";
import { strings } from "@i18n";
import { NavigationService } from "@utils";

import styles from "./styles";

const ButtonSuccesModal = forwardRef((props, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [onYes, setYesPress] = useState(null);

  const hide = () => {
    setModalVisible(false);
  };

  const close = useCallback(() => setModalVisible(false), []);

  let callback = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      show: (onYesPress) => {
        setTimeout(() => {
          setModalVisible(true);
        }, 0);
        setYesPress(() => onYesPress);
      },
      setCallback: (cb) => {
        callback.current = cb;
      },

      close,
    }),
    [close]
  );

  const onBackToHome = () => {
    hide();

    setTimeout(() => {
      // onPress();
    }, 300);
  };

  const onPressYes = () => {
    hide();
    onYes();
  };

  const RenderImage = () => {
    return <View style={styles.circle}>{Images.svgs.out}</View>;
  };

  const RenderText = () => {
    return (
      <>
        <Text style={styles.heading}>{strings("app.logout")}</Text>
        <Text style={styles.description}>{strings("app.are_you_sure")}</Text>
      </>
    );
  };

  const RenderButtons = () => {
    return (
      <>
        <Pressable onPress={onPressYes} style={styles.yesButtonStyle}>
          <Text style={styles.yesButtonText}>{strings("app.yes")}</Text>
        </Pressable>
        <Pressable onPress={onBackToHome} style={styles.noButtonStyle}>
          <Text style={styles.noButtonText}>{strings("app.no")}</Text>
        </Pressable>
      </>
    );
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={isModalVisible}
      onBackButtonPress={onBackToHome}
      onBackdropPress={onBackToHome}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {RenderImage()}
          {RenderText()}
          {RenderButtons()}
        </View>
      </View>
    </Modal>
  );
});

export default ButtonSuccesModal;
