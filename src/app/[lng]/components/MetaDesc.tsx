"use client";
import { useTranslation } from "@/app/i18n/client";

interface MetaDescProps {
  lng: string;
}

export const MetaDesc = ({ lng }: MetaDescProps) => {
  const { t } = useTranslation(lng, "metadata");
  return <p className="text-transparent z-0 ">{t("metadescription")}</p>;
};
