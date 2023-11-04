//Importing ApolloClient and InMemoryCache, as well as the createHttpLink function.
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

//Using createHttpLink to connect to the backend.
const httpLink = createHttpLink({
    uri: Constants.manifest.extra.env

});

//Defining an ApolloClient used ín App.
const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
