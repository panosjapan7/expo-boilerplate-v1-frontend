// ./components/modals/ModalAlertMobile.tsx
import { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { Colors } from "../../styles/colors";
import IconClose from "../icons/IconClose";
import IconCheckMark from "../icons/IconCheckMark";

type ModalAlertMobileType = {
  header: string;
  paragraph?: string;
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
  showModalScreenBackground?: boolean;
};

const ModalAlertMobile = ({
  header,
  paragraph,
  isModalVisible,
  setIsModalVisible,
  showModalScreenBackground = false,
}: ModalAlertMobileType) => {
  const { globalStyles, themeHeaderTextColor } = useGlobalStyles();
  const opacity = useRef(new Animated.Value(0)).current; // Initialize opacity animation value

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isModalVisible ? 1 : 0, // Fully visible or hidden
      duration: 150, // Duration of the fade effect
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [isModalVisible]);

  const handleClose = () => {
    Animated.timing(opacity, {
      toValue: 0, // Fade out before closing
      duration: 150,
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false)); // Close modal after animation
  };

  if (!isModalVisible) return null;

  return (
    <TouchableWithoutFeedback>
      <View style={globalStyles.modalScreenWrapper}>
        <Animated.View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalCloseIconContainer}>
            <Pressable onPress={handleClose}>
              <IconClose color={themeHeaderTextColor} size={20} />
            </Pressable>
          </View>
          <View style={globalStyles.modalContentContainer}>
            <View>
              <IconCheckMark color={Colors.success} size={25} />
            </View>
            <View>
              <Text style={globalStyles.modalHeader}>{header}</Text>
              <Text style={globalStyles.modalParagraph}>{paragraph}</Text>
            </View>
          </View>
        </Animated.View>

        {showModalScreenBackground ? (
          <View style={globalStyles.modalBackground}></View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ModalAlertMobile;
