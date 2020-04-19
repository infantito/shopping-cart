exports.formatToCreate = (products, orderId) =>
  products.map(product => ({
    ...product,
    orderId,
  }));
