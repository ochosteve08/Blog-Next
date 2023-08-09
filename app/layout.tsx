import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "First Next.js Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <nav>
          <h1>My Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
