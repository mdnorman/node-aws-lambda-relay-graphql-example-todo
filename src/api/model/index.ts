import { GraphQLObjectType } from 'graphql';

import { UserType } from './User';
import { getViewer } from '../../services/database';
import { nodeField } from './nodeDefinitions';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: UserType,
      resolve: () => getViewer(),
    },
    node: nodeField,
  },
});
