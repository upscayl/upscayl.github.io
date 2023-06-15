/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-screen p-5 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <img src="logo.png" alt="Upscayl Logo" className="xs:w-8 w-5" />
        <h1 className="text-violet-100 font-extrabold xs:text-xl text-sm">
          Upscayl
        </h1>
      </div>
      <div className="flex flex-row gap-5">
        <NavButton href="https://github.com/upscayl/upscayl" text="GitHub" />
        <NavButton
          href="https://buymeacoffee.com/fossisthefuture"
          text="Donate"
        />
      </div>
    </nav>
  );
};

export default Navbar;
