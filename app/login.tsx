// ./app/login.tsx
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default Login;
