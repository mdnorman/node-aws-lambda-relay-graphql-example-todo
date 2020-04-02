import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import { connectionDefinitions, globalIdField } from 'graphql-relay';

import { nodeInterface } from './nodeDefinitions';

export const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField('Todo'),
    text: {
      type: GraphQLNonNull(GraphQLString),
      resolve: obj => obj.text,
    },
    complete: {
      type: GraphQLNonNull(GraphQLBoolean),
      resolve: obj => obj.complete,
    },
  },
  interfaces: [nodeInterface],
});

export const { connectionType: TodosConnection, edgeType: TodoEdge } = connectionDefinitions({
  name: 'Todo',
  nodeType: GraphQLNonNull(TodoType),
});
