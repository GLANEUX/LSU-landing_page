import type { Metadata } from "next";
import { Josefin_Sans, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
  style: ["italic", "normal"]
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  style: ["italic", "normal"],
});


export const metadata: Metadata = {
  title: "Loop",
  description: "La plateforme où les musiciens s'accordent !",
  keywords: ["musiciens", "musique", "Application"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${josefinSans.variable} ${poppins.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
