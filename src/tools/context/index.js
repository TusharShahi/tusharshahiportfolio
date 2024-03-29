import React, { createContext, useEffect, useState } from "react";
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

const ContextProvider = (props) => {
  let [currentTheme, setTheme] = useState("LIGHT");
  useEffect(() => {
    let storageTheme = localStorage.getItem("themeSwitch");
    let currentTheme = storageTheme ? storageTheme : "LIGHT";
    setTheme(currentTheme);
    changeColorsTo(currentTheme);
  }, []);
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
