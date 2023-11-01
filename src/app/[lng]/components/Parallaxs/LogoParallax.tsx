"use client";
import Image from "next/image";
interface LogoParallaxProps {
  isVisible: boolean;
}
export const LogoParallax = ({ isVisible }: LogoParallaxProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0">
      <Image src={"/logo.png"} width={"225"} height={"100"} alt=""></Image>
      <div
        className={`bg-black ${
          isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-2"
        } h-screen w-screen transform transition-opacity duration-1000 ease-out flex flex-col items-center fixed top-0 z-0`}
      ></div>
    </div>
  );
};
