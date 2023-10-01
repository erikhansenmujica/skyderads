"use client";
import React from "react";
import { MessagesInBetween } from "./components/General/MessagesInBetween";
import { BusinessServices } from "./components/BusinessServices";
import { AppFooter } from "./components/Footers/AppFooter";
import { FinalContactSection } from "./components/FinalContactSection";
import { LogoParallax } from "./components/Parallaxs/LogoParallax";
import { AppHeader } from "./components/Headers/AppHeader";

export default function Home() {
  const contactRef = React.useRef<HTMLDivElement>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AppHeader contactRef={contactRef} servicesRef={servicesRef} />
      <LogoParallax />
      <div className="h-screen"></div>
      <MessagesInBetween text="Bem-vindo à Skyder, o seu parceiro definitivo para o sucesso digital em Portugal!" />
      <div className="h-full z-10">
        <video src="publicidade.mp4" autoPlay muted loop></video>
      </div>
      <BusinessServices servicesRef={servicesRef} />
      <MessagesInBetween
        size="2xl"
        text="Somos apaixonados por traduzir ideias inovadoras em experiências digitais incríveis. Combinamos a criatividade de um produtor audiovisual experiente com a perícia de um programador talentoso para fornecer soluções tecnológicas excepcionais para o seu negócio."
      />
      <FinalContactSection contactRef={contactRef} />
      <AppFooter />
    </div>
  );
}
