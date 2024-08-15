// ./components/navigation/NavBar.tsx
import { router } from "expo-router";

import { DrawerMenuType } from "../../types/types";
import "../../styles/css/globals.css";
import "../../styles/css/navbar.css";
import IconDrawer from "../icons/IconDrawer";

const NavBar = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuType) => {
  return (
    <nav className="navbar">
      <div className="navbarContents-container">
        <button
          className="icon-drawer"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {<IconDrawer size={28} />}
        </button>
        <a
          href="/"
          className="home-link"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          Home
        </a>
        <div className="login-register-container">
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
          >
            Login
          </a>
          <a
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              router.push("/register");
            }}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
