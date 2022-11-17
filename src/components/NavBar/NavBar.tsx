import React, { useState } from "react";

import { HOME_PAGE_ROUTE } from "../../config/routes";

import LangButton from "../LangButton";
import Sprite, { MoveType } from "../Sprite";
import ThemeButton from "../ThemeButton";
import ToggleMenu from "../ToggleMenu";

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  const getSpriteMove = () => {
    if (theme === "dark") {
      return MoveType.SLEEP;
    }
    return MoveType.WASH;
  };

  return (
    <div className="NavBar fixed py-10 xl:px-16 lg:px-10 px-6 w-screen z-10 text-xl leading-none animate-appear">
      <div className="flex justify-between">
        <div className="h-[30px] -translate-y-[69px] -translate-x-[28px]">
          <a href={HOME_PAGE_ROUTE}>
            <Sprite move={getSpriteMove()} />
          </a>
        </div>
        <div className="flex space-x-6 text-grey-dark dark:text-grey-light">
          <LangButton />
          <ThemeButton getTheme={setTheme} />
          <ToggleMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
