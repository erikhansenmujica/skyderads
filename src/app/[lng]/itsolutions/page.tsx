"use client";
import React, { useRef, useState } from "react";
import { BusinessServices } from "../components/BusinessServices";
import { FinalContactSection } from "../components/FinalContactSection";
import { MessagesInBetween } from "../components/General/MessagesInBetween";
import { AppHeader } from "../components/Headers/AppHeader";
import { LogoParallax } from "../components/Parallaxs/LogoParallax";
import { Title } from "../components/Title";
import { ScrollDownMessage } from "../components/ScrollDownMessage";
import { SubtitlesComesIn } from "../components/SubtitleComesIn";
import { MetaDesc } from "../components/MetaDesc";
import { isVisibleHook } from "@/hooks/isVisibleHook";
import { FullScreenDiv } from "../components/FullScreenDiv";
import { Separator } from "../components/Separator";
import { useTranslation } from "@/app/i18n/client";
import { Footer } from "../components/Footers/ClientFooter";
import Image from "next/image";
import { AnimatedCards } from "../components/AnimatedCards";
import { AboutUs } from "../components/AboutUs";

interface HomeProps {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: HomeProps) {
  const { t } = useTranslation(lng, "titlesandsubtitles");
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const firstScrollRef = useRef<HTMLDivElement>(null);
  const isVisible = isVisibleHook();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AppHeader lng={lng} contactRef={contactRef} servicesRef={servicesRef} />
      <LogoParallax isVisible={isVisible} />
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
      <MetaDesc lng={lng} />
      <FullScreenDiv />
      <MessagesInBetween
        firstScrollRef={firstScrollRef}
        text={t("welcometoskyder")}
      />
      <Separator />
      <AboutUs lng={lng} />
      <BusinessServices
        contactRef={contactRef}
        servicesRef={servicesRef}
        it
        ourservices={t("ourservices")}
        lng={lng}
      />
      <MessagesInBetween size="1xl" text={t("wearepassionate")} />
      <FinalContactSection lng={lng} contactRef={contactRef} />
      <Footer lng={lng} />
    </div>
  );
}
