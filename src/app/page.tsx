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
  const firstScrollRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AppHeader contactRef={contactRef} servicesRef={servicesRef} />
      <LogoParallax firstScrollRef={firstScrollRef} />
      <p className="invisible">
        Bem-vindo à nossa agência líder em Portugal, especializada em
        desenvolvimento de aplicações móveis e design web. Na nossa empresa,
        temos orgulho em oferecer soluções abrangentes para as suas necessidades
        digitais. **Desenvolvimento de Aplicações Móveis em Portugal** Se
        procura desenvolver aplicações móveis de alta qualidade em Portugal,
        chegou ao local certo. A nossa equipa de especialistas é especializada
        no desenvolvimento de aplicações Android e iOS que se destacam no
        mercado. **Design Web Responsivo em Portugal** O design web é essencial
        na era digital atual. Criamos websites atraentes e totalmente
        responsivos para que o seu negócio se destaque online. O nosso foco em
        design web e desenvolvimento em Portugal garante que o seu site seja
        acessível a partir de qualquer dispositivo. **Produção de Conteúdo
        Audiovisual em Portugal** A produção de conteúdo audiovisual é uma
        ferramenta poderosa para cativar o seu público. Na nossa agência,
        oferecemos serviços de produção de vídeo marketing de alta qualidade que
        o ajudarão a destacar-se no competitivo mercado português. **Agência de
        Desenvolvimento de Aplicações em Portugal** Somos uma agência de
        desenvolvimento de aplicações móveis e web de renome em Portugal. A
        nossa experiência em design de sites e desenvolvimento de aplicações
        garante resultados excecionais para o seu negócio. Não importa se
        precisa de desenvolvimento de aplicações móveis em Portugal ou design
        web de vanguarda, estamos aqui para ajudar. Somos o seu parceiro de
        confiança para todas as suas necessidades digitais em Portugal.
      </p>
      <div className="h-screen"></div>
      <MessagesInBetween
        firstScrollRef={firstScrollRef}
        text="Bem-vindo à Skyder, o seu parceiro definitivo para o sucesso digital em Portugal!"
      />
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
