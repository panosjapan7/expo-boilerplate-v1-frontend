// ./app/index.tsx
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable onPress={() => router.push("/login")}>
        <Text>Go to Login Screen</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/register")}>
        <Text>Go to Register Screen</Text>
      </Pressable>
    </View>
  );
};

export default Home;
