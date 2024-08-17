// ./components/navigation/DrawerMenu.tsx
import { useContext } from "react";
import { router } from "expo-router";

import { AuthContext } from "../../contexts/AuthContext";
import { DrawerMenuType } from "../../types/types";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import "../../styles/css/drawer-menu.css";
import IconHome from "../icons/IconHome";
import IconLogin from "../icons/IconLogin";
import IconRegister from "../icons/IconRegister";
import IconFeed from "../icons/IconFeed";
import IconProfile from "../icons/IconProfile";
import IconSettings from "../icons/IconSettings";
import IconLogout from "../icons/IconLogout";

const DrawerMenu = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuType) => {
  const { themeBackgroundColor, themeHeaderTextColor } = useGlobalStyles();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    setIsDrawerOpen(!isDrawerOpen);
    setIsLoggedIn(false);
    router.replace("/");
  };

  return (
    <div
      className={`drawer-menu ${isDrawerOpen ? "open" : ""}`}
      style={{ backgroundColor: themeBackgroundColor }}
    >
      {isLoggedIn ? (
        <ul className="loggedInmenu">
          <li
            className="menu-item-container"
            // style={{
            //   padding: 10,
            //   borderRadius: 5,
            // }}
          >
            <IconFeed color={themeHeaderTextColor} size={17} />
            <a
              href="/feed"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/feed");
              }}
              style={{ color: themeHeaderTextColor }}
            >
              Feed
            </a>
          </li>
          <li
            className="menu-item-container"
            // style={{
            //   padding: 10,
            //   borderRadius: 5,
            // }}
          >
            <IconProfile color={themeHeaderTextColor} size={17} />
            <a
              href="/profile"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/profile");
              }}
              style={{ color: themeHeaderTextColor }}
            >
              Profile
            </a>
          </li>
          <li
            className="menu-item-container"
            // style={{
            //   padding: 10,
            //   borderRadius: 5,
            // }}
          >
            <IconSettings color={themeHeaderTextColor} size={17} />
            <a
              href="/settings"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/settings");
              }}
              style={{ color: themeHeaderTextColor }}
            >
              Settings
            </a>
          </li>
          <li className="menu-item-container" style={{ padding: 10 }}>
            <IconLogout color={themeHeaderTextColor} size={17} />
            <p
              className="logout"
              onClick={handleLogout}
              style={{ color: themeHeaderTextColor }}
            >
              Log out
            </p>
          </li>
        </ul>
      ) : (
        <ul className="loggedOutMenu">
          <li
            className="menu-item-container"
            style={{
              padding: 10,
              borderRadius: 5,
            }}
          >
            <IconHome color={themeHeaderTextColor} size={17} />
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/");
              }}
              style={{ color: themeHeaderTextColor }}
            >
              Home
            </a>
          </li>
          <li
            className="menu-item-container"
            style={{
              padding: 10,
              borderRadius: 5,
            }}
          >
            <IconLogin color={themeHeaderTextColor} size={19} />
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/login");
              }}
              style={{ color: themeHeaderTextColor }}
            >
              Log in
            </a>
          </li>
          <li
            className="menu-item-container"
            style={{
              padding: 10,
              borderRadius: 5,
            }}
          >
            <IconRegister color={themeHeaderTextColor} size={17} />
            <a
              href="/register"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/register");
              }}
              style={{ color: themeHeaderTextColor }}
            >
              Register
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DrawerMenu;
