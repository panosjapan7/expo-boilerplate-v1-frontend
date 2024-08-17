// ./app/_layout.tsx
import { Platform } from "react-native";

import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import RootLayoutMobile from "../components/layouts/RootLayoutMobile";
import RootLayoutWeb from "../components/layouts/RootLayoutWeb";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        {Platform.OS === "web" ? <RootLayoutWeb /> : <RootLayoutMobile />}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
