const { convertCurrency } = require('./currencyConverter');

describe('Currency Converter', () => {
  const testRates = { GBP: 1, USD: 1.34, EUR: 1.15 };

  test('converts GBP to USD correctly', () => {
    expect(convertCurrency(10, 'GBP', 'USD', testRates)).toBe(13.40);
  });

  test('returns the same value when converting to the same currency', () => {
    expect(convertCurrency(15, 'EUR', 'EUR', testRates)).toBe(15);
  });
});