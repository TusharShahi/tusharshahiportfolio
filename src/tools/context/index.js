import React, { createContext, useEffect, useState } from "react";
import { colorPalette } from "../constants";

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
  if (typeof document !== "undefined")
    properties.forEach((x) => {
      document.documentElement.style.setProperty(
        `--${x}`,
        colorPalette[(theme === undefined ? "dark" : theme).toLowerCase()][x]
      );
    });
};

const ContextProvider = (props) => {
  let [currentTheme, setTheme] = useState("DARK");
  useEffect(() => {
    let storageTheme = localStorage.getItem("themeSwitch");
    let currentTheme = storageTheme ? storageTheme : "DARK";
    setTheme(currentTheme);
  }, []);

  changeColorsTo(currentTheme);

  let themeSwitchHandler = () => {
    const newTheme = currentTheme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
    window && localStorage.setItem("themeSwitch", newTheme);
    changeColorsTo(newTheme);
  };

  return (
    <Context.Provider
      value={{
        theme: currentTheme,
        toggleTheme: themeSwitchHandler
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
