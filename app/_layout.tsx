// ./app/_layout.tsx
import { Platform } from "react-native";

import RootLayoutMobile from "../components/layouts/RootLayoutMobile";
import RootLayoutWeb from "../components/layouts/RootLayoutWeb";

const App = () => {
  return (
    <>{Platform.OS === "web" ? <RootLayoutWeb /> : <RootLayoutMobile />}</>
  );
};

export default App;
