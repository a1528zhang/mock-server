import { find, filter } from 'lodash';

const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The Best Query Language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client'
  },
];

export const resolvers = {
  Query: {
    allLinks: () => links,
    getLink: (_, {id}) => {
      console.log(id, links, links.find((data) => {
        console.log('data :', data);
        data.id === id;
      }));
      return links.find((data) => data.id === id);
    }
  },
}
