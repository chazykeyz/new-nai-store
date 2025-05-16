import { ThemeType } from "@/constants/types";
import { createContext, ReactNode, useContext } from "react";
import { View } from "react-native";

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = {
    backgroundColor: "white",
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};
