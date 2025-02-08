import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Developer | Karol Janowski",
  description: "Z pasją do tworzenia nowoczesnych i kreatywnych rozwiązań. Szukam nowych wyzwań – zarówno jako freelancer, jak i członek zespołu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-gray-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
