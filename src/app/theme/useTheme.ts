import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function UseTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  if (!setTheme) {
    throw new Error("Theme setter is undefined in context.");
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.NORMAL, toggleTheme };
}
