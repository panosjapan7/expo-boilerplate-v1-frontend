// ./types/types.ts
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

export type StatusType = "error" | "idle" | "loading" | "success" | "warning";

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};
