import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Fair Split",
  description: "Track. Split. Settle. Repeat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={` ${inter.className} `}
      >
        <ConvexClientProvider>
          <Header />
          <main className="min-h-screen ">
            {children}

          </main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}