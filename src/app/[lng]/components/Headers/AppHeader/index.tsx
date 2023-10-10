"use client";

import { useTranslation } from "@/app/i18n/client";

interface AppHeaderProps {
  contactRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  lng: string;
}

export const AppHeader = ({ contactRef, servicesRef, lng }: AppHeaderProps) => {
  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { t } = useTranslation(lng, "headers");

  return (
    <header className="flex w-screen text-1xl text-white justify-end mt-9">
      <button
        onClick={() => handleClick(contactRef)}
        className="w-40 h-14  transition-colors rounded duration-350 ease-in-out  hover:bg-white hover:text-black"
      >
        {t("contact")}
      </button>
      <button
        onClick={() => handleClick(servicesRef)}
        className="w-40 h-14 text-1xl  transition-colors rounded duration-350 ease-in-out  hover:bg-white hover:text-black"
      >
        {t("services")}
      </button>
    </header>
  );
};
