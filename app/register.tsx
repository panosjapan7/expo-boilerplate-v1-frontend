// ./app/register.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Register = () => {
  const { globalStyles } = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Register Screen</Text>
    </View>
  );
};

export default Register;
