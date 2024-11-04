import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCR Demo",
  description: "Scan and manage documents with OCR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen max-w-5xl mx-auto bg-white shadow-lg">
          <Navbar />
          <main className="px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
