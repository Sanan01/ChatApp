import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

import { View, StatusBar, Image, ImageBackground, ActivityIndicator } from "react-native";
import { getRequestFlag } from "@duckRequestFlags";
import { Colors, Images } from "@theme";
import styles from "./styles";

const Loader = ({ type, showSpinner }) => {
  const requestFlags = useSelector(getRequestFlag(type));
  const loading = requestFlags.loading || false;

  return loading ? (
    <View>
      <StatusBar networkActivityIndicatorVisible={loading} />
      <Modal
        style={styles.modal}
        backdropOpacity={0.4}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={loading}
        backdropColor={Colors.white}
      >
        <View style={styles.container}>
          {showSpinner && (
            <ActivityIndicator animating size="large" color={Colors.primaryButtonColor} />
          )}
        </View>
      </Modal>
    </View>
  ) : null;
};

Loader.propTypes = {
  requestFlags: PropTypes.object,
  showSpinner: PropTypes.bool,
};

Loader.defaultProps = { requestFlags: {}, showSpinner: true };

export default React.memo(Loader);