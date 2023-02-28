import * as React from "react";
import AUSTERE from "../images/partners/AUSTERE.svg";
import DIGITALESQUE from "../images/partners/DIGITALESQUE.svg";
import GENESIO from "../images/partners/GENESIO.svg";
import HS2 from "../images/partners/HS2.svg";
import IDEOSPHERE from "../images/partners/IDEOSPHERE.svg";
import MACHINATIONS from "../images/partners/MACHINATIONS.svg";
import NAGRIAL from "../images/partners/NAGRIAL.svg";
import NENZA from "../images/partners/NENZA.svg";
import NERRES from "../images/partners/NERRES.svg";
import ONEZEROONE from "../images/partners/ONEZEROONE.svg";
import REELREPUBLIC from "../images/partners/REELREPUBLIC.svg";
import UNNAMED from "../images/partners/UNNAMED.svg";

function Partners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <a
        href="https://ideosphere.xyz"
        target="_blank"
        rel="noreferrer noopener"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem] md:border-r border-r-black">
        <img
          src={IDEOSPHERE}
          className="w-[160px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="IDEOSPHERE"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={AUSTERE}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="AUSTERE"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem] md:border-r border-r-black">
        <img
          src={UNNAMED}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="UNNAMED"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={MACHINATIONS}
          className="w-[160px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="MACHINATIONS"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={REELREPUBLIC}
          className="w-[80px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="REELREPUBLIC"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={NENZA}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="NENZA"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem] md:border-r border-r-black">
        <img
          src={NERRES}
          className="w-[120px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="NERRES"
        />
      </a>
      <a
        href="https://101training.xyz"
        target="_blank"
        rel="noreferrer noopener"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={ONEZEROONE}
          className="w-[120px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="ONEZEROONE"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={GENESIO}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt=""
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={HS2}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="HS2"
        />
      </a>
      <a
        href="/#"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={NAGRIAL}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="NAGRIAL"
        />
      </a>
      <a
        href="https://digitalesque.xyz"
        target="_blank"
        rel="noreferrer noopener"
        className="group flex flex-col items-center justify-center text-gray-400 min-h-[8rem]">
        <img
          src={DIGITALESQUE}
          className="w-[140px] h-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300"
          alt="DIGITALESQUE"
        />
      </a>
    </div>
  );
}
export default Partners;
