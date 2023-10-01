interface AppHeaderProps {
  contactRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
}

export const AppHeader = ({ contactRef, servicesRef }: AppHeaderProps) => {
  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="flex w-screen text-white justify-end mt-9">
      <button
        onClick={() => handleClick(contactRef)}
        className="w-40 h-14  transition-colors rounded duration-350 ease-in-out  hover:bg-white hover:text-black"
      >
        Contato
      </button>
      <button
        onClick={() => handleClick(servicesRef)}
        className="w-40 h-14  transition-colors rounded duration-350 ease-in-out  hover:bg-white hover:text-black"
      >
        Serviços
      </button>
    </header>
  );
};
