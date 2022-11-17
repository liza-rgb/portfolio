import React from "react";

export enum MoveType {
  SIT_FRONT = "sit-front",
  SIT_RIGHT = "sit-right",
  WASH_TAIL = "wash-tail",
  WASH = "wash",
  RUN = "run",
  RUN_FAST = "run-fast",
  SLEEP = "sleep",
  TOUCH = "touch",
  JUMP = "jump",
  DANCE = "dance",
}

interface SpriteProps {
  move: MoveType;
}

const Sprite: React.FC<SpriteProps> = ({ move }) => {
  const getSpriteProps = (currentType: MoveType) => {
    switch (currentType) {
      case MoveType.SIT_FRONT:
        return {
          position: "top-[0px]",
          steps: "w-[400px] animate-moveSprite-4",
        };
      case MoveType.SIT_RIGHT:
        return {
          position: "-top-[100px]",
          steps: "w-[400px] animate-moveSprite-4",
        };
      case MoveType.WASH_TAIL:
        return {
          position: "-top-[200px]",
          steps: "w-[400px] animate-moveSprite-4",
        };
      case MoveType.WASH:
        return {
          position: "-top-[300px]",
          steps: "w-[400px] animate-moveSprite-4",
        };
      case MoveType.RUN:
        return {
          position: "-top-[400px]",
          steps: "w-[800px] animate-moveSprite-8",
        };
      case MoveType.RUN_FAST:
        return {
          position: "-top-[500px]",
          steps: "w-[800px] animate-moveSprite-8",
        };
      case MoveType.SLEEP:
        return {
          position: "-top-[600px]",
          steps: "w-[400px] animate-moveSprite-4",
        };
      case MoveType.TOUCH:
        return {
          position: "-top-[700px]",
          steps: "w-[600px] animate-moveSprite-6",
        };
      case MoveType.JUMP:
        return {
          position: "-top-[800px]",
          steps: "w-[700px] animate-moveSprite-7",
        };
      case MoveType.DANCE:
        return {
          position: "-top-[900px]",
          steps: "w-[800px] animate-moveSprite-8",
        };
    }
  };

  const currentSprite = getSpriteProps(move);

  return (
    <div className="Sprite w-[100px] h-[100px] overflow-hidden relative">
      <div className={currentSprite.steps}>
        <img
          src={require("../../assets/cat-sprite-sheet.png")}
          alt="Cat Sprite"
          className={`w-[800px] pixel-image absolute max-w-none ${currentSprite.position}`}
        />
      </div>
    </div>
  );
};

export default Sprite;
