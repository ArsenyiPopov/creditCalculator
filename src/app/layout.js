import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Калькулятор аннуитетного кредита",
  description: "Используйте наш удобный калькулятор аннуитетного кредита для расчета ежемесячных платежей. Оптимальный инструмент для планирования вашего кредита.",
  keywords: ["калькулятор кредита", "аннуитетный кредит", "расчет кредита", "финансовый инструмент"],
  authors: [{ name: "Flowweb" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Калькулятор аннуитетного кредита",
    description: "Простой инструмент для расчета аннуитетного кредита. Узнайте, сколько вы будете платить каждый месяц.",
    url: "https://credit-calculator.flowweb.ru/",
    images: [
      {
        url: "https://credit-calculator.flowweb.ru/logo.png",
        width: 800,
        height: 600,
        alt: "Превью калькулятора аннуитетного кредита",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
