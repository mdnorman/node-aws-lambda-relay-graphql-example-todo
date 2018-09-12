import { GraphQLObjectType } from 'graphql';

import { User } from './User';
import { getViewer } from '../../services/database';
import { nodeField } from './nodeDefinitions';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: User,
      resolve: () => getViewer(),
    },
    node: nodeField,
  },
});
