"use client";
import React from "react";
import { FinalContactSection } from "../components/FinalContactSection";
import { Footer } from "../components/Footers/ClientFooter";
import { MessagesInBetween } from "../components/General/MessagesInBetween";
import { LogoParallax } from "../components/Parallaxs/LogoParallax";
import { Title } from "../components/Title";
import { SubtitlesComesIn } from "../components/SubtitleComesIn";
import { useIsVisibleHook } from "@/hooks/isVisibleHook";
import { FullScreenDiv } from "../components/FullScreenDiv";
import { FullScreenVideo } from "../components/FullScreenVideo";
import { useTranslation } from "@/app/i18n/client";
import { ScrollDownMessage } from "../components/ScrollDownMessage";
import { MetaDesc } from "../components/MetaDesc";
import { BusinessServices } from "../components/BusinessServices";
import { AppHeader } from "../components/Headers/AppHeader";
import { YoutubePlaylist } from "../components/YoutubePlaylist";
import Link from "next/link";
import { VideoTitleTranslate } from "../components/VideoTitleTranslate";

interface HomeProps {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: HomeProps) {
  const contactRef = React.useRef<HTMLDivElement>(null);
  const firstScrollRef = React.useRef<HTMLDivElement>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const isVisible = useIsVisibleHook();
  const { t } = useTranslation(lng, "titlesandsubtitles");
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AppHeader lng={lng} contactRef={contactRef} servicesRef={servicesRef} />
      <LogoParallax isVisible={isVisible} />
      <Title text={t("digitalcontenttitle")} />
      <ScrollDownMessage
        firstScrollRef={firstScrollRef}
        isVisible={isVisible}
        lng={lng}
      />
      <SubtitlesComesIn
        firstScrollRef={firstScrollRef}
        isVisible={isVisible}
        text={t("digitalcontentsubtitle")}
      />
      <MetaDesc lng={lng} />
      <FullScreenDiv />
      <MessagesInBetween
        firstScrollRef={firstScrollRef}
        text={t("welcometoskyder")}
      />
      <FullScreenVideo video="">
        <div className="flex flex-wrap font-bold justify-center">
          <VideoTitleTranslate
            text="publicity"
            video="/content/publicidade.mp4"
            lng={lng}
          />
          <VideoTitleTranslate
            text="product"
            video="/content/VIDEOPRODUTO.mp4"
            lng={lng}
          />
          <VideoTitleTranslate
            text="service"
            video="/content/VIDEOSERVICO.mp4"
            lng={lng}
          />
          <VideoTitleTranslate
            text=""
            video="/content/BANERVIDEOCLIPSMUSICA.mp4"
            lng={lng}
          />
        </div>
      </FullScreenVideo>
      <MessagesInBetween
        firstScrollRef={firstScrollRef}
        text={t("youtubeplaylist")}
      />

      <FullScreenVideo video="">
        <div className="flex-col justify-center justify-items-center content-center flex my-8 items-center">
          <YoutubePlaylist
            lng={lng}
            src="https://www.youtube.com/embed/videoseries?si=QYwMGy4mI6Nr1O21&amp;list=PLou2miqXrKvkpOB7pKPPFqJPDYt4GLiFX"
          />
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=VyihSIs7h1A&list=PLou2miqXrKvkpOB7pKPPFqJPDYt4GLiFX"
          >
            <h1 className="animate-pulse1 text-center  text-white text-1xl  ml-[5%]">
              {t("allourvideos")}
            </h1>
          </Link>
        </div>
      </FullScreenVideo>
      <MessagesInBetween
        firstScrollRef={firstScrollRef}
        text={t("newAIpoweredvideoediting")}
        gradienttext
        size="2xl"
        highlightwords={[t("AI")]}
      />
      <FullScreenVideo video="">
        <div className="flex flex-wrap font-bold justify-center">
          <VideoTitleTranslate
            text=""
            video="/content/muestraIA1.mp4"
            lng={lng}
            height="h-[400px]"
          />
          <VideoTitleTranslate
            text=""
            video="/content/muestraIA2.mp4"
            lng={lng}
            height="h-[400px]"
          />
        </div>
      </FullScreenVideo>
      <BusinessServices
        ourservices={t("ourservices")}
        lng={lng}
        servicesRef={servicesRef}
        it={false}
        contactRef={contactRef}
      />
      <MessagesInBetween size="2xl" text={t("wearepassionate")} />
      <FinalContactSection
        section="audiovisuals"
        lng={lng}
        contactRef={contactRef}
      />
      <Footer lng={lng} />
    </div>
  );
}
