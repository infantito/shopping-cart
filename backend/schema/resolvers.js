const Sequelize = require('sequelize');
const date = require('./dateType');
const { FEE, SHIPPING_AFTER_DAY } = require('../constants/order');
const { FIELDS_TO_UPDATE } = require('../constants/cart');
const { KEY_DECREMENT } = require('../constants/product');
const { getShoppingCart } = require('../utils/order');
const { formatToCreate } = require('../utils/product');

const Op = Sequelize.Op;

const resolvers = {
  Query: {
    async products(_, { input }, { models }) {
      const where = { available: true };

      if (input) where.name = { [Op.like]: `%${input.name}%` };

      return models.product.findAll({ where });
    },
  },
  Mutation: {
    async createOrder(_, { input = { products: [] } }, { models }) {
      const today = new Date();
      const tomorrow = today.setDate(today.getDate() + SHIPPING_AFTER_DAY);
      const { total, shopping } = getShoppingCart(input.products);

      const order = await models.order.create({
        total,
        fee: FEE,
        createdAt: +today,
        shippingAt: tomorrow,
      });

      await models.cart.bulkCreate(formatToCreate(shopping, order.id), {
        fields: FIELDS_TO_UPDATE,
      });

      shopping.forEach(({ quantity, productId }) => {
        models.product.decrement(KEY_DECREMENT, {
          by: quantity,
          where: { id: productId },
        });
      });

      return order;
    },
  },
  Date: date,
};

module.exports = resolvers;
