import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import resolvers from 'config/resolvers';
import typeDefs from 'config/typeDefs';

const delay = setContext(
  _ =>
    new Promise(success => {
      setTimeout(() => {
        success();
      }, 800);
    }),
);
const http = new HttpLink({ uri: process.env.DOMAIN });
const link = ApolloLink.from([delay, http]);
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
  resolvers,
  typeDefs,
});

export default client;
