import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F4EF] text-[#2B2B2B] antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-16 lg:px-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
