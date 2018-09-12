import { GraphQLBoolean, GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';

import { GraphQLTodo } from '../model/GraphQLTodo';
import { changeTodoStatus, getTodo, getViewer } from '../../services/database';
import { GraphQLUser } from '../model/GraphQLUser';

export const GraphQLChangeTodoStatusMutation = mutationWithClientMutationId({
  name: 'ChangeTodoStatus',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    todo: {
      type: GraphQLTodo,
      resolve: ({ localTodoId }) => getTodo(localTodoId),
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ id, complete }) => {
    const localTodoId = fromGlobalId(id).id;
    changeTodoStatus(localTodoId, complete);
    return { localTodoId };
  },
});
