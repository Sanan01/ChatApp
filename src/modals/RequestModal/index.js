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

import styles from "./styles";
import { NavigationService } from "@utils";

const RequestModal = forwardRef((props, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [onPress, setOnPress] = useState(null);

  const hide = () => {
    setModalVisible(false);
  };

  const close = useCallback(() => setModalVisible(false), []);

  let callback = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      show: (onDonePress) => {
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

  const onBackToHome = () => {
    hide();
    setTimeout(() => {
      NavigationService.goBack();
    }, 1000);
  };

  const RenderImage = () => {
    return <View style={styles.circle}>{Images.svgs.tick}</View>;
  };

  const RenderText = () => {
    return (
      <>
        <Text style={styles.heading}>{strings("app.request_sent")}</Text>
        <Text style={styles.description}>{strings("app.check_email")}</Text>
      </>
    );
  };

  const RenderButtons = () => {
    return (
      <>
        <Pressable onPress={onBackToHome} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>{strings("app.done")}</Text>
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

export default RequestModal;
