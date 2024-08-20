// ./client/hooks/mouseEvents.ts
import { useThemeContext } from "../contexts/ThemeContext";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";
import { Colors } from "../styles/colors";

export const mouseEvents = () => {
  const { theme } = useThemeContext();
  const { themeHeaderTextColor } = useGlobalStyles();

  const handleMouseEnter = (className: string) => {
    const element = document.querySelector(className) as HTMLElement;

    if (element) {
      element.style.color = theme === "light" ? Colors.white : Colors.gray100;
      element.style.backgroundColor =
        theme === "light" ? Colors.black : Colors.gray400;
    }
  };

  const handleMouseLeave = (className: string) => {
    const element = document.querySelector(className) as HTMLElement;

    if (element) {
      element.style.color = themeHeaderTextColor;
      element.style.backgroundColor =
        theme === "light" ? Colors.white : Colors.gray600;
    }
  };

  return { handleMouseEnter, handleMouseLeave };
};
