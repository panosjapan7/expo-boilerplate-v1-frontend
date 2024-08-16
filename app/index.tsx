// ./app/index.tsx
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text style={{ fontFamily: "Inter_300Light" }}>Inter Light</Text>
      <Text style={{ fontFamily: "Inter_900Black" }}>Inter Black</Text>
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
