"use client";
import Image from "next/image";
interface LogoParallaxProps {
  isVisible: boolean;
}
export const LogoParallax = ({ isVisible }: LogoParallaxProps) => {
  ("h-screen w-screen bg-transparent opacity-0 transform translate-y-2 transition-opacity ease-out delay-150 duration-1400 opacity-50 fixed top-0 z-0");
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0 z-0">
      <Image
        className="z-0"
        src={"/logo.png"}
        width={"225"}
        height={"100"}
        alt=""
      ></Image>
      <div
        className={`bg-black ${
          isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-2"
        } h-screen w-screen transform transition-opacity duration-1000 ease-out flex flex-col items-center fixed top-0 z-0`}
      ></div>
    </div>
  );
};
