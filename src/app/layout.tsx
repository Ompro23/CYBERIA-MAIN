import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import EventsContextProvider from "./context/MyContext";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cyberia",
  description: "Unleash the geek within you",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="dark h-full w-full">      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >       
       <EventsContextProvider>
      
        {children}        
        <Toaster/>
        <div className="mt-10">
        <Footer/>
        </div>
        </EventsContextProvider>
      </body>
    </html>
  );
}
