export const formatCurrencyValue = ({ currency, value }) =>
  new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: currency.code
  }).format(value)
