/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { getViewer } from '../data/database';

import { GraphQLUser } from './model/GraphQLUser';
import { nodeField } from './model/nodeDefinitions';
import { GraphQLAddTodoMutation } from './mutations/GraphQLAddTodoMutation';
import { GraphQLChangeTodoStatusMutation } from './mutations/GraphQLChangeTodoStatusMutation';
import { GraphQLMarkAllTodosMutation } from './mutations/GraphQLMarkAllTodosMutation';
import { GraphQLRemoveCompletedTodosMutation } from './mutations/GraphQLRemoveCompletedTodosMutation';
import { GraphQLRenameTodoMutation } from './mutations/GraphQLRenameTodoMutation';
import { GraphQLRemoveTodoMutation } from './mutations/GraphQLRemoveTodoMutation';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
    node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
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

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
