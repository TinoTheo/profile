import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Navbar from "./components/sections/navbar";
import ChatWidget from "./components/sections/chatwidget"; 'react'
import Footer from './components/sections/Footer';
import Image from "next/image"


export const metadata: Metadata = {
  title: "Freelancer",
  description: "My profile",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
          <main>

          <div className="fixed inset-0 -z-10">
        <Image
          src="/solid-4.jpg"
          alt="Background"
          fill
          priority
          quality={75}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>


            {children}

          </main>

        <ChatWidget/>
        <Footer />
      </body>
    </html>
  );  
}
