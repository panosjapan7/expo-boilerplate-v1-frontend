// ./app/login.tsx
import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";

import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Login = () => {
  const { globalStyles } = useGlobalStyles();

  const handleLogin = () => {
    router.replace("/(drawer)/(tabs)/feed");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Login Screen</Text>
      <Pressable onPress={handleLogin}>
        <Text style={globalStyles.textRegular}>Log in</Text>
      </Pressable>
      <Link href="/reset-password">
        <Text style={globalStyles.textRegular}>Forgot password?</Text>
      </Link>
    </View>
  );
};

export default Login;
