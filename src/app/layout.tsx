import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Search foods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <main className="p-md-10 p-5">{children}</main>
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
