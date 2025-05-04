import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
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
        <ClerkProvider>
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen ">
              {children}
            </main>
            <Footer />
          </ConvexClientProvider>
        </ClerkProvider>

      </body>
    </html>
  );
}