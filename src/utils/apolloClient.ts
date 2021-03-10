import {ApolloClient, gql, InMemoryCache} from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'http://ec2-18-156-118-208.eu-central-1.compute.amazonaws.com/graphql',
    cache: new InMemoryCache(),
});

// see docs here: https://www.apollographql.com/docs/react/

export const USER_QUERY = gql`
    query GetUser {
        users {
            id
            username
            score
        }
    }
`;

export const INCREASE_SCORE = gql`
    mutation IncreaseScore($username: String!) {
        increaseScore(username: $username) {
            id
            username
            score
        }
    }
`;
