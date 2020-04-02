const { ApolloServer } = require('apollo-server-lambda');

import { schema } from '../api';

const server = new ApolloServer({ schema });

export const handler = server.createHandler();
