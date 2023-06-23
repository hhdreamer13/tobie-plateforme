import "./globals.css";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export const metadata = {
  title: "Les Amis de Tobie",
  description: "Un espace pour les amis de Tobie Lolness",
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={caveat.className}>{children}</body>
    </html>
  );
}
