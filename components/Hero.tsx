/* eslint-disable @next/next/no-img-element */
import React from "react";
import OSButton from "./OSButton";
import DownloadsCounter from "./DownloadsCounter";
import NavButton from "./NavButton";

const Hero = () => {
  return (
    <div className="gap-2 first-letter:sm:gap-8 flex flex-col">
      <h1
        className="font-primary font-extrabold text-violet-100 text-2xl sm:text-4xl md:text-5xl md:leading-tight"
        data-atropos-offset="5">
        Upscayl
      </h1>
      <h3
        className="xs:text-2xl text-base font-semibold text-violet-300"
        data-atropos-offset="-5">
        Free and Open Source AI Image Upscaler
      </h3>
      <div className="px-5 sm:px-0">
        <img
          src="/screenshot.png"
          alt="Upscayl Screenshot"
          className="rounded-2xl inline-block sm:w-full"
          onMouseOver={() => {
            // if (isAnimating) {
            //   return;
            // }
            // reward();
            // showInfoToast();
          }}
          data-atropos-offset="0"
        />
        <div className="mt-2">
          <NavButton
            text="Upscayl Guide"
            href="https://github.com/upscayl/upscayl/wiki"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2" data-atropos-offset="-5">
        <p
          className="text-violet-100 font-bold md:text-lg lg:text-xl text-xs xs:text-lg"
          data-atropos-offset="-10">
          Download v2.5.5
        </p>
        <DownloadsCounter />
        <div
          className="flex flex-row gap-2 sm:gap-5 items-center justify-center mt-4 sm:p-5 sm:mt-0"
          data-atropos-offset="10">
          <OSButton
            title="macOS 🍎"
            href="https://github.com/upscayl/upscayl/releases/download/v2.5.5/upscayl-2.5.5-mac.dmg"
            className="bg-orange-300"
          />
          <OSButton
            title="Linux 🐧"
            href="https://github.com/upscayl/upscayl/releases/download/v2.5.5/upscayl-2.5.5-linux.AppImage"
            className="bg-green-300"
          />
          <OSButton
            title="Windows 🐌"
            href="https://github.com/upscayl/upscayl/releases/download/v2.5.5/upscayl-2.5.5-win.exe"
            className="bg-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
