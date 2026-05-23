import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Programa de Adopción IA en Tecnología · Edición Claude",
  description:
    "Un programa operativo para pasar de la exploración puntual a la integración práctica de IA en tecnología.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={ibmPlexMono.variable}>
      <body>{children}</body>
    </html>
  );
}
