// ./app/(drawer)/(tabs)/feed.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../../../styles/stylesheets/globalStyles";

const Feed = () => {
  const { globalStyles } = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Feed Screen</Text>
    </View>
  );
};

export default Feed;
