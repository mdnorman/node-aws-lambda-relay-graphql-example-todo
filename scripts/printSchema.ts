import { printSchema } from 'graphql';
import { schema } from '../src/api';

console.log(printSchema(schema));
