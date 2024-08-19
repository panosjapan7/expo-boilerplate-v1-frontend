// ./components/inputs/InputLabelMobile.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { Colors } from "../../styles/colors";

type InputLabelMobileType = {
  caption: string;
  errorMessage?: string;
};

const InputLabelMobile: React.FC<InputLabelMobileType> = ({
  caption,
  errorMessage,
}) => {
  const { globalStyles, themeHeaderTextColor } = useGlobalStyles();

  return (
    <>
      <View style={globalStyles.inputErrorMessageContainer}>
        <Text style={globalStyles.errorMessageTextContainer}>
          <Text
            style={{
              color: errorMessage ? Colors.danger : themeHeaderTextColor,
            }}
          >
            {caption}
          </Text>
          {errorMessage ? (
            <Text
              style={{
                color: errorMessage ? Colors.danger : themeHeaderTextColor,
              }}
            >
              {errorMessage}
            </Text>
          ) : null}
        </Text>
      </View>
    </>
  );
};

export default InputLabelMobile;
