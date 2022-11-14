import React from "react";

interface SkillTagProps {
  name: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <div className="SkillTag text-xs font-bold bg-blue-bright dark:bg-blue-light text-grey-light dark:text-blue-dark px-3 py-1 rounded-lg inline-block m-1">
      {name}
    </div>
  );
};

export default SkillTag;
