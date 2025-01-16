"use client";
import { useState } from "react";
import MadeByFlowweb from "./MadeByFlowweb";
import PrintButton from "./PrintButton";

function LoanCalculator() {
  const [formData, setFormData] = useState({
    amount: "",
    interestRate: "",
    months: "",
    startDate: new Date().toISOString().split("T")[0],
  });
  console.log(formData)

  const [results, setResults] = useState({
    monthlyPayment: 0,
    overpayment: 0,
    totalPayment: 0,
    schedule: [],
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function calculateLoan() {
    const { amount, interestRate, months, startDate } = formData;
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interestRate) / 100;
    const monthsCount = parseInt(months, 10);
    const loanStartDate = new Date(startDate);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(monthsCount) ||
      principal <= 0 ||
      annualRate <= 0 ||
      monthsCount <= 0
    ) {
      alert("Введите корректные данные");
      return;
    }

    const monthlyRate = annualRate / 12;
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, monthsCount)) /
      (Math.pow(1 + monthlyRate, monthsCount) - 1);
    const totalPayment = monthlyPayment * monthsCount;
    const overpayment = totalPayment - principal;
    

    const schedule = [];
    let remainingBalance = principal;
    let paymentDate = new Date(loanStartDate);

    for (let i = 1; i <= monthsCount; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
        month: i,
        paymentDate: paymentDate.toISOString().split("T")[0],
        monthlyPayment: monthlyPayment.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        remainingBalance: remainingBalance.toFixed(2),
      });

      paymentDate.setMonth(paymentDate.getMonth() + 1);
    }

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      overpayment: overpayment.toFixed(2),
      totalPayment:totalPayment.toFixed(2),
      schedule,
    });
  }

  function formatNumber(number) {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className="bg-sky-50 min-h-screen p-4 flex flex-col items-center">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug break-words">
  Калькулятор аннуитетного кредита
</h2>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <label className="block mb-2 font-semibold">
      Сумма кредита:
        </label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder="Введите сумму"
          className="w-full mb-4 p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <label className="block mb-2 font-semibold">
      Процентная ставка:
        </label>
        <input
          type="number"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleInputChange}
          placeholder="Введите ставку (%)"
          className="w-full mb-4 p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <label className="block mb-2 font-semibold">
        Срок в месяцах:
        </label>
        <input
          type="number"
          name="months"
          value={formData.months}
          onChange={handleInputChange}
          placeholder="Введите срок в месяцах"
          className="w-full mb-4 p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <label className="block mb-2 font-semibold">
          Дата начала кредита:
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          min={new Date().toISOString().split("T")[0]}
          className="w-full mb-4 p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={calculateLoan}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Рассчитать
        </button>
      </div>

      {results.monthlyPayment > 0 && (
        <div className="mt-6 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Результаты:
          </h3>
          <div className="flex justify-between">
          <div>
          <p className="mb-2">Ежемесячный платёж: {formatNumber(results.monthlyPayment)} ₽</p>
          <p className="mb-2">Переплата за весь период: {formatNumber(results.overpayment)} ₽</p>
          <p className="mb-4">Полная сумма кредита: {formatNumber(results.totalPayment)} ₽</p>
          </div>
          <div className="content-end mb-4">
          <PrintButton/>
          </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-blue-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-blue-300 p-2">Месяц</th>
                  <th className="border border-blue-300 p-2">Дата платежа</th>
                  <th className="border border-blue-300 p-2">
                    Ежемесячный платёж
                  </th>
                  <th className="border border-blue-300 p-2">Основной долг</th>
                  <th className="border border-blue-300 p-2">Проценты</th>
                  <th className="border border-blue-300 p-2">Остаток долга</th>
                </tr>
              </thead>
              <tbody>
                {results.schedule.map((payment) => (
                  <tr key={payment.month}>
                    <td className="border border-blue-300 p-2 text-center">
                      {payment.month}
                    </td>
                    <td className="border border-blue-300 p-2 text-center">
                      {payment.paymentDate}
                    </td>
                    <td className="border border-blue-300 p-2 text-right">
                      {formatNumber(payment.monthlyPayment)}
                    </td>
                    <td className="border border-blue-300 p-2 text-right">
                      {formatNumber(payment.principalPayment)}
                    </td>
                    <td className="border border-blue-300 p-2 text-right">
                      {formatNumber(payment.interestPayment)}
                    </td>
                    <td className="border border-blue-300 p-2 text-right">
                      {formatNumber(payment.remainingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <MadeByFlowweb/>
    </div>
  );
}

export default LoanCalculator;
