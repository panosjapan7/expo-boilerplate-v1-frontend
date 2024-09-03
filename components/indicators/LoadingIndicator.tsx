// ./components/indicators/LoadingIndicator.tsx
import { ActivityIndicator, Platform, View } from "react-native";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";

const LoadingIndicator = () => {
  const { globalStyles, themeHeaderTextColor } = useGlobalStyles();

  return (
    <>
      {Platform.OS == "web" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            height: "100vh",
          }}
        >
          <ActivityIndicator size={"large"} color={themeHeaderTextColor} />
        </div>
      ) : (
        <View style={globalStyles.container}>
          <ActivityIndicator size={"large"} color={themeHeaderTextColor} />
        </View>
      )}
    </>
  );
};

export default LoadingIndicator;
