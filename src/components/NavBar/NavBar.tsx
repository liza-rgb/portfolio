import React from "react";

import LangButton from "../LangButton";
import Sprite, { MoveType } from "../Sprite";
import ThemeButton from "../ThemeButton";
import ToggleMenu from "../ToggleMenu";

const NavBar: React.FC = () => {
  const getSpriteMove = () => {
    if (localStorage.theme === "dark") {
      return MoveType.SLEEP;
    }
    return MoveType.WASH;
  };

  return (
    <div className="NavBar fixed py-10 px-20 w-screen z-10 text-xl leading-none animate-appear">
      <div className="flex justify-between">
        <div className="h-[30px] -translate-y-[69px] -translate-x-[28px]">
          <Sprite move={getSpriteMove()} />
        </div>
        <div className="flex space-x-6 text-grey-dark dark:text-grey-light">
          <LangButton />
          <ThemeButton />
          <ToggleMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
