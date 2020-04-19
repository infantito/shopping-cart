import gql from 'graphql-tag';

export default gql`
  extend type Product {
    image: String!
  }
`;
