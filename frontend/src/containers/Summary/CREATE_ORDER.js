import gql from 'graphql-tag';

const CREATE_ORDER = gql`
  mutation CreateOrder($newOrder: NewOrderInput!) {
    createOrder(input: $newOrder) {
      id
    }
  }
`;

export default CREATE_ORDER;
