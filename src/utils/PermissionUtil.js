import { check, PERMISSIONS, RESULTS, request } from "react-native-permissions";
import { Platform, Alert, Linking } from "react-native";

import { strings } from "@i18n";
import { Util } from "@utils";

class PermissionUtil {
  // Define permission types
  static types = {
    GALLERY: Platform.select({
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
      android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    }),
    CAMERA: Platform.select({
      ios: PERMISSIONS.IOS.CAMERA,
      android: PERMISSIONS.ANDROID.CAMERA,
    }),
  };

  // Check permission for the given type
  static checkPermission = (type, callback) => {
    const permission = PermissionUtil.types[type];

    check(permission)
      .then((result) => {
        console.log("Permission check result:", result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            PermissionUtil.showAlert(
              strings("permissions.feature_unavailable")
            );
            break;
          case RESULTS.GRANTED:
            callback();
            break;
          case RESULTS.DENIED:
            request(permission).then((resultPermissions) => {
              if (resultPermissions === RESULTS.GRANTED) {
                callback();
              }
            });
            break;
          case RESULTS.LIMITED:
          case RESULTS.BLOCKED:
            PermissionUtil.openSettingModal(type);
            break;
          default:
            PermissionUtil.showAlert(
              strings("permissions.feature_unavailable")
            );
        }
      })
      .catch((error) => {
        console.error("Error checking permission:", error);
        PermissionUtil.showAlert(strings("permissions.feature_unavailable"));
      });
  };

  // Show alert message
  static showAlert(message) {
    Util.showMessage(message, "danger", 5000);
  }

  // Get permission title and description for the given type
  static getPermissionTitleAndDescription = (type) => {
    const os = Platform.OS;
    const title = strings(`permissions.title_${type}_${os}`);
    const description = strings(`permissions.description_${type}_${os}`);
    return { title, description };
  };

  // Open settings modal for the given type
  static openSettingModal = (type) => {
    const { title, description } =
      PermissionUtil.getPermissionTitleAndDescription(type);
    Alert.alert(
      title,
      description,
      [
        { text: strings("permissions.cancel"), style: "cancel" },
        {
          text: strings("permissions.open_settings"),
          onPress: () => Linking.openSettings(),
        },
      ],
      { cancelable: false }
    );
  };
}

export default PermissionUtil;
