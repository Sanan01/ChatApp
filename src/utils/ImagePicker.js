import { Platform, Alert, ActionSheetIOS } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImageCropPicker from "react-native-image-crop-picker";
import { PermissionUtil, Util } from "@utils";
import { strings } from "@i18n";

class ImagePicker {
  defaultCompressImageSize = 720;
  defaultCompressImageQuality = 0.8;
  mimeTypes = {
    JPG: Platform.OS === "ios" ? "image/jpg" : "image/jpeg",
    PNG: "image/png",
    GIF: "image/gif",
  };

  defaultGalleryOptions = {
    mediaType: "photo",
    quality: this.defaultCompressImageQuality,
    maxWidth: this.defaultCompressImageSize,
    maxHeight: this.defaultCompressImageSize,
    selectionLimit: 1,
    includeExtra: false,
    cropping: false,
    croppingOptions: {},
  };

  defaultCameraOptions = {
    mediaType: "photo",
    cameraType: "back",
    quality: this.defaultCompressImageQuality,
    maxWidth: this.defaultCompressImageSize,
    maxHeight: this.defaultCompressImageSize,
    cropping: false,
    croppingOptions: {},
  };

  showAlert(message) {
    Util.showMessage(message, "danger", 5000);
  }

  async pickImageFromGallery(callback, options = {}) {
    const galleryOptions = { ...this.defaultGalleryOptions, ...options };
    if (galleryOptions.includeExtra) {
      PermissionUtil.checkPermission(PermissionUtil.types.GALLERY, () => {
        this.launchGallery(galleryOptions, callback);
      });
    } else {
      this.launchGallery(galleryOptions, callback);
    }
  }

  async captureImageCamera(callback, options = {}) {
    if (Platform.OS === "android") {
      const cameraOptions = { ...this.defaultCameraOptions, ...options };
      const result = await launchCamera(cameraOptions);
      if (result.assets) {
        const imageSelected = result.assets[0];
        if (cameraOptions.cropping) {
          this.cropImage(
            imageSelected,
            cameraOptions.croppingOptions,
            callback
          );
        } else {
          callback?.(imageSelected);
        }
      }
    }
    if (Platform.OS === "ios") {
      PermissionUtil.checkPermission(PermissionUtil.types.CAMERA, async () => {
        const cameraOptions = { ...this.defaultCameraOptions, ...options };
        const result = await launchCamera(cameraOptions);
        if (result.assets) {
          const imageSelected = result.assets[0];
          if (cameraOptions.cropping) {
            this.cropImage(
              imageSelected,
              cameraOptions.croppingOptions,
              callback
            );
          } else {
            callback?.(imageSelected);
          }
        }
      });
    }
  }

  async showGalleryAndCameraOptions(callback, options = {}) {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [
            strings("imagePicker.cancel"),
            strings("imagePicker.take_photo_camera"),
            strings("imagePicker.select_photo_gallery"),
          ],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            this.captureImageCamera(callback, options);
          } else if (buttonIndex === 2) {
            this.pickImageFromGallery(callback, options);
          }
        }
      );
    } else {
      Alert.alert(strings("imagePicker.select_option"), "", [
        {
          text: strings("imagePicker.take_photo_camera"),
          onPress: () => {
            this.captureImageCamera(callback, options);
          },
        },
        {
          text: strings("imagePicker.select_photo_gallery"),
          onPress: () => {
            this.pickImageFromGallery(callback, options);
          },
        },
        {
          text: strings("imagePicker.cancel"),
          onPress: () => {},
        },
      ]);
    }
  }

  async launchGallery(galleryOptions, callback) {
    const result = await launchImageLibrary(galleryOptions);
    if (result.assets) {
      const imagesSelected = result.assets;
      const { mimeTypesAllowed } = galleryOptions;
      if (mimeTypesAllowed && mimeTypesAllowed.length > 0) {
        let containInvalidImage = false;
        imagesSelected.forEach((imageItem) => {
          if (!mimeTypesAllowed.includes(imageItem.type)) {
            containInvalidImage = true;
          }
        });
        if (containInvalidImage) {
          this.showAlert(
            strings("imagePicker.image_extension_allowed", {
              key: "mimeTypes",
              value: mimeTypesAllowed.join(","),
            })
          );
          return;
        }
      }
      if (galleryOptions.selectionLimit === 1) {
        const imageSelected = imagesSelected[0];
        if (galleryOptions.cropping) {
          this.cropImage(
            imageSelected,
            galleryOptions.croppingOptions,
            callback
          );
        } else {
          callback?.(imageSelected);
        }
      } else {
        callback?.(imagesSelected);
      }
    }
  }

  cropImage(image, croppingOptions, callback) {
    setTimeout(
      () => {
        ImageCropPicker.openCropper({
          path: image.uri,
          ...croppingOptions,
        })
          .then((cropped) => {
            const imageObj = this.getImageObjectFromCropImage(cropped);
            callback?.(imageObj);
          })
          .catch((error) => {
            callback?.(image);
          });
      },
      Platform.OS === "ios" ? 500 : 0
    );
  }

  getImageObjectFromCropImage(cropImage) {
    const uri = `file://${cropImage?.path ?? ""}`;
    const fileName = uri.replace(/^.*[\\\/]/, "");
    const extension = fileName.substr(fileName.lastIndexOf(".") + 1);
    return {
      fileSize: cropImage?.size ?? 0,
      height: cropImage?.height ?? 0,
      width: cropImage?.width ?? 0,
      uri: uri,
      type: `image/${extension}`,
      fileName: fileName,
    };
  }
}

export default new ImagePicker();
