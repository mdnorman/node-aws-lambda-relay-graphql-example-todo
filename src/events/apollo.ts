import { ApolloServer, gql } from 'apollo-server-lambda';

import { schema } from '../data/schema';

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  schema,
  resolvers,
});

export const handler = server.createHandler();
