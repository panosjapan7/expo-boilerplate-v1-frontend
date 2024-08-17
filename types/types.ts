// ./types/types.ts
import { ReactNode } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
export type AuthProviderType = {
  children: ReactNode;
};

export type ButtonType = {
  color?: string;
  size?: number;
  style?: object;
};

export type DrawerMenuType = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
};

export type IconType = {
  color?: string;
  size?: number;
  style?: object;
};

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};
