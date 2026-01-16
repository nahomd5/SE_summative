const rates = { GBP: 1, USD: 1.34, EUR: 1.15 };

function convertCurrency(amount, from, to, ratesTable) {
  if (from === to) return amount;
  const amountInBase = amount / ratesTable[from];
  const converted = amountInBase * ratesTable[to];
  return Math.round(converted * 100) / 100;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { rates, convertCurrency };
}

if (typeof window !== 'undefined') {
  window.rates = rates;
  window.convertCurrency = convertCurrency;
}