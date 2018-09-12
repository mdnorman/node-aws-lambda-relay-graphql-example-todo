import { GraphQLObjectType } from 'graphql';

import { GraphQLUser } from './GraphQLUser';
import { getViewer } from '../../services/database';
import { nodeField } from './nodeDefinitions';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
    node: nodeField,
  },
});
