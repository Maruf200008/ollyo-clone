import { Poppins } from "next/font/google";

import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  preload: false,
  display: "swap",
});

export const metadata = {
  title: "Ollyo",
  description: "Software Company Ltd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
