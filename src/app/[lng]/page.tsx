"use client";
import React, { useEffect, useState } from "react";
import { LogoParallax } from "./components/Parallaxs/LogoParallax";
import { useRouter } from "next/navigation";
import { MetaDesc } from "./components/MetaDesc";
import { useIsVisibleHook } from "@/hooks/isVisibleHook";
import { useTranslation } from "../i18n/client";
import { Footer } from "./components/Footers/ClientFooter";
import localFont from "next/font/local";
import { Spinner } from "./components/Spinner";

const calibri = localFont({ src: "../../fonts/calibri-regular.ttf" });

interface HomeProps {
  params: {
    lng: string;
  };
}

const Home = ({ params: { lng } }: HomeProps) => {
  const router = useRouter();
  const [loader, setLoader] = React.useState(false);
  const goToPageComponent = (which: string) => {
    setLoader(true);
    router.push(which);
  };
  const isVisible = useIsVisibleHook();
  const [banner, setBanner] = useState<string>("");
  const { t } = useTranslation(lng, "titlesandsubtitles");
  useEffect(() => {
    // Check screen width and set initial state
    const screenWidth = window.innerWidth;
    setBanner(
      screenWidth <= 640
        ? "/content/bannermobile.mp4"
        : "/content/bannerweb.mp4"
    );
    // setIsCollapsed(screenWidth <= 640); // Adjust the breakpoint as needed
  }, []);

  return (
    <div className={`${calibri.className}`}>
      <div className="relative top-0 ">
        {banner && (
          <video autoPlay playsInline muted loop>
            <source src={banner} type="video/mp4" />
          </video>
        )}
        <div className="absolute h-full w-full background-color bg-gradient-to-t from-black to-transparent top-0" />
        <div className="z-10">
          <LogoParallax isVisible={false} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0 z-10">
        <div className="flex flex-col w-screen mt-[350px]">
          <h1
            className={`${
              isVisible && !loader ? "animate-fade-in" : "hidden"
            } text-white text-2xl text-center mb-6`}
          >
            {t("whatyoulookinat")}
          </h1>
          <div className="flex wrap justify-center z-[12]">
            <button
              onClick={() => goToPageComponent(`/${lng}/itsolutions`)}
              className={`animate-pulse1  ${
                isVisible && !loader ? "animate-fade-in" : "hidden"
              } border-white border-2 rounded-xl p-6 text-white hover:text-black hover:bg-white
              w-[220px] max-w-[220px] md:m-6
            `}
            >
              {t("ittitle")}
            </button>
            <button
              onClick={() => goToPageComponent(`/${lng}/digitalcontent`)}
              className={`animate-pulse1 ${
                isVisible && !loader ? "animate-fade-in" : "hidden"
              } border-white border-2 rounded-xl p-6 text-white hover:text-black hover:bg-white
            w-[220px] max-w-[220px] md:m-6
            `}
            >
              {t("digitalcontenttitle")}
            </button>
          </div>
        </div>
        <Spinner className={loader ? "" : "invisible"} />
      </div>
      <MetaDesc lng={lng} />
      <div className="mt-10">
        <Footer lng={lng} />
      </div>
    </div>
  );
};

export default Home;
