/* eslint-disable @next/next/no-img-element */
import React from "react";

const BackgroundImage = () => {
  return (
    <object
      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
      data="https://source.unsplash.com/random/?abstract,nature"
      type="image/jpg">
      <img
        alt="Fallback"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        src="fallback.jpeg"
      />
    </object>
  );
};

export default BackgroundImage;
