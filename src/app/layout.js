import { Iceberg, Inter } from "next/font/google";
import "./globals.css";

const iceberg = Iceberg({
  variable: "--font-iceberg",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lucashackd",
  description: "Lucas Hackbart Döhnert - Professional Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${iceberg.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
