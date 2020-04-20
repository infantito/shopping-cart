import gql from 'graphql-tag';

const ALL_PRODUCTS = gql`
  query AllProducts($input: ProductInput!) {
    products(input: $input) {
      id
      name
      image @client
      price
      quantity
    }
  }
`;

export default ALL_PRODUCTS;
