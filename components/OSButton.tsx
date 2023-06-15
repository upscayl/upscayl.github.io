import React from "react";

type OSButtonProps = {
  href: string;
  title: string;
  className?: string;
};

const OSButton = ({ href, title, className }: OSButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button
        className={`p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-xs xs:text-base ${className}`}>
        {title}
      </button>
    </a>
  );
};

export default OSButton;
