import { fromGlobalId, nodeDefinitions } from 'graphql-relay';

import { getTodo, getUser, Todo as TodoModel, User as UserModel } from '../../services/database';
import { User } from './User';
import { Todo } from './Todo';

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
    if (obj instanceof TodoModel) {
      return Todo;
    }
    if (obj instanceof UserModel) {
      return User;
    }
    return null;
  },
);
