"use client";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
interface LogoParallaxProps {
  firstScrollRef: RefObject<HTMLElement>;
}
export const LogoParallax = ({ firstScrollRef }: LogoParallaxProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  ("h-screen w-screen bg-transparent opacity-0 transform translate-y-2 transition-opacity ease-out delay-150 duration-1400 opacity-50 fixed top-0 z-0");
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0 z-0">
      <Image
        className="z-0"
        src={"/logo.png"}
        width={"300"}
        height={"100"}
        alt=""
      ></Image>
      <div
        className={`bg-black ${
          isVisible ? "opacity-50 translate-y-0" : "opacity-0 translate-y-2"
        } h-screen w-screen transform transition-opacity duration-1000 ease-out flex flex-col items-center fixed top-0 z-0`}
      ></div>
      <div
        onClick={() =>
          firstScrollRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className={`${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-2"
        }
        duration-1000 z-6
      flex flex-col h-screen justify-center items-center color-white fixed top-0 z-0 `}
      >
        {/* Arrow pointing down */}
        <div className="w-6 h-6 mb-2 mt-[55vh] z-10 color-white cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-white animate-pulse"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        {/* Text */}
        <p className="text-white animate-pulse cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
          Scroll down
        </p>
      </div>
    </div>
  );
};
