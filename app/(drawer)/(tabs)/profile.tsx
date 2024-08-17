// ./app/(drawer)/(tabs)/profile.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../../../styles/stylesheets/globalStyles";

const Profile = () => {
  const { globalStyles } = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
