"use client";
import React from "react";
import { LogoParallax } from "./components/Parallaxs/LogoParallax";
import { useRouter } from "next/navigation";
import { MetaDesc } from "./components/MetaDesc";
import { isVisibleHook } from "@/hooks/isVisibleHook";
import { useTranslation } from "../i18n/client";
import { Footer } from "./components/Footers/ClientFooter";
import { FullScreenVideo } from "./components/FullScreenVideo";
import Image from "next/image";
import localFont from "next/font/local";

const calibri = localFont({ src: "../../fonts/calibri-regular.ttf" });

interface HomeProps {
  params: {
    lng: string;
  };
}

const Home = ({ params: { lng } }: HomeProps) => {
  const router = useRouter();
  const goToPageComponent = (which: string) => {
    router.push(which);
  };
  const isVisible = isVisibleHook();
  const { t } = useTranslation(lng, "titlesandsubtitles");
  return (
    <div
      className={`${calibri.className} h-full flex flex-col justify-center items-center`}
    >
      <LogoParallax isVisible={isVisible} />
      <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0 z-0">
        <div className="flex wrap justify-center w-screen mt-[300px]">
          <button
            onClick={() => goToPageComponent(`/${lng}/itsolutions`)}
            className={`animate-pulse  ${
              isVisible ? "animate-fade-in" : "invisible"
            } border-white border-2 p-6 text-white hover:text-black hover:bg-white
              w-[220px] max-w-[220px] md:m-6
            `}
          >
            {t("ittitle")}
          </button>
          <button
            onClick={() => goToPageComponent(`/${lng}/digitalcontent`)}
            className={`animate-pulse  ${
              isVisible ? "animate-fade-in" : "invisible"
            } border-white border-2 p-6 text-white hover:text-black hover:bg-white
            max-w-[220px]  md:m-6
            `}
          >
            {t("digitalcontenttitle")}
          </button>
        </div>
      </div>
      <MetaDesc lng={lng} />
      <div className="h-screen"></div>
      <Footer lng={lng} />
    </div>
  );
};

export default Home;
