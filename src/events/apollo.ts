import { ApolloServer, gql } from 'apollo-server-lambda';

import { schema } from '../api';

const server = new ApolloServer({ schema });

export const handler = server.createHandler();
