// ./components/navigation/DrawerMenu.tsx
import { useContext } from "react";
import { router } from "expo-router";

import { AuthContext } from "../../contexts/AuthContext";
import { DrawerMenuType } from "../../types/types";
import "../../styles/css/drawer-menu.css";
import IconHome from "../icons/IconHome";
import IconLogin from "../icons/IconLogin";
import IconRegister from "../icons/IconRegister";
import IconFeed from "../icons/IconFeed";
import IconProfile from "../icons/IconProfile";
import IconSettings from "../icons/IconSettings";
import IconLogout from "../icons/IconLogout";

const DrawerMenu = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuType) => {
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
      style={{ backgroundColor: "white" }}
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
            <IconFeed size={17} />
            <a
              href="/feed"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/feed");
              }}
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
            <IconProfile size={17} />
            <a
              href="/profile"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/profile");
              }}
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
            <IconSettings size={17} />
            <a
              href="/settings"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/settings");
              }}
            >
              Settings
            </a>
          </li>
          <li className="menu-item-container" style={{ padding: 10 }}>
            <IconLogout size={17} />
            <p className="logout" onClick={handleLogout}>
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
            <IconHome size={17} />
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/");
              }}
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
            <IconLogin size={19} />
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/login");
              }}
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
            <IconRegister size={17} />
            <a
              href="/register"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(!isDrawerOpen);
                router.push("/register");
              }}
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
