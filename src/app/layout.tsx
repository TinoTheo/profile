import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Navbar from "./components/sections/navbar";
import ChatWidget from "./components/sections/chatwidget"; 'react'
import Footer from './components/sections/Footer';


export const metadata: Metadata = {
  title: "Freelancer",
  description: "My profile",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/solid-4.jpg')] bg-fixed bg-cover md:bg-fixed bg-center">
        <Navbar />
          <main > {children}</main>
        <ChatWidget/>
        <Footer />
      </body>
    </html>
  );  
}
