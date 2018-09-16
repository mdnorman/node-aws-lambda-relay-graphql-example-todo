import { GraphQLBoolean, GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';

import { TodoType } from '../model/Todo';
import { changeTodoStatus, getTodo, getViewer } from '../../services/database';
import { UserType } from '../model/User';

export const ChangeTodoStatus = mutationWithClientMutationId({
  name: 'ChangeTodoStatus',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    todo: {
      type: TodoType,
      resolve: ({ localTodoId }) => getTodo(localTodoId),
    },
    viewer: {
      type: UserType,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ id, complete }) => {
    const localTodoId = fromGlobalId(id).id;
    changeTodoStatus(localTodoId, complete);
    return { localTodoId };
  },
});
