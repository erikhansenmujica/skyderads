"use client";
import Image from "next/image";
import { RefObject } from "react";

export const LogoParallax = () => (
  <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0 z-0">
    <Image
      className="z-0"
      src={"/logo.png"}
      width={"300"}
      height={"100"}
      alt=""
    ></Image>
  </div>
);
