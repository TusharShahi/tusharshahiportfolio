import React, { createContext, useState } from "react";
import { colorPalette, filter } from "../constants";

const Context = createContext({
  theme: "",
  toggleTheme: null
});

const changeColorsTo = (theme) => {
  const properties = [
    "background",
    "paraText",
    "headerText",
    "base",
    "pressed",
    "shade"
  ];
  if (typeof document !== "undefined") {
    properties.forEach((x) => {
      document.documentElement.style.setProperty(
        `--${x}`,
        colorPalette[(theme === undefined ? "LIGHT" : theme).toLowerCase()][x]
      );
    });
    document.documentElement.style.setProperty(
      `--socialIconsfilter`,
      filter[(theme === undefined ? "LIGHT" : theme).toLowerCase()]
        .socialMediaIcon
    );
  }
};

const ContextProvider = ({ theme, children }) => {
  let [currentTheme, setTheme] = useState(theme);

  let themeSwitchHandler = () => {
    const newTheme = currentTheme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
    changeColorsTo(newTheme);
    if (document) document.cookie = `themeSwitch=${newTheme}`;
  };

  return (
    <Context.Provider
      value={{
        theme: currentTheme,
        toggleTheme: themeSwitchHandler
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
