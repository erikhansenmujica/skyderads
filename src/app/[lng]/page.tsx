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
import { AppHeader } from "./components/Headers/AppHeader";
import { MessagesInBetween } from "./components/General/MessagesInBetween";

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
    const screenWidth = window.innerWidth;
    // //accounts.google.com/o/oauth2/v2/auth?client_id=207407249076-dphnj1eovocp645q3dkjn917c2fsfiao.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/business.manage&redirect_uri=https://skyderby.pt/api/google/mybusiness
    // fetch(
    //   "https://accounts.google.com/o/oauth2/v2/auth?client_id=207407249076-dphnj1eovocp645q3dkjn917c2fsfiao.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/business.manage&redirect_uri=https://skyderby.pt/api/google/mybusiness",
    //   // "https://mybusiness.googleapis.com/v4/accounts/112699919233639542596/locations/ChIJVZM-Xn0HWaoRpI_UvuEvFK8/reviews"
    //   { mode: "no-cors" }
    // ).then((res) => console.log(res));
    setBanner(
      screenWidth <= 640
        ? "/content/bannermobile.mp4"
        : "/content/bannerweb.mp4"
    );
    // setIsCollapsed(screenWidth <= 640); // Adjust the breakpoint as needed
  }, []);

  return (
    <div className={`${calibri.className} `}>
      <div className="absolute top-0 z-[300]">
        <AppHeader lng={lng} main />
      </div>
      <div className="relative top-0">
        {banner && (
          <video autoPlay playsInline muted loop>
            <source src={banner} type="video/mp4" />
          </video>
        )}
        <div className="absolute h-full w-full background-color bg-gradient-to-t from-black to-transparent top-0" />
        <LogoParallax main isVisible={false} />
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen align-items-center fixed top-0 ">
        <div className="flex flex-col w-screen mt-[60vh]">
          <h1
            className={`${
              isVisible && !loader ? "animate-fade-in" : "hidden"
            } text-white text-2xl text-center mb-6`}
          >
            {t("whatyoulookinat")}
          </h1>
          <div className="flex wrap justify-center ">
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
          <div className="w-full flex justify-center mb-[100px] mt-[20px] md:mt-[0px]">
            <a target="_blank" href={`https://app.skyderdigital.com/${lng}`}>
              <button
                className={`animate-pulse1 ${
                  isVisible && !loader ? "animate-fade-in " : "hidden"
                } border-white border-2 rounded-xl p-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:bg-gradient-to-l
             md:m-6
            `}
              >
                {t("AItitle")}
              </button>
            </a>
          </div>
        </div>
        <Spinner className={loader ? "" : "invisible"} />
      </div>
      <div className="mt-[100vh] md:mt-[100vh] lg:mt-[100vh]">
        <Footer lng={lng} />
      </div>
      {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script>
     
      <div className="elfsight-app-839c650c-48f3-4599-9175-328b6d45e507 "></div> */}
    </div>
  );
};

export default Home;
