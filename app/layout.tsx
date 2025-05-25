import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Lustosa Consultoria",
  description: "Limpe seu nome com respaldo jurídico e sem pagar suas dívidas!",
  keywords: [
    "limpar nome sujo",
    "como limpar o nome no SPC e Serasa",
    "tirar nome do Serasa grátis",
    "nome sujo o que fazer",
    "recuperar crédito urgente",
    "consultoria para limpar nome",
    "limpar nome sem pagar dívida",
    "resolver nome negativado",
    "como limpar nome com advogado",
    "limpeza de nome com respaldo jurídico",
    "limpar nome em Recife",
    "limpar nome em Pernambuco",
    "consultoria jurídica em Recife",
    "advogado consumidor Recife",
    "tirar nome do Serasa Recife",
    "serviços jurídicos em Pernambuco",
    "direito do consumidor Recife",
    "advogado para nome sujo PE",
    "Lustosa Consultoria",
    "assessoria jurídica financeira",
    "consultoria em regularização de CPF",
    "limpeza de nome com base no CDC",
    "direito do consumidor dívida",
    "defesa contra cobrança indevida",
    "consultoria jurídica para negativados"
  ],
  openGraph: {
    title: "Lustosa Consultoria",
    description: "Limpe seu nome com respaldo jurídico e sem pagar suas dívidas!",
    url: defaultUrl,
    images: [
      {
        url: `${defaultUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Limpe seu nome com respaldo jurídico e sem pagar suas dívidas!",
      },
    ],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
