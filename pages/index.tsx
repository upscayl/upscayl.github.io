/* eslint-disable @next/next/no-img-element */
import Atropos from "atropos/react";
import "atropos/css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src="https://source.unsplash.com/random"
      />

      <nav className="fixed z-50 top-0 w-screen p-5 flex flex-row items-center gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src="logo.png" alt="Upscayl Logo" className="w-8" />
          <h1 className="text-violet-100 font-extrabold text-lg">Upscayl</h1>
        </div>
        <div className="flex flex-row gap-5">
          <a
            href="https://buymeacoffee.com/fossisthefuture"
            target="_blank"
            rel="noreferrer">
            <button className="px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all">
              Donate
            </button>
          </a>
          <a href="https://github.com/upscayl" target="_blank" rel="noreferrer">
            <button className="px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all">
              GitHub
            </button>
          </a>
        </div>
      </nav>
      <div className="absolute inset-0 flex flex-col justify-center items-center max-w-xl mx-auto text-center">
        <Atropos className="my-atropos" shadowScale={0.1} highlight={false}>
          <div className="space-y-8">
            <h1
              className="font-primary font-extrabold text-violet-100 text-3xl sm:text-4xl md:text-5xl md:leading-tight"
              data-atropos-offset="5">
              Upscayl
            </h1>
            <h3
              className="text-2xl font-semibold text-violet-300"
              data-atropos-offset="-5">
              Free and Open Source AI Image Upscaler
            </h3>
            <div className="px-5 sm:px-0">
              <img
                src="/screenshot.png"
                alt="Upscayl Screenshot"
                className="rounded-xl"
                data-atropos-offset="0"
              />
            </div>
            <div className="flex flex-col">
              <p
                className="text-violet-100 font-bold md:text-lg lg:text-xl"
                data-atropos-offset="-10">
                Download
              </p>
              <div
                className="flex flex-row gap-5 items-center justify-center p-5"
                data-atropos-offset="10">
                <a
                  href="https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-1.5.5.dmg"
                  target="_blank"
                  rel="noreferrer">
                  <button className="p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base">
                    MacOS 🍎
                  </button>
                </a>
                <a
                  href="https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-1.5.5.AppImage"
                  target="_blank"
                  rel="noreferrer">
                  <button className="p-3 bg-green-300 rounded-full font-medium hover:scale-125 transition-all text-sm sm:text-base">
                    Linux🐧
                  </button>
                </a>
                <a
                  href="https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-Setup-1.5.5.exe"
                  target="_blank"
                  rel="noreferrer">
                  <button className="p-3 bg-blue-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base">
                    Windows 🐌
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Atropos>

        <footer className="fixed bottom-1 text-violet-200/50">
          Made by{" "}
          <a href="https://github.com/TGS963/" className="font-semibold">
            TGS963
          </a>{" "}
          and{" "}
          <a href="https://github.com/NayamAmarshe/" className="font-semibold">
            Nayam Amarshe
          </a>
          <br />
          with ⌨ 🖱
        </footer>
      </div>
    </div>
  );
}
