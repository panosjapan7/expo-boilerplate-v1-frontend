// ./components/navigation/NavBar.tsx
import { useContext } from "react";
import { router } from "expo-router";

import { AuthContext } from "../../contexts/AuthContext";
import { DrawerMenuType } from "../../types/types";
import "../../styles/css/globals.css";
import "../../styles/css/navbar.css";
import IconDrawer from "../icons/IconDrawer";

const NavBar = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuType) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {!isLoggedIn ? (
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
      ) : (
        <div className="navbarContents-container">
          <div className="iconDrawer-tabLinks-container">
            <button
              className="icon-drawer-loggedIn"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              {<IconDrawer size={28} />}
            </button>
            <div className="tabLinks-container">
              <li>
                <a
                  href="/feed"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/feed");
                  }}
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
                >
                  Profile
                </a>
              </li>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
