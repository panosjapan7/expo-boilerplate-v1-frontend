// ./components/layouts/RootLayoutWeb.tsx
import { useState } from "react";
import { Slot } from "expo-router";

import "../../styles/css/globals.css";
import "../../styles/css/root-layout-web.css";
import DrawerMenu from "../navigation/DrawerMenu";
import NavBar from "../navigation/NavBar";

const RootLayoutWeb = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <DrawerMenu
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      {isDrawerOpen ? (
        <div
          className="overlay"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        ></div>
      ) : null}
      <NavBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Slot />
    </>
  );
};

export default RootLayoutWeb;
