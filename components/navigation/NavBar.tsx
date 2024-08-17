// ./components/navigation/NavBar.tsx
import { useContext } from "react";
import { router } from "expo-router";

import { AuthContext } from "../../contexts/AuthContext";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { DrawerMenuType } from "../../types/types";
import "../../styles/css/globals.css";
import "../../styles/css/navbar.css";
import ButtonTheme from "../buttons/ButtonTheme";
import IconDrawer from "../icons/IconDrawer";

const NavBar = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuType) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { themeBackgroundColor, themeHeaderTextColor } = useGlobalStyles();

  return (
    <nav className="navbar" style={{ backgroundColor: themeBackgroundColor }}>
      {!isLoggedIn ? (
        <div className="navbarContents-container">
          <button
            className="icon-drawer"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {<IconDrawer size={28} color={themeHeaderTextColor} />}
          </button>
          <a
            href="/"
            className="home-link"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            style={{ color: themeHeaderTextColor }}
          >
            Home
          </a>

          <div className="buttonTheme-login-register-container">
            <ButtonTheme color={themeHeaderTextColor} size={18} />

            <div className="login-register-container">
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/login");
                }}
                style={{ color: themeHeaderTextColor }}
              >
                Login
              </a>
              <a
                href="/register"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/register");
                }}
                style={{ color: themeHeaderTextColor }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbarContents-container">
          <div className="iconDrawer-tabLinks-container">
            <button
              className="icon-drawer-loggedIn"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              {<IconDrawer size={28} color={themeHeaderTextColor} />}
            </button>
            <div className="tabLinks-container">
              <li>
                <a
                  href="/feed"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/feed");
                  }}
                  style={{ color: themeHeaderTextColor }}
                >
                  Feed
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/profile");
                  }}
                  style={{ color: themeHeaderTextColor }}
                >
                  Profile
                </a>
              </li>
            </div>
          </div>

          <ButtonTheme color={themeHeaderTextColor} size={18} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
