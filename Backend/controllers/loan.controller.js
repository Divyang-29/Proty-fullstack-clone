exports.calculateLoan = (req, res) => {
  const {
    totalAmount,
    downPayment,
    interestRate,
    amortizationMonths,
    propertyTax,
    homeInsurance,
  } = req.body;

  const loanAmount = totalAmount - downPayment;
  const monthlyRate = interestRate / 100 / 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, amortizationMonths)) /
    (Math.pow(1 + monthlyRate, amortizationMonths) - 1);

  const monthlyPayment =
    emi + propertyTax / 12 + homeInsurance / 12;

  res.json({
    estimatedMonthlyPayment: Math.round(monthlyPayment),
  });
};
