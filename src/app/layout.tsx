import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
      className={`${montserrat.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#141414] font-body selection:bg-[#B88746] selection:text-white">
        {children}
      </body>
    </html>
  );
}
