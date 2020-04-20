import { getRandomProduct } from 'utils/product';

export default {
  Product: {
    image() {
      const random = getRandomProduct();

      return `https://source.unsplash.com/80x80/?${random}`;
    },
  },
};
