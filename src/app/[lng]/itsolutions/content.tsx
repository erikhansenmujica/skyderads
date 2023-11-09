"use client";
import React, { useRef } from "react";
import { BusinessServices } from "../components/BusinessServices";
import { FinalContactSection } from "../components/FinalContactSection";
import { MessagesInBetween } from "../components/General/MessagesInBetween";
import { AppHeader } from "../components/Headers/AppHeader";
import { LogoParallax } from "../components/Parallaxs/LogoParallax";
import { Title } from "../components/Title";
import { ScrollDownMessage } from "../components/ScrollDownMessage";
import { SubtitlesComesIn } from "../components/SubtitleComesIn";
import { MetaDesc } from "../components/MetaDesc";
import { useIsVisibleHook } from "@/hooks/isVisibleHook";
import { FullScreenDiv } from "../components/FullScreenDiv";
import { useTranslation } from "@/app/i18n/client";
import { Footer } from "../components/Footers/ClientFooter";
import { FullScreenVideo } from "../components/FullScreenVideo";
import { VideoTitleTranslate } from "../components/VideoTitleTranslate";

interface HomeProps {
  params: {
    lng: string;
  };
}

export const Content = ({ params: { lng } }: HomeProps) => {
  const { t } = useTranslation(lng, "titlesandsubtitles");
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const firstScrollRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisibleHook();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AppHeader lng={lng} contactRef={contactRef} servicesRef={servicesRef} />
      <LogoParallax main={false} isVisible={isVisible} />
      <Title text={t("ittitle")} />
      <ScrollDownMessage
        firstScrollRef={firstScrollRef}
        isVisible={isVisible}
        lng={lng}
      />
      <SubtitlesComesIn
        text={t("itsubtitle")}
        firstScrollRef={firstScrollRef}
        isVisible={isVisible}
      />
      <FullScreenDiv />
      <MessagesInBetween
        firstScrollRef={firstScrollRef}
        text={t("welcometoskyder")}
      />
      <FullScreenVideo video="">
        <div className="flex flex-wrap font-bold justify-center">
          <VideoTitleTranslate
            lng={lng}
            video="/content/landings.mp4"
            text={t("LANDINGS")}
            height="h-[189px]"
          />
          <VideoTitleTranslate
            lng={lng}
            video="/content/forms.mp4"
            height="h-[189px]"
            text={t("FORMS")}
          />
          <VideoTitleTranslate
            lng={lng}
            video="/content/mobileapps.mp4"
            height="h-[189px]"
            text={t("MOBILEAPPS")}
          />
          <VideoTitleTranslate
            lng={lng}
            video="/content/apps.mp4"
            height="h-[189px]"
            text={t("WEBAPPS")}
          />
        </div>
      </FullScreenVideo>
      <BusinessServices
        contactRef={contactRef}
        servicesRef={servicesRef}
        it
        ourservices={t("ourservices")}
        lng={lng}
      />
      <MessagesInBetween size="1xl" text={t("wearepassionate")} />
      <FinalContactSection
        section="webs and apps"
        lng={lng}
        contactRef={contactRef}
      />
      <Footer lng={lng} />
    </div>
  );
};
