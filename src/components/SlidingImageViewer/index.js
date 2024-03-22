import React, { memo, useRef, useState, useCallback, useEffect } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import { Colors, Metrics } from "@theme";

import styles from "./styles";

const SlidingImageViewer = (props) => {
  const { imagesArray } = props;

  console.log("Pics>>>>>> THREE", imagesArray);

  const mainRef = useRef(null);
  const ref = useRef(null);

  const [images, setImage] = useState(imagesArray);
  const [activeIndex, setActiveIndex] = useState(0);

  const keyExtractor = (item, index) => `${index}`;

  /**
   * @memberof SlidingImageViewer
   * @function handlePageChange
   * @author Sanan Baig
   * @description sets the active index of the dot with is on the pictures
   * */

  const handlePageChange = (index) => {
    setActiveIndex(index);
  };

  /**
   * @memberof SlidingImageViewer
   * @function onViewableItemsChanged
   * @author Sanan Baig
   * @description Called when the viewability of rows changes
   * */

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }) => {
      if (ref.current) {
        ref.current.scrollToIndex({
          index: viewableItems[0]?.index,
          viewOffset: Metrics.scale(25),
          animated: true,
        });
      }
    },
    [ref.current]
  );

  useEffect(() => {
    setTimeout(() => {
      scrollToStart();
    }, 100);
  }, [imagesArray]); // Trigger the scroll when imagesArray changes

  const RenderLargeImage = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item }}
          style={styles.largeImageStyle}
          resizeMode="cover"
        />
      </View>
    );
  };

  const RenderDots = () => {
    try {
      return (
        <View style={styles.dotsContainer}>
          {imagesArray.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      );
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // Function to scroll to the first item when the component renders
  const scrollToStart = () => {
    setActiveIndex(0);
    if (ref.current) {
      ref.current.scrollToIndex({ index: 0, animated: false });
    }
  };

  /**
   * @memberof SlidingImageViewer
   * @function RenderLargeFlatlist
   * @author Sanan Baig
   * @description Renders pictures using flatlist with paging and dots which changes
   *               when the x-axis of a pictures changes more than its width size
   * */

  const RenderImageSlides = () => {
    return (
      <FlatList
        ref={mainRef}
        horizontal
        pagingEnabled
        data={imagesArray}
        initialNumToRender={5}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Metrics.screenWidth}
        keyExtractor={keyExtractor}
        snapToAlignment="center"
        decelerationRate="fast"
        renderItem={RenderLargeImage}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.round(offset / Dimensions.get("window").width);
          handlePageChange(index);
        }}
      />
    );
  };

  const RenderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="small" color={Colors.primaryButtonColor} />
      </View>
    );
  };

  const RenderLargeFlatlist = () => {
    return (
      <View>
        {RenderImageSlides()}
        {RenderDots()}
        {imagesArray.length > 0 ? null : RenderLoader()}
      </View>
    );
  };

  return <>{RenderLargeFlatlist()}</>;
};

export default memo(SlidingImageViewer);
