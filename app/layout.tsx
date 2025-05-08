import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seagate Electric",
  description: "Seagate Electric is a leading provider of infrastructure services to ISPs and network installations for telco operators.",
  icons: {
    icon: "/favicon.ico",}
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <div className="w-full absolute top-0 left-0">
        <TopBar />
      </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
