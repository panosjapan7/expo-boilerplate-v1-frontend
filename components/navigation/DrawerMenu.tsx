// ./components/navigation/DrawerMenu.tsx
import { router } from "expo-router";

import { DrawerMenuType } from "../../types/types";
import "../../styles/css/drawer-menu.css";
import IconHome from "../icons/IconHome";
import IconLogin from "../icons/IconLogin";
import IconRegister from "../icons/IconRegister";

const DrawerMenu = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuType) => {
  return (
    <div
      className={`drawer-menu ${isDrawerOpen ? "open" : ""}`}
      style={{ backgroundColor: "white" }}
    >
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
    </div>
  );
};

export default DrawerMenu;
