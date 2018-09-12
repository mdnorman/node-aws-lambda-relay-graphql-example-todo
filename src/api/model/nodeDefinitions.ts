import { fromGlobalId, nodeDefinitions } from 'graphql-relay';

import { getTodo, getUser, Todo, User } from '../../services/database';
import { GraphQLUser } from './GraphQLUser';
import { GraphQLTodo } from './GraphQLTodo';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Todo') {
      return getTodo(id);
    }
    if (type === 'User') {
      return getUser(id);
    }
    return null;
  },
  obj => {
    if (obj instanceof Todo) {
      return GraphQLTodo;
    }
    if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  },
);
