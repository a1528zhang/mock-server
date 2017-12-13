import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './database';

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
`;

export const schema: any = makeExecutableSchema({
  typeDefs,
  resolvers,
});
