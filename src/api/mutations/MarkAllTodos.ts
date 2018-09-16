import { GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { TodoType } from '../model/Todo';
import { getTodo, getViewer, markAllTodos } from '../../services/database';
import { UserType } from '../model/User';

export const MarkAllTodos = mutationWithClientMutationId({
  name: 'MarkAllTodos',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  outputFields: {
    changedTodos: {
      type: new GraphQLList(TodoType),
      resolve: ({ changedTodoLocalIds }) => changedTodoLocalIds.map(getTodo),
    },
    viewer: {
      type: UserType,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ complete }) => {
    const changedTodoLocalIds = markAllTodos(complete);
    return { changedTodoLocalIds };
  },
});
