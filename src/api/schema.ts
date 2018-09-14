import { GraphQLSchema } from 'graphql';

import { Query } from './model';
import { Mutation } from './mutations';

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
