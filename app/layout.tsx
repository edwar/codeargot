import type { Metadata } from "next";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "CodeArgot App",
  description: "Aplicación para prepararce para entrevistas técnicas de programación en inglés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${lato.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
