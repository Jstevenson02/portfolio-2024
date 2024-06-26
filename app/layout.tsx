import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GradientFollower from "./components/GradientFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Stevenson",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth select-none'>
      <body className={inter.className}>
        <GradientFollower>{children}</GradientFollower>
      </body>
    </html>
  );
}
