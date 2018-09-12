import { GraphQLObjectType } from 'graphql';

import { AddTodo } from './AddTodo';
import { ChangeTodoStatus } from './ChangeTodoStatus';
import { MarkAllTodos } from './MarkAllTodos';
import { RemoveCompletedTodos } from './RemoveCompletedTodos';
import { RemoveTodo } from './RemoveTodo';
import { RenameTodo } from './RenameTodo';

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: AddTodo,
    changeTodoStatus: ChangeTodoStatus,
    markAllTodos: MarkAllTodos,
    removeCompletedTodos: RemoveCompletedTodos,
    removeTodo: RemoveTodo,
    renameTodo: RenameTodo,
  },
});
