import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Desenvolvedor de Sistemas | Portfólio",
  description: "Portfólio profissional de desenvolvedor de sistemas. Especializado em JavaScript, React, React Native e desenvolvimento full-stack.",
  keywords: "desenvolvedor, sistemas, JavaScript, React, React Native, Full Stack, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
