"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import EventsContextProvider from "./context/MyContext";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

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

const CustomAlert = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50">
    <div className="bg-black p-6 rounded-lg shadow-lg text-center animate-fade-in bg-opacity-90 border border-gray-800  sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-sm">
      <p className="text-white text-base md:text-lg lg:text-xl">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md sm:w-auto hover:bg-blue-600 transition"
      >
        Roger that
      </button>
    </div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowAlert(true);
    }
  }, []);

  return (
    <html lang="en" className="dark h-full w-full">
      <head>
        <script
          async
          src="https://cdn.seline.so/seline.js"
          data-token="516060a4cb43e93"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-gradient animate-gradient`}
      >
        <EventsContextProvider>
          {children}
          <Toaster />
          <Footer />
          {showAlert && (
            <CustomAlert
              message="Cyberia's dates have been extended and new dates are live"
              onClose={() => setShowAlert(false)}
            />
          )}
        </EventsContextProvider>
      </body>
    </html>
  );
}
