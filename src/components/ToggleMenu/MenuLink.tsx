import React from "react";

interface MenuLinkProps {
  title: string;
  link: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ link, title }) => {
  return (
    <a href={link} className="block text-2xl">
      {title.toUpperCase()}
    </a>
  );
};

export default MenuLink;
