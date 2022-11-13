import React, { useEffect, useState } from "react";

import { ReactComponent as SunIcon } from "../../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../icons/moon.svg";

const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        localStorage.theme = "dark";
        setTheme("dark");
        break;
      case "dark":
        localStorage.theme = "light";
        setTheme("light");
        break;
      default:
        break;
    }
    window.location.reload();
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <MoonIcon className="w-[20px] fill-grey-dark" />;
      case "dark":
        return <SunIcon className="w-[20px] fill-grey-light" />;
      default:
        break;
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="dark:text-blue-bright"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeButton;
