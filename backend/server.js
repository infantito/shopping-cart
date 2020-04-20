require('dotenv').config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const models = require('./models');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const PORT = process.env.PORT || 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
});

const app = express();

app.use(express.static('app/build'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
server.applyMiddleware({ app, path: '/', playgroundPath: '/graphql' });

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
  ),
);
