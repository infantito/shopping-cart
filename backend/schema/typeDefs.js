const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  enum FeeType {
    TEN
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    price: Float!
    quantity: Int!
    createdAt: Date!
    available: Boolean!
  }

  type Cart {
    id: ID!
    product: Product!
    createdAt: Date!
  }

  type Order {
    id: ID!
    description: String!
    cart: Cart!
    total: Float!
    fee: Int!
    createdAt: Date!
    shippingAt: Date!
    available: Boolean!
  }

  input ProductInput {
    name: String
  }

  input NewProductInput {
    id: Int!
    quantity: Int!
    price: Float!
  }

  input NewOrderInput {
    products: [NewProductInput!]!
  }

  type Query {
    products(input: ProductInput): [Product]!
  }

  type Mutation {
    createOrder(input: NewOrderInput!): Order!
  }
`;

module.exports = typeDefs;
