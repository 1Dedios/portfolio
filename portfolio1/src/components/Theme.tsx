import { ThemeContextType, Theme } from "@/types/types";
import { createContext, useContext, useState } from "react";
import { ThemeProviderProps } from "@emotion/react";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dev");
  const toggleTheme = () => {
    // TODO: toggle dev/hacker themes
    setTheme((prev) => (prev === "dev" ? "hacker" : "dev"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    console.log("useTheme must be used within ThemeProvider");
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
