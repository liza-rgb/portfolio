import React, { useEffect, useState } from "react";

import { ReactComponent as SunIcon } from "../../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../icons/moon.svg";

interface ThemeButtonProps {
  getTheme?: any;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ getTheme }) => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        localStorage.theme = "dark";
        setTheme("dark");
        getTheme("dark");
        break;
      case "dark":
        localStorage.theme = "light";
        setTheme("light");
        getTheme("light");
        break;
      default:
        break;
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <MoonIcon className="w-[30px] fill-grey-dark" />;
      case "dark":
        return <SunIcon className="w-[30px] fill-grey-light" />;
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
