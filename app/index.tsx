// ./app/index.tsx
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Home = () => {
  const { globalStyles } = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Home Screen</Text>
      <Pressable onPress={() => router.push("/login")}>
        <Text style={globalStyles.textRegular}>Go to Login Screen</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/register")}>
        <Text style={globalStyles.textRegular}>Go to Register Screen</Text>
      </Pressable>
    </View>
  );
};

export default Home;
