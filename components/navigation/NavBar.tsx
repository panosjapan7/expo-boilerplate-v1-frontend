// ./client/components/navigation/NavBar.tsx
import { router } from "expo-router";
import "../../styles/css/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContents-container">
        <a
          href="/"
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
