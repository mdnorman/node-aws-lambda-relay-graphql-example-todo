import { GraphQLNonNull, GraphQLString } from 'graphql';
import { cursorForObjectInConnection, mutationWithClientMutationId } from 'graphql-relay';

import { TodoEdge } from '../model/Todo';
import { addTodo, getTodo, getTodos, getViewer } from '../../services/database';
import { UserType } from '../model/User';

export const AddTodo = mutationWithClientMutationId({
  name: 'AddTodo',
  inputFields: {
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    todoEdge: {
      type: TodoEdge,
      resolve: ({ localTodoId }) => {
        const todo = getTodo(localTodoId);
        return {
          cursor: cursorForObjectInConnection(getTodos(), todo),
          node: todo,
        };
      },
    },
    viewer: {
      type: UserType,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ text }) => {
    const localTodoId = addTodo(text);
    return { localTodoId };
  },
});
