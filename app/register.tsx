// ./app/register.tsx
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Register = () => {
  return (
    <View>
      <Text>Register Screen</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default Register;
