import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./app.module.scss";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Yoldi profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
