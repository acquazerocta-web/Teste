import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sessão de Alívio Emocional | Hipnoterapia",
  description:
    "Liberte-se de ansiedade, traumas e bloqueios emocionais através da hipnoterapia. Sessões individuais conduzidas com segurança, cuidado e profissionalismo.",
  keywords: [
    "hipnoterapia",
    "alívio emocional",
    "terapia",
    "ansiedade",
    "hipnose clínica",
    "bem-estar",
  ],
  openGraph: {
    title: "Sessão de Alívio Emocional | Hipnoterapia",
    description:
      "Liberte-se de ansiedade, traumas e bloqueios emocionais através da hipnoterapia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
