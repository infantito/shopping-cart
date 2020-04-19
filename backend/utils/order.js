exports.getShoppingCart = products =>
  products.reduce(
    (data, { price, id, quantity }) => {
      data.total = data.total + price * (quantity || 1);
      data.shopping.push({ productId: id, quantity });

      return data;
    },
    { total: 0, shopping: [] },
  );
