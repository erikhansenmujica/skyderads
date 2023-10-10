import { useTranslation } from "../../../i18n";
import { FooterBase } from "./FooterBase";

export interface AppFooterProps {
  lng: string;
}

export const AppFooter = async ({ lng }: AppFooterProps) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
