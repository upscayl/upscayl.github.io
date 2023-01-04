/* eslint-disable @next/next/no-img-element */
import Atropos from "atropos/react";
import "atropos/css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden">
      <object
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        data="https://source.unsplash.com/random"
        type="image/jpg">
        <img
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="fallback.jpeg"
        />
      </object>

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
            <div className="flex flex-col" data-atropos-offset="-5">
              <p
                className="text-violet-100 font-bold md:text-lg lg:text-xl"
                data-atropos-offset="-10">
                Download
              </p>
              <div className="w-full">
                <img
                  src="https://img.shields.io/github/downloads/upscayl/upscayl/total.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAACIJJREFUeJzN21lUFFcaB3A9mbzNTB7zlDPzMHNyziwJIiCrssgi0OwoNPvWbLKoNCJL2BHjjggIaAybQDCoBBFDnMnMZBLNiVHUBE3c0bivGMf1m+82VHV1d61NL8U5v4eubm7V96/btdzqO2eOwN97i6Lm2rhH/wFlohF0Ef2KXiOQkefoF/QV+hDZot8I1cf5R/4Z+aO96JEMCjQmEBJGOvqd1OJ/ixpm9rS1C5mtV+gw+pPY4v+KxnUa8VCCnWI5uGZtB//qQ1D66W2oOPAQKoa4JbdPgPeH/+HkuryFbj9AtYG3LTE+GLwLhV0XIG3DEfBOqIL53gn6QdxHke+7R/EW/xc0Qf+TZww4RBaBR9kB8Nl0DHy3Hoew5jOw9gsQpOq+qvk8l4X5u+iNU2RtFdWmWHVjr6C4/xqErWgFe98UZggPUBxftz+p3esx4JKxDXw2HtXZcPMEsAXqyIabMASNsdeQ1XgUHJakMUN4jP6uX/wbaCuzePfVvawbbq4AanFjxagzAvnKLghIZ4ZwHL3NDMAPPaG6vWtmI+eGmyOAwMwtUPP5K061fMa46AaX23pCP4Sq+YsjSfGa8/xe6g2HpUX4fT9q8QCqD78U53NDNawMg4wu7WMGcAG9Rfb+H22o8zwe7T3K9vNuuDkCCMjcDFWjL9gdNtZLGhVe6b774BiYwQwhmQSQSy0gpzrqaG/RADI2Q+Xoc5FeiMIWJlm+dE03M4Ajc2YuEjQLXLOaeDfanAGUH3qmUSHoufEwwJWd55kBTJEArtAbUjMK4S0/8IpuOwvFQ1OC0jov87azuKCD3hD/jE1QPvJMvEPGIQGWjzwFW684et0kgGfUizI8XQjt2ZLPngj2EiKt6wpvOynrDusEUHbwf7w+GDEd5+AcnQDoF+SS0hoBLEnfBKXDT3UdlKZMArfwVXILYCOUDP8qWakohsG6RcgwgGJs19RKNAyDk10P8MMAivDASVkzW58xPTHgKrsAVBjAgceGhvhMGYUEJLsAfFUboHD/Iyg8wG+1jsdGk2UA6v0PJXqko1ACWQZQsO8BeiiJmg9PeK7hK9kDSGqf0FzC8iGFCX2GSO24xPt+cEk/vV6ftPWwavA+emC8fYYKOLhwBUDG6qxxL0ACWPHpPXSftlKMQePIIgC3vHbtelPXQf7euzMhmIs2WJcwKwbgvf4rcE7dCLZ+2nG6+d6J4J1SD6mtpyAPg+CSPyv3aFYK4DtYuGI3zFtsMFxNm+ehBP+cZsjumYTcgTuS5Am6S7NKAJricU9zFU+H4BkDfpkNkNN/C3I+uc1v4LbkoAhnSwdAuj3fnmejXP8PWI4hGPhE321OXME5h62wbADOKRt0C8SuTro752vkFJIHGdhGdv9NAbcks2gAZIR5fkAmvQ57vxRIWjsCiyLV2mW+yRBfuQ/v0rRdc55nLCQ2fw9ZfTdNzqIBLK7/ku7+ntHFsKZvUvO+p7KUXq+DXyqoO89D5fAUhOQ20b1hWf0YZPTeoGXOVt8051COAIoGbkH5wae81IP3QNF4UlBqx8Xpz/dOgh05+GFRy1Z3Qs3oM84AyFOc9C3/1rwmyyPrRiF9zy+iZejrZefEFYA57gXIXnVSZNGnOU9lCRR8fA48sDcwvxbZ249BUHaDdsASP6vc8jWoeq6Dag+/dEksHMDaL15rHn8z17PAXwV2Pkn0a1uvWHAM0HlgAfZL0iBx1zlI67k2KyoD1zGAfMveDa7uuYx7P0bSaTBA3QGp3ZNmcM3yARARq3ZqLnLEFO8coYak3RcgpeuqBJPcunVZJYCq4ScQmtcsqviorccgqfMKq2ROV7W6+DlaIwCCHOVzWvCyOHwV2OJ5nnkhZIffeX/s9vG7fobEjsvSYACJHIGxsVoAlOqRpxBbPkCv1y22HGJ2nIGEjkssLguSGphjiJUDIJhDYosS6yD+44ssLs1aAgvOAAoHbgo+aSnAC6FQvBoUQh6O8rUTVzusE0AsHvT0xe2+aBaOeJ/Bcyn8Ha+w5tOifpejwh7A187CvJ2MAGoh5qMLtFhjsATIZQF/AOYdEaLHBxhjggsTakG567woMZSPjCfLAKLx6M9FKYlwiLILwA0DiNr5k9GidfwsSIYB1MCy9nMm8BOrKD0LguUWQHwNLG07y+Mcu3ZufEHJLgBXDCCidYIWaeCsVtvsOQTnyi2Aagjf8SO7VmJCR8Qs6QfwnA5g3b+sEoALBhCGxfLhDMgI9opsnQBuUC8SGr+F7L4bvDJ6rkEyXk8LSeu8xNtOWJn2XsAlrhpCW34wiTA+O6bZMp5PkAD+S70gkw2scS/gElcFIdizTK5FK3SGYuPXzNvvlySAddQCn8RqzWQDSwfgjAEEN53m1izVGQ22ULwYP9BE4yQAMrvqBVlAppkU91+3SgCK7adoQU2mcNqAYtsJsGecAlEdCeBN9A21MHxlm2amhSUDcIqtgsDt46IpRDllwKtwD7P4e+gdasIEmRNIZldp5tiQIWrLBlAJAY0nBQU2jks3E5ofnuH09n4XmksF8Hs0Rr1Jhq3LBu9YNAB/7J7CTnIKoLAE599wHBwiCpnF30Hv688b+rMNY4IkGafPbxu3SACOMZWwpOF7EU4Y2sbPp/6f4BCuZhZPRL7rEsQ6cywWPWSGQMbuKoYemTmACvDDAk3Jd/O34K7u1u/2L1GTDdeUWptFUVQIj5mJOQZmQnRJLxTtuQIlQ1NmCUBMm2J413+p+TGGXVCu/l4nc50bOYvX6wl/s5meWqbfCNh6xWsed9sF5fAiDx/II3AuToHaR+bklyNC7QnCy1tb7ySD7Z1xF4WjNwSLZ4TwNqqymZ4tztWw3JFTXQc54Nm4h4iunf6b56kkQbyF0tARNCWDooSQi7oTqAa9g1/ruXw1/h/JQTLIQz2y/gAAAABJRU5ErkJggg==&labelColor=ede9fe&color=8e6bf6"
                  alt="Upscayl Download Counter"
                  className="mx-auto rounded-lg mt-2"
                />
              </div>
              <div
                className="flex flex-row gap-5 items-center justify-center p-5"
                data-atropos-offset="10">
                <a
                  href="https://github.com/upscayl/upscayl/releases/download/v2.0.1/upscayl-2.0.1-mac.dmg"
                  target="_blank"
                  rel="noreferrer">
                  <button className="p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base">
                    MacOS 🍎
                  </button>
                </a>
                <a
                  href="https://github.com/upscayl/upscayl/releases/download/v2.0.1/upscayl-2.0.1-linux.AppImage"
                  target="_blank"
                  rel="noreferrer">
                  <button className="p-3 bg-green-300 rounded-full font-medium hover:scale-125 transition-all text-sm sm:text-base">
                    Linux🐧
                  </button>
                </a>
                <a
                  href="https://github.com/upscayl/upscayl/releases/download/v2.0.1/upscayl-2.0.1-win.exe"
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
