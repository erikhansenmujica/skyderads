import { Metadata } from "next";
import { Content } from "./content";
import { serverUseTranslation } from "@/app/i18n";

interface HomeProps {
  params: {
    lng: string;
  };
}

export async function generateMetadata(props: HomeProps): Promise<Metadata> {
  const { t } = await serverUseTranslation(
    props.params.lng,
    "titlesandsubtitles"
  );
  return {
    title: t("digitalcontenttitle"),
    description: t("digitalcontentsubtitle"),
    alternates: {
      canonical: `/${props.params.lng}/digitalcontent`,
    },
    keywords: t("digitalcontentkeywords"),
  };
}

export default function Page({ params: { lng } }: HomeProps) {
  return (
    <main className="h-full">
      <Content params={{ lng }} />
    </main>
  );
}
