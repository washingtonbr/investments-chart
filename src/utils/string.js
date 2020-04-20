export function formatMoney(value) {
  if (!value) return;
  const formatOptions = { style: 'currency', currency: 'BRL' };
  return new Intl.NumberFormat('pt-br', formatOptions).format(value);
}
