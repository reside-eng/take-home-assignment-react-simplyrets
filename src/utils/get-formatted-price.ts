const formatter = new Intl.NumberFormat();

export function getFormattedPrice(price: number) {
  return `$${formatter.format(price)}`;
}
