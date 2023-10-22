"use client";
import React, { useRef } from "react";
import { FinalContactSection } from "../components/FinalContactSection";
import { MessagesInBetween } from "../components/General/MessagesInBetween";
import { AppHeader } from "../components/Headers/AppHeader";
import { Separator } from "../components/Separator";
import { useTranslation } from "@/app/i18n/client";
import { Footer } from "../components/Footers/ClientFooter";
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

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AppHeader lng={lng} contactRef={contactRef} servicesRef={servicesRef} />

      <Separator />
      <AboutUs lng={lng} />

      <MessagesInBetween size="1xl" text={t("wearepassionate")} />
      <FinalContactSection
        section="aboutus"
        lng={lng}
        contactRef={contactRef}
      />
      <Footer lng={lng} />
    </div>
  );
}
