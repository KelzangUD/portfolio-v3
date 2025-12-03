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

export const metadata: Metadata = {
  title: "KUD",
  description: "Portfolio Website developed in NextJS",
  icons: {
    icon: "/logo.svg",
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
