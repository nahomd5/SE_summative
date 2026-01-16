const amountFrom = document.getElementById('amount-from');
const amountTo = document.getElementById('amount-to');
const currencyFrom = document.getElementById('currency-from');
const currencyTo = document.getElementById('currency-to');

function updateToAmount() {
  const from = currencyFrom.value;
  const to = currencyTo.value;
  const value = parseFloat(amountFrom.value) || 0;
  const converted = convertCurrency(value, from, to, rates);
  amountTo.value = converted.toFixed(2);
}

function updateFromAmount() {
  const from = currencyFrom.value;
  const to = currencyTo.value;
  const value = parseFloat(amountTo.value) || 0;

  const converted = convertCurrency(value, to, from, rates);
  amountFrom.value = converted.toFixed(2);
}

amountFrom.addEventListener('input', updateToAmount);
currencyFrom.addEventListener('change', updateToAmount);
currencyTo.addEventListener('change', updateToAmount);

amountTo.addEventListener('input', updateFromAmount);