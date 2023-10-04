import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Desenvolvimento de Aplicações Móveis e Web em Portugal | Empresa Líder",
  description:
    "Somos uma agência especializada em desenvolvimento de aplicações móveis e design web em Portugal. Oferecemos serviços de desenvolvimento de aplicações Android e iOS, design web responsivo e produção de conteúdo audiovisual em Portugal. Entre em contato hoje mesmo para melhorar sua presença online!",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
