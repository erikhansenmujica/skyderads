"use client";

import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
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
    <header className="flex w-screen text-1xl text-white justify-between mt-9">
      <Link href={"/"} className="self-start">
        <button
          onClick={() => handleClick(contactRef)}
          className="w-40 h-14 text-2xl flex justify-center items-center transition-colors rounded duration-350 ease-in-out  hover:bg-white hover:text-black"
        >
          <AiOutlineHome />
        </button>
      </Link>
      <div>
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
      </div>
    </header>
  );
};
