import { GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { GraphQLTodo } from '../model/GraphQLTodo';
import { getTodo, getViewer, markAllTodos } from '../../data/database';
import { GraphQLUser } from '../model/GraphQLUser';

export const GraphQLMarkAllTodosMutation = mutationWithClientMutationId({
  name: 'MarkAllTodos',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  outputFields: {
    changedTodos: {
      type: new GraphQLList(GraphQLTodo),
      resolve: ({ changedTodoLocalIds }) => changedTodoLocalIds.map(getTodo),
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ complete }) => {
    const changedTodoLocalIds = markAllTodos(complete);
    return { changedTodoLocalIds };
  },
});
