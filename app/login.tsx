// ./app/login.tsx
import { Text, View } from "react-native";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Link href="/reset-password">
        <Text>Forgot password?</Text>
      </Link>
    </View>
  );
};

export default Login;
