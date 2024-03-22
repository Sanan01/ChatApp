import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Images } from "@theme";
import { strings } from "@i18n";
import { NavigationService } from "@utils";
import { ImageLoader } from "@common";

import styles from "./styles";

const Header = ({ title }) => {
  const { bell, arrowleft } = Images.svgs;
  const pData = useSelector((state) => state.profileInfo.data);
  const notificationCount = useSelector((state) => state.notifications.notificationCount);

  /**
   * @memberof Header
   * @function onPressGoBack
   * @author Sanan Baig
   * @description Navigates to the previous page
   * */

  const onPressGoBack = () => {
    return NavigationService.goBack();
  };

  /**
   * @memberof Header
   * @function onPressGoBack
   * @author Sanan Baig
   * @description Navigates to notifications Page
   * */

  const onPressNotifications = () => {
    return NavigationService.navigate("Notification");
  };

  /**
   * @memberof Header
   * @author Sanan Baig
   * @description Renders UI
   * */

  const RenderBellButton = () => {
    return (
      <TouchableOpacity onPress={onPressNotifications}>
        <View style={styles.circle}>{bell}</View>
        <View style={styles.counterStyle}>
          <Text style={styles.countTextStyle}>{notificationCount > 0 ? notificationCount : null}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderTreatmentHeader = () => {
    return (
      <View style={styles.treatmentContainer}>
        <TouchableOpacity onPress={onPressGoBack}>{arrowleft}</TouchableOpacity>
        <Text style={styles.treatmentText}>
          {strings("app.treatment_details")}
        </Text>
      </View>
    );
  };

  const RenderResetHeader = () => {
    return (
      <View style={styles.treatmentContainer}>
        <TouchableOpacity onPress={onPressGoBack}>{arrowleft}</TouchableOpacity>
        <Text style={styles.treatmentText}>
          {strings("app.request_reset_password")}
        </Text>
      </View>
    );
  };

  const RenderNotificationHeader = () => {
    return (
      <View style={styles.notificationContainer}>
        <View style={styles.text_back}>
          <TouchableOpacity onPress={onPressGoBack}>
            {arrowleft}
          </TouchableOpacity>
          <Text style={styles.treatmentText}>
            {strings("app.notifications")}
          </Text>
        </View>
      </View>
    );
  };

  const onPressNavigate = () => {
    NavigationService.navigate("Profile");
  };

  const RenderPictureAndGreetings = () => {
    return (
      <View style={styles.picAndGreetingStyles}>
        <TouchableOpacity style={styles.profile} onPress={onPressNavigate}>
          <ImageLoader
            style={styles.pfpStyle}
            resizeMode="cover"
            size="small"
            source={{
              uri: pData.profile_image,
            }}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>{strings("app.good_morning")}</Text>
          <Text style={styles.username}>{pData.username}</Text>
        </View>
      </View>
    );
  };

  const RenderScreenHeader = () => {
    return (
      <View style={styles.container}>
        {RenderPictureAndGreetings()}
        <View style={styles.buttons}>{RenderBellButton()}</View>
      </View>
    );
  };

  return (
    <>
      {title === "Screen" && RenderScreenHeader()}
      {title === "Treatment" && RenderTreatmentHeader()}
      {title === "Reset" && RenderResetHeader()}
      {title === "Notification" && RenderNotificationHeader()}
    </>
  );
};

export default Header;
