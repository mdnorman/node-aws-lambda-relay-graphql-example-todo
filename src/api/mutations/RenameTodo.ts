import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';

import { TodoType } from '../model/Todo';
import { getTodo, renameTodo } from '../../services/database';

export const RenameTodo = mutationWithClientMutationId({
  name: 'RenameTodo',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    todo: {
      type: TodoType,
      resolve: ({ localTodoId }) => getTodo(localTodoId),
    },
  },
  mutateAndGetPayload: ({ id, text }) => {
    const localTodoId = fromGlobalId(id).id;
    renameTodo(localTodoId, text);
    return { localTodoId };
  },
});
