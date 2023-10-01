import { BusinessCard } from "./BusinessCard";

interface BusinessServicesProps {
  servicesRef: React.RefObject<HTMLDivElement>;
}

export const BusinessServices = ({ servicesRef }: BusinessServicesProps) => (
  <section
    className="flex-1 w-full z-10 bg-gray-100  text-gray-800"
    ref={servicesRef}
  >
    <div className="container mx-auto lg:h-screen md:h-screen sm:h-full text-center flex flex-col justify-evenly">
      <h1 className="text-3xl z-10 text-gray-800 font-semibold m-20 lg:m-0 sm:m-20 ">
        Nossos Serviços
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  sm:gap-6 ">
        <BusinessCard
          title="Criação de Páginas Web"
          content="Sua presença online é a primeira impressão que os clientes têm da
            sua empresa. Nós projetamos sites impressionantes e funcionais que
            cativam e convertem."
          price="A partir de €300"
        />
        <BusinessCard
          title="Conteúdo Audiovisual"
          content="Contar sua história de forma envolvente é essencial. Produzimos
          vídeos e conteúdo audiovisual de alta qualidade que comunica sua
          mensagem de maneira eficaz."
          price="A partir de €100"
        />
        <BusinessCard
          title="Aplicações Móveis"
          content="Vivemos em um mundo móvel. Desenvolvemos aplicativos móveis
          personalizados que colocam seu negócio literalmente nas mãos dos
          clientes."
          price="A partir de €500"
        />
        <BusinessCard
          title="Soluções Tecnológicas"
          content="Seja qual for o desafio, temos a expertise para criar soluções sob
          medida para suas necessidades tecnológicas."
        />
      </div>
    </div>
  </section>
);
