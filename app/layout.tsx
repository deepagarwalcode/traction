import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Manrope, IBM_Plex_Serif } from "next/font/google";
import Navbar from "@/components/app/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const manrope = Manrope({ subsets: ["latin"] });
const ips = IBM_Plex_Serif({ subsets: ["latin"] , weight: ["100", "200", "300", "400", "500", "600", "700"] });


export const metadata: Metadata = {
  title: "Traction",
  description: "Traction is an outbound agency which generates daily pipeline for your organisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${manrope.className}  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
