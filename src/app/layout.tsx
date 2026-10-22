import type { Metadata } from "next";
import {
  Montserrat,
  Plus_Jakarta_Sans,
  Raleway,
  Oswald,
  Bitter,
  Poppins,
} from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "White Ink Design Studio | Branding & Digital Marketing Agency, Ahmedabad",
  description:
    "White Ink Design Studio crafts scroll-stopping brand identities, websites & digital marketing strategies for ambitious brands globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${oswald.variable} ${bitter.variable} ${poppins.variable} ${montserrat.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#141414] font-body selection:bg-[#B88746] selection:text-white">
        {children}
      </body>
    </html>
  );
}
