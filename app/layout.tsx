import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-providers";
import ProgressBar from "./components/ProgressBar";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";

const geistPoppins = Poppins({
  variable: "--font-p",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const domainName = "https://www.kelzangud.com/";

export const metadata: Metadata = {
  metadataBase: new URL(domainName),
  title: {
    default: "KUD",
    template: "%s | KUD",
  },
  icons: {
    icon: "/logo.svg",
  },
  description: "Portfolio website of Kelzang Ugyen Dorji",
  keywords: [
    "Kelzang Ugyen Dorji",
    "Portfolio",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Developer",
    "Content creator",
    "Bhutan",
  ],
  authors: [{ name: "Kelzang Ugyen Dorji", url: domainName }],
  openGraph: {
    type: "website",
    locale: "en_BT",
    url: domainName,
    title: "Kelzang Ugyen Dorji",
    description: "Portfolio website of Kelzang Ugyen Dorji",
    siteName: "Kelzang Ugyen Dorji",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "KUD Logo",
      },
    ],
  },
  alternates: {
    canonical: domainName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="max-w-screen">
      <body
        className={`${geistPoppins.variable} ${geistInter.variable} antialiased`}
      >
        <ThemeProvider>
          <Nav />
          <ProgressBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
