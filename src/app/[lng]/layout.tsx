import "../../../public/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Desenvolvimento de Aplicações Móveis e Web em Portugal | Empresa Líder",
  description:
    "Somos uma agência especializada em desenvolvimento de aplicações móveis e design web em Portugal. Oferecemos serviços de desenvolvimento de aplicações Android e iOS, design web responsivo e produção de conteúdo audiovisual em Portugal. Entre em contato hoje mesmo para melhorar sua presença online!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/faviconlogo.png",
    apple: "/faviconlogo.png",
  },
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <Script
        id="gtag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-638912286"
      ></Script>
      <Script id="gtag-action">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-638912286');`}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
