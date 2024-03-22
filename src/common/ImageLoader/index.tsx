import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ViewStyle,
  ResizeMode,
} from "react-native";

import { Metrics, Colors } from "@theme";
import FastImage, { ImageStyle, Source } from "react-native-fast-image";

type ImageLoaderProps = {
  source: Source;
  style: ImageStyle;
  isShowLoading?: Boolean;
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
  resizeMode?: ResizeMode;
  size?: number | "small" | "large";
};

const ImageLoader = (props: ImageLoaderProps) => {
  const {
    style,
    source,
    children,
    containerStyle,
    resizeMode = "cover",
    isShowLoading = false,
    size = Metrics.ratio(24),
    ...rest
  } = props;
  const [loading, setLoading] = useState(true);

  return (
    <View
      style={[styles.container, loading && { opacity: 0.5 }, containerStyle]}
    >
      <FastImage
        source={source}
        style={[styles.Image, style]}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode={resizeMode}
        {...rest}
      >
        {children}
      </FastImage>
      {loading && (
        <ActivityIndicator
          size={size}
          style={styles.loading}
          color={Colors.TextSecondary}
        />
      )}
    </View>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    // width: 50,
    // height: 50,
    // borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    // width: 50,
    // height: 50,
    // borderRadius: 25,
    flex: 1,
    backgroundColor: "transparent",
  },
  loading: {
    position: "absolute",
  },
});
