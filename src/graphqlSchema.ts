import {makeExecutableSchema, mergeSchemas} from 'graphql-tools';
import { find, filter } from 'lodash';
import * as query from './resolver/query';

const resolvers = {
  Query: {
    allLinks: query.allLinks,
    getLink: query.getLink,
  },
}


const typeDefs = `
type Link {
  id: ID!
  url: String!
  description: String!
}
type Query {
  allLinks: [Link!]!,
  getLink(id: Int!): Link
}
type Mutation {
  
}
`;

export const schema: any = makeExecutableSchema({
  typeDefs,
  resolvers,
});
