import { GraphQLObjectType } from 'graphql';

import { GraphQLAddTodoMutation } from './GraphQLAddTodoMutation';
import { GraphQLChangeTodoStatusMutation } from './GraphQLChangeTodoStatusMutation';
import { GraphQLMarkAllTodosMutation } from './GraphQLMarkAllTodosMutation';
import { GraphQLRemoveCompletedTodosMutation } from './GraphQLRemoveCompletedTodosMutation';
import { GraphQLRemoveTodoMutation } from './GraphQLRemoveTodoMutation';
import { GraphQLRenameTodoMutation } from './GraphQLRenameTodoMutation';

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: GraphQLAddTodoMutation,
    changeTodoStatus: GraphQLChangeTodoStatusMutation,
    markAllTodos: GraphQLMarkAllTodosMutation,
    removeCompletedTodos: GraphQLRemoveCompletedTodosMutation,
    removeTodo: GraphQLRemoveTodoMutation,
    renameTodo: GraphQLRenameTodoMutation,
  },
});
