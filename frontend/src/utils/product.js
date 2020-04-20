const products = ['food', 'product', 'fruit', 'soda', 'junkfood', 'brand'];

export function getRandomProduct() {
  return products[(products.length * Math.random()) << 0];
}

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
