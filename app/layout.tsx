import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velao Lander",
  description: "Authority, at the speed of silicon.",
  icons: {
    icon: "/octopus-logo.svg",
    shortcut: "/octopus-logo.svg",
    apple: "/octopus-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
