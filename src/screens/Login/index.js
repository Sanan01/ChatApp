import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Keyboard,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import { useForm } from "react-hook-form";
import KeyboardSpacer from "react-native-keyboard-spacer";

import { yupResolver } from "@hookform/resolvers/yup";
import { Colors, Images } from "@theme";
import { strings } from "@i18n";
import { TextInput, Button } from "@common";
import { ValidationUtil, NavigationService, Util } from "@utils";
import { useInputProps } from "@customHooks";
import { UserUtil } from "@dataUtils";
import { Loader, ThemeWrapper } from "@components";
import { USER_ACTION, AUTH_IDENTIFIER_LOGIN } from "@ActionTypes";

import styles from "./styles";

const statusBarColor = Colors.lightMode.background;

const Login = () => {
  /**
   * @function formObj
   * @memberof Login
   * @author Syed Amir Ali
   * @description set form hooks and submit form data to server and login user if success else show error message
   * */

  const formObj = useForm({
    resolver: yupResolver(ValidationUtil.login),
  });

  const scrollViewRef = useRef();
  const emailProps = useInputProps(formObj, "email");
  const passwordProps = useInputProps(formObj, "password");
  const [passwordEye, setPasswordEye] = useState(true);

  // let deviceid

  // useEffect(async () => {
  //   //  deviceid = await OneSignal.getDeviceState();
  //   //  deviceid = DeviceInfo.getUniqueIdSync();
  //   // OneSignal.login("123");
  // }, []);

  /**
   * @function onSubmit
   * @memberof Login
   * @author Syed Amir Ali
   * @description submit form data to server and login user if success else show error message
   * */

  const onSubmit = formObj.handleSubmit(async (values) => {
    Keyboard.dismiss();

    const requestData = {
      username: values.email,
      password: values.password,
    };

    console.log(requestData, "checking request data TWO");

    UserUtil.loginRequest(requestData, AUTH_IDENTIFIER_LOGIN, (response) => {
      NavigationService.navigate("Main");
    });
  });

  /**
   * @function onPressForgetPassword
   * @memberof Login
   * @author Syed Amir Ali
   * @description Function to navigate to ResetPassword screen
   * */

  const onPressForgetPassword = () => {
    NavigationService.navigate("ResetPassword");
  };

  /**
   * @function scrollToPosition
   * @memberof Login
   * @author Syed Amir Ali
   * @description Function to scroll the ScrollView to a specific position
   * */

  const scrollToPosition = (yPosition) => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: yPosition, animated: true });
      }, 500);
    }
  };

  /**
   * @memberof Login
   * @returns {JSX.Element}
   * @author Syed Amir Ali
   * @description Render UI Components
   * */

  const RenderLogo = () => {
    return <View style={styles.containerSvgStyle}>{Images.svgs.logo}</View>;
  };

  const RenderAuthTitle = () => {
    return (
      <Text style={styles.authTitleTextStyle}>
        {strings("app.enter_your_information_to_continue")}
      </Text>
    );
  };

  /**
   * @memberof Login
   * @function handleImageClick
   * @returns boolean
   * @author Sannan Baig
   * @description  The following two functions are use to toggle eyeslash image on password input field
   * */

  const handleImageClick = () => {
    setPasswordEye(!passwordEye);
  };

  const RenderRight = () => {
    return (
      <Pressable onPress={handleImageClick}>
        {!passwordEye ? Images.svgs.eyeopen : Images.svgs.eyeclose}
      </Pressable>
    );
  };

  const RenderInputFields = () => {
    return (
      <>
        <TextInput
          title={strings("app.email")}
          keyboardType="email-address"
          customPlaceholder={strings("app.email")}
          nextFocusRef={passwordProps.forwardRef}
          defaultValue={__DEV__ ? "amir@getmule.com" : ""}
          onFocus={() => {
            // Call scrollToPosition function with the desired Y position
            scrollToPosition(300); // Adjust this value as needed
          }}
          {...emailProps}
        />

        <TextInput
          title={strings("app.password")}
          secureTextEntry={passwordEye}
          customPlaceholder={strings("app.password")}
          onSubmit={onSubmit}
          defaultValue={__DEV__ ? "Wicker123$" : ""}
          renderRight={RenderRight}
          onFocus={() => {
            // Call scrollToPosition function with the desired Y position
            scrollToPosition(300); // Adjust this value as needed
          }}
          {...passwordProps}
        />
      </>
    );
  };

  const RenderForgetPassword = () => {
    return (
      <View style={styles.fpStyling}>
        <Text
          onPress={onPressForgetPassword}
          style={styles.forgotPasswordTextStyle}
        >
          {strings("app.request_reset_password?")}
        </Text>
      </View>
    );
  };

  const RenderButton = () => {
    return (
      <Button
        title={strings("app.login")}
        onPress={onSubmit}
        style={styles.buttonStyles}
      />
    );
  };

  const renderLoader = () => (
    <Loader type={`${USER_ACTION}_${AUTH_IDENTIFIER_LOGIN}`} />
  );

  return (
    <ThemeWrapper>
      <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
      {/* <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
      > */}
      {/* {RenderLogo()}
        {RenderAuthTitle()} */}
      {RenderInputFields()}
      {/* {RenderForgetPassword()} */}
      {/* {renderLoader()} */}
      {/* </ScrollView> */}
      {RenderButton()}
      {Util.isPlatformIOS() && <KeyboardSpacer topSpacing={-30} />}
    </ThemeWrapper>
  );
};

export default Login;