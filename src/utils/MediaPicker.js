import ImagePicker from "react-native-image-crop-picker";
import { Alert, Platform, Linking } from "react-native";
import { RESULTS, check, request, PERMISSIONS } from "react-native-permissions";
import { PICKER_TYPE, IMAGE_COMPRESS_MAX_WIDTH } from "@Constants";

class MediaPicker {
  static CAMERA_PERMISSION =
    Platform.OS === "android"
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA;

  static GALLERY_PERMISSION =
    Platform.OS === "android"
      ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      : PERMISSIONS.IOS.PHOTO_LIBRARY;

  static IMAGE_PICKER_OPTIONS = {
    includeExif: false,
    includeBase64: false,
    mediaType: "photo",
    useFrontCamera: false,
    compressImageMaxWidth: IMAGE_COMPRESS_MAX_WIDTH,
    compressImageMaxHeight: IMAGE_COMPRESS_MAX_WIDTH,
    compressImageQuality: 0.5,
    width: IMAGE_COMPRESS_MAX_WIDTH,
    height: IMAGE_COMPRESS_MAX_WIDTH,
    cropping: false,
    cropperCircleOverlay: false,
    enableRotationGesture: false,
    freeStyleCropEnabled: true,
  };

  showImagePicker(callback, pickerTypeGallery, pickerTypeCamera) {
    this.checkPermission(() => {
      Alert.alert("Select Image", null, [
        { text: "Camera", onPress: () => this.pickCameraOptions(callback) },
        { text: "Gallery", onPress: () => this.pickGalleryOptions(callback) },
        { text: "Cancel", onPress: () => console.log("Cancel") },
      ]);
    });
  }

  pickCameraOptions(callback) {
    this.checkPermission(() => {
      ImagePicker.openCamera(this.IMAGE_PICKER_OPTIONS)
        .then((image) => this.handleImagePicked(image, callback))
        .catch((error) => this.handleError(error));
    });
  }

  pickGalleryOptions(callback) {
    this.checkPermission(() => {
      ImagePicker.openPicker(this.IMAGE_PICKER_OPTIONS)
        .then((image) => this.handleImagePicked(image, callback))
        .catch((error) => this.handleError(error));
    });
  }

  handleImagePicked(image, callback) {
    let path = this.getImageUriFromData(
      this.IMAGE_PICKER_OPTIONS.includeBase64,
      image
    );
    const imageData = { ...image, path };
    callback && callback(imageData);
  }

  getImageUriFromData(includeBase64, image) {
    return includeBase64
      ? `data:${image.mime};base64,` + image.data
      : image.path;
  }

  handleError(error) {
    if (error.code && error.code === "E_PICKER_CANCELLED") return;
    let errorMsg = error.message ? error.message : error;
    Alert.alert("Error", errorMsg);
  }

  openSettingModal() {
    Alert.alert(
      "Permission required",
      "Need permissions to access gallery and camera",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: () => Linking.openSettings() },
      ],
      { cancelable: false }
    );
  }

  handlePermissions(triggerFunc) {
    request(this.CAMERA_PERMISSION)
      .then((cameraPermission) => {
        return cameraPermission;
      })
      .then((cameraPermission) => {
        request(this.GALLERY_PERMISSION).then((photoPermission) => {
          if (
            cameraPermission === RESULTS.GRANTED &&
            photoPermission === RESULTS.GRANTED
          ) {
            triggerFunc();
          }
        });
      });
  }

  checkPermission(triggerFunc) {
    Promise.all([
      check(this.CAMERA_PERMISSION),
      check(this.GALLERY_PERMISSION),
    ]).then(([cameraStatus, photoStatus]) => {
      if (cameraStatus === RESULTS.BLOCKED || photoStatus === RESULTS.BLOCKED) {
        this.openSettingModal();
      } else {
        this.handlePermissions(triggerFunc);
      }
    });
  }
}

export default new MediaPicker();
