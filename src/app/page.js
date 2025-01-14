import Head from "next/head";
import LoanCalculator from "./components/Credit_counter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Калькулятор аннуитетного кредита</title>
        <meta
          name="description"
          content="Используйте наш удобный калькулятор аннуитетного кредита для расчета ежемесячных платежей. Оптимальный инструмент для планирования вашего кредита."
        />
        <meta name="keywords" content="калькулятор кредита, аннуитетный кредит, расчет кредита, финансовый инструмент" />
        <meta name="author" content="Flowweb" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Калькулятор аннуитетного кредита" />
        <meta
          property="og:description"
          content="Простой инструмент для расчета аннуитетного кредита. Узнайте, сколько вы будете платить каждый месяц."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/" />
        <meta property="og:image" content="https://example.com/preview.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <link rel="canonical" href="https://example.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LoanCalculator />
      </div>
    </>
  );
}
