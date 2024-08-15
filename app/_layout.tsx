// ./app/_layout.tsx
import { Platform } from "react-native";

import { AuthProvider } from "../contexts/AuthContext";
import RootLayoutMobile from "../components/layouts/RootLayoutMobile";
import RootLayoutWeb from "../components/layouts/RootLayoutWeb";

const App = () => {
  return (
    <AuthProvider>
      {Platform.OS === "web" ? <RootLayoutWeb /> : <RootLayoutMobile />}
    </AuthProvider>
  );
};

export default App;
