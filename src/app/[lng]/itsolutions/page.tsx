import { Metadata } from "next";
import { Content } from "./content";
import { useTranslation } from "@/app/i18n";

interface HomeProps {
  params: {
    lng: string;
  };
}

export async function generateMetadata(props: HomeProps): Promise<Metadata> {
  const { t } = await useTranslation(props.params.lng, "titlesandsubtitles");
  return {
    title: t("ittitle"),
    description: t("itsubtitle"),
    alternates: {
      canonical: `/${props.params.lng}/it-solutions`,
    },
    keywords: t("itkeywords"),
  };
}

export default function Page({ params: { lng } }: HomeProps) {
  return (
    <main className="h-full">
      <Content params={{ lng }} />
    </main>
  );
}
