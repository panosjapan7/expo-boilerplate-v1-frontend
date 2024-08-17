// ./app/(drawer)/settings.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";

const Settings = () => {
  const { globalStyles } = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Settings Screen</Text>
    </View>
  );
};

export default Settings;
