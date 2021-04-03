import { useState, useContext, createContext } from "react";

import { ThemeProvider as BaseThemeProvider } from "styled-components";

// import theme(s)
import { lightTheme } from "../themes/themeLight";
import { darkTheme } from "../themes/themeDark";

// == theme context init
export const ThemeContext = createContext(null);

// == themeProvider
//! wrap your PARENT element ( like ( <App /> ) with this
export const ThemeProvider = ({ children }) => {
  const localSt = localStorage.getItem("currentTheme");

  const themeValue = localSt || "dark";

  const [themeString, setThemeString] = useState(themeValue);
  const themeObject = themeString === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ themeString, setThemeString, themeObject }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

// useTheme
export const useTheme = () => {
  const context = useContext(ThemeContext);

  const { themeString, setThemeString, themeObject } = context;

  const toggleTheme = (value) => {
    setThemeString(value);
    localStorage.setItem("currentTheme", value);
  };

  return {
    theme: themeObject,
    currentTheme: themeString,
    toggleTheme,
  };
};
