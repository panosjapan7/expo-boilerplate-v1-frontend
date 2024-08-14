// ./components/layouts/RootLayoutWeb.tsx
import { Slot } from "expo-router";
import NavBar from "../navigation/NavBar";

const RootLayoutWeb = () => {
  return (
    <>
      <NavBar />
      <Slot />
    </>
  );
};

export default RootLayoutWeb;
