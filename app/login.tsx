// ./app/login.tsx
import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";

const Login = () => {
  const handleLogin = () => {
    router.replace("/(drawer)/(tabs)/feed");
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Pressable onPress={handleLogin}>
        <Text>Log in</Text>
      </Pressable>
      <Link href="/reset-password">
        <Text>Forgot password?</Text>
      </Link>
    </View>
  );
};

export default Login;
