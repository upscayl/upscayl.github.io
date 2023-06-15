import React from "react";

const NavButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className="px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold text-xs xs:text-base hover:scale-110 transition-all">
        {text}
      </button>
    </a>
  );
};

export default NavButton;
