import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';

import { connectionDefinitions, globalIdField } from 'graphql-relay';

import { nodeInterface } from './nodeDefinitions';

export const Todo = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField('Todo'),
    text: {
      type: GraphQLString,
      resolve: obj => obj.text,
    },
    complete: {
      type: GraphQLBoolean,
      resolve: obj => obj.complete,
    },
  },
  interfaces: [nodeInterface],
});

export const { connectionType: TodosConnection, edgeType: TodoEdge } = connectionDefinitions({
  name: 'Todo',
  nodeType: Todo,
});
