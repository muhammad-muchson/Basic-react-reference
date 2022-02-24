import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://social-monarch-98.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret':
          'BIVee1gzUno7AUb18M7a6tleepltnWWkwsh5iYoE0UMoy5jZt5Jb9pvMIlhTngzd',
      },
      cache: new InMemoryCache(),
});

export default client;