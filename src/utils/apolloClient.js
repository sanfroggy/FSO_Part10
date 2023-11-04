//Importing ApolloClient and InMemoryCache, as well as the createHttpLink function.
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

//Using createHttpLink to connect to the backend.
const httpLink = createHttpLink({
    uri: 'http://192.168.232.30:4000/graphql'

});

//Defining an ApolloClient used �n App.
const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;