import { GraphQLList, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';

import { getViewer, removeCompletedTodos } from '../../services/database';
import { UserType } from '../model/User';

// TODO: Support plural deletes
export const RemoveCompletedTodos = mutationWithClientMutationId({
  name: 'RemoveCompletedTodos',
  outputFields: {
    deletedTodoIds: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ deletedTodoIds }) => deletedTodoIds,
    },
    viewer: {
      type: UserType,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: () => {
    const deletedTodoLocalIds = removeCompletedTodos();
    const deletedTodoIds = deletedTodoLocalIds.map(toGlobalId.bind(null, 'Todo'));
    return { deletedTodoIds };
  },
});
